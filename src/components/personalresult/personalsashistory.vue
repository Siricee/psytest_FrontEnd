<template>
  <section class="personalsashistory">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-time"></i> 历史测试记录</el-breadcrumb-item>
        <el-breadcrumb-item>Sas历史记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <section class="solgan" style="margin: 10px 0">
      <el-row>
        <el-col :span="22">
          <p>用户 <span style="font-weight: bold">{{username}}</span> ，这是您的焦虑情绪量表历史测量记录。</p>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22">
          <div class="collapse" style="text-align: left;margin: 20px 0">
            <el-collapse>
              <el-collapse-item title="查看问卷评分解释" name="1">
                <p>分数越高，表示焦虑症状越严重。</p>
                <p>一般来说，焦虑总分低于50分者为正常；50－60者为轻度，61－70者是中度，70以上者是重度焦虑。</p>
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
              <el-table :data="usersashistory" max-height="300" border width="100%" v-loading="listLoading"
                        :row-class-name="tableRowName">
                <el-table-column prop="id" label="序号" width="80" sortable></el-table-column>
                <el-table-column prop="time" label="测试时间" :formatter="dateformatter" sortable></el-table-column>
                <el-table-column prop="sum" label="易怒评分" :formatter="anxietyFormatter"></el-table-column>
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
            <span>您的焦虑评分变化情况</span>
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
  import {getUserSAShistory} from "../../api/api";
  import {dateFormatterUtil} from "../../common/js/formatUtils";

  export default {
    name: "personalsashistory",
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
          'anxiety': '焦虑评分',
        }
      };

      return {
        // solgan
        username: '',
        // table
        usersashistory: [],
        listLoading: false,
        // graph
        isShowGraph: true,
        lineChartData: {
          columns: ['date', 'anxiety'],
          rows: [
            // {'date': '4-3', 'anxiety':'213'},
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
          let tabledata = getUserSAShistory(arguData).then((res) => {
            return res.data
          });
          resolve(tabledata); // 异步改为同步，此时数据获取完毕。
        }).then(res => {
          if (res.length > 0) {
            // 表格数据
            this.usersashistory = res;
            // 图表数据
            for (let data of res) {
              let datatime = data.time.toString().toString().substr(5, 5) + " " + data.time.toString().substr(11, 8);
              let obj = {'date': datatime, 'anxiety': parseInt(data.sum)};
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
        if (parseInt(row.sum) <= 50) {
          str += 'safe-sas-row';
        } else if (parseInt(row.sum) > 50 && parseInt(row.sum) <= 60) {
          str += 'light-sas-row';
        } else if (parseInt(row.sum) > 60 && parseInt(row.sum) <= 70) {
          str += 'medium-sas-row';
        } else if (parseInt(row.sum) > 70) {
          str += 'warning-sas-row';
        }
        return str;
      },

      anxietyFormatter: function (row, colmun) {
        let val = parseInt(row.sum);
        if (val <= 50) {
          return val + "(正常)";
        } else if (val >= 51 && val <= 60) {
          return val + "(轻度焦虑)";
        } else if (val >= 61 && val <= 70) {
          return val + "(中度焦虑)";
        } else if (val >= 71) {
          return val + "(重度焦虑)";
        }
      },

    },
    mounted() {
      this.getData();
    },
  }
</script>

<style scoped>
  section {
    margin-bottom: 10px;
  }
</style>
<style>
  .personalsashistory .el-table .safe-sas-row td:nth-child(3) {
    color: #11b95c;
  }

  .personalsashistory .el-table .light-sas-row td:nth-child(3) {
    color: #f7ba2a;
  }

  .personalsashistory .el-table .medium-sas-row td:nth-child(3) {
    color: #FF99AD;
  }

  .personalsashistory .el-table .warning-sas-row td:nth-child(3) {
    color: red;
  }
</style>
