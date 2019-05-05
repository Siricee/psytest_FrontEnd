<template>
  <section class="personalnovackhistory">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-time"></i> 历史测试记录</el-breadcrumb-item>
        <el-breadcrumb-item>Novack历史记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class="solgan" style="margin: 10px 0">
      <el-row>
        <el-col :span="22">
          <p>用户 <span style="font-weight: bold">{{username}}</span> ，这是您的易怒情绪量表历史测量记录。</p>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22">
          <div class="collapse" style="text-align: left;margin: 20px 0">
            <el-collapse>
              <el-collapse-item title="查看问卷评分解释" name="1">
                <p>分数越高，表示你越容易被激怒。</p>
                <p>将所有选项的分数相加，现在你可以根据下面的分值来解释你的总分：</p>
                <ul>
                  <li>0-45：你所体验到的愤怒与烦恼的数量相当低。只有很少一部分人在测试中能得这么低的分数。你就属于这一少部分人！</li>
                  <li>46-55：你事实上要比一般人更平静。</li>
                  <li>56-75：你对生活的烦恼报以同等数量的愤怒。</li>
                  <li>76-85：你经常用一种愤怒的方式来对待生活中所遇到的烦恼。你事实上比一般人更易激怒。</li>
                  <li>86-100：你真的是愤怒冠军，你被经常出现的狂怒反应所折磨，这种反应不能很快消失。在最初的羞辱过去很久之后，你或许还一直有一种消极情感。你或许在你所知道的人当中有鞭炮或莽夫之名。你可能经常会感到紧张头痛，血压也会经常升高。你的愤怒经常失去控制，非常冲动的爆发出敌意来，这种冲动有时会让你陷入麻烦。成人中只有很少一部分人像你这样做出激烈的反应。</li>
                </ul>
              </el-collapse-item>
            </el-collapse>
          </div>
        </el-col>
      </el-row>

    </section>

    <section class="section-1" v-if="isShowGraph">
      <el-row>
        <el-col :span="22">
          <el-card class="table">
            <div style="text-align: center">
              <el-table :data="usernovackhistory" max-height="300" border width="100%" v-loading="listLoading"
                        :row-class-name="tableRowName">
                <el-table-column prop="id" label="序号" width="80" sortable></el-table-column>
                <el-table-column prop="time" label="测试时间" :formatter="dateformatter" sortable></el-table-column>
                <el-table-column prop="sum" label="易怒评分" :formatter="angryFormatter"></el-table-column>
              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section class="section-2" v-if="isShowGraph">
      <el-row :gutter="20">
        <el-col :span="22">
          <el-card class="graph">
            <ve-line :data="lineChartData" :extend="lineChartExtend" :settings="lineChartSettings"></ve-line>
            <span>您的易怒评分变化情况</span>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section class="section-nodata" v-if="!isShowGraph">
      <span>您没有本问卷的提交记录！</span>
    </section>

  </section>
</template>

<script>
  import {getUserNovackhistory} from "../../api/api";
  import {dateFormatterUtil} from "../../common/js/formatUtils";

  export default {
    name: "personalnovackhistory",
    data() {
      this.lineChartExtend = {
        series: {
          label: {
            normal: {
              show: true
            }
          }
        },
      };
      this.lineChartSettings = {
        labelMap: {
          'date': '日期',
          'angry': '易怒评分',
        }
      };

      return {
        // solgan
        username: '',
        // table
        usernovackhistory: [],
        listLoading: false,
        // graph
        isShowGraph: true,
        lineChartData: {
          columns: ['date', 'angry'],
          rows: [
            // {'date': '4-3', 'angry':'213'},
          ]
        },

      }
    },
    methods: {
      getData() {
        // 获取登录信息中的userid
        let login_user = JSON.parse(localStorage.getItem('user'));
        if (login_user) {
          // console.log(login_user.userid + login_user.username);
          this.username = login_user.username;
          var arguData = {userid: parseInt(login_user.userid)};
        } else {
          this.$message.error("请先登录");
          return false;
        }

        new Promise((resolve, reject) => {
          let tabledata = getUserNovackhistory(arguData).then((res) => {
            return res.data
          });
          resolve(tabledata); // 异步改为同步，此时数据获取完毕。

        }).then(res => {
          if (res.length > 0) {
            // 表格数据
            this.usernovackhistory = res;
            // 图表数据
            for (let data of res) {
              let datatime = data.time.toString().toString().substr(5, 5) + " " + data.time.toString().substr(11, 8);
              let obj = {'date': datatime, 'angry': parseInt(data.sum)};
              this.lineChartData.rows.push(obj);
            }
          } else {
            this.isShowGraph = false;
          }
        });
      },
      // 表格数据格式化
      dateformatter: function (row, column) {
        return dateFormatterUtil(row, column);
      },
      tableRowName({row, rowIndex}) {
        let str = '';
        if (parseInt(row.sum) <= 45) {
          str += 'safe-novack-row';
        } else if (parseInt(row.sum) > 45 && parseInt(row.sum) <= 55) {
          str += 'light-novack-row';
        } else if (parseInt(row.sum) > 55 && parseInt(row.sum) <= 75) {
          str += 'medium-novack-row';
        } else if (parseInt(row.sum) > 75 && parseInt(row.sum) <= 85) {
          str += 'more-novack-row';
        } else if (parseInt(row.sum) > 85) {
          str += 'warning-novack-row';
        }
        return str;
      },

      angryFormatter: function (row, colmun) {
        let val = parseInt(row.sum);
        if (val <= 45) {
          return val + "(正常)";
        } else if (val >= 46 && val <= 55) {
          return val + "(轻微)";
        } else if (val >= 56 && val <= 75) {
          return val + "(中度)";
        } else if (val >= 76 && val <= 85) {
          return val + "(重度)";
        } else if (val >= 86) {
          return val + "(极端)";
        }
      },

    },
    mounted() {
      this.getData();
    },
  }
</script>

<style lang="css">
  section {
    margin-bottom: 20px;
  }

  .personalnovackhistory .el-table .safe-novack-row td:nth-child(3) {
    color: #2db7f5;
  }

  .personalnovackhistory .el-table .light-novack-row td:nth-child(3) {
    color: #11b95c;
  }

  .personalnovackhistory .el-table .medium-novack-row td:nth-child(3) {
    color: #f7ba2a;
  }

  .personalnovackhistory .el-table .more-novack-row td:nth-child(3) {
    color: #FF99AD;
  }

  .personalnovackhistory .el-table .warning-novack-row td:nth-child(3) {
    color: red;
  }
</style>
<style>

</style>
