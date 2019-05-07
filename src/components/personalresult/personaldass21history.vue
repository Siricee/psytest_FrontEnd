<template>
  <section class="personaldass21history">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-time"></i> 历史测试记录</el-breadcrumb-item>
        <el-breadcrumb-item>DASS21历史记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class="solgan" style="margin: 10px 0">
      <el-row>
        <el-col :span="22">
          <p>用户 <span style="font-weight: bold">{{username}}</span> ，这是您的抑郁-焦虑-压力量表历史测量记录。</p>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="22">
          <div class="collapse" style="text-align: left;margin: 20px 0">
            <el-collapse>
              <el-collapse-item title="查看问卷评分解释" name="1">
                <el-collapse>
                  <el-collapse-item title="抑郁" name="2">
                    <p>抑郁量表≤9分为正常，10-13分为轻度，14—20分为中度，21-27分为重度，>28分为非常严重</p>
                  </el-collapse-item>
                  <el-collapse-item title="焦虑" name="3">
                    <p>焦虑量表≤7分为正常，8-9分为轻度，10-14分为中度，15-19分为重度，>20分为非常严重</p>
                  </el-collapse-item>
                  <el-collapse-item title="压力" name="4">
                    <p>压力量表≤14分为正常，15-18分为轻度，19-25分为中度，26-33分为重度，≥34分为非常严重。</p>
                  </el-collapse-item>
                </el-collapse>
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
              <el-table :data="userdass21history" max-height="300" border width="100%" v-loading="listLoading"
                        :row-class-name="tableRowName">
                <el-table-column prop="id" label="序号" width="80" sortable></el-table-column>
                <el-table-column prop="time" label="测试时间" :formatter="dateformatter" sortable></el-table-column>
                <el-table-column prop="depression" label="抑郁" :formatter="depressionFormatter"></el-table-column>
                <el-table-column prop="anxiety" label="焦虑" :formatter="anxietyFormatter"></el-table-column>
                <el-table-column prop="stress" label="压力" :formatter="stressFormatter"></el-table-column>

              </el-table>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </section>
    <section class="section-2" v-if="isShowGraph">
      <el-row :gutter="20">
        <el-col :span="11">
          <el-card class="graph">
            <ve-line :data="lineChartData" :extend="lineChartExtend" :settings="lineChartSettings"></ve-line>
            <span>您的三项指标变化情况</span>
          </el-card>
        </el-col>
        <el-col :span="11">
          <el-card class="graph">
            <ve-radar :data="radarchartData" :extend="radarChartExtend" :settings="radarChartSettings"></ve-radar>
            <span>您的三项指标与正常值关系</span>
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
  import {getUserDass21history} from "../../api/api";
  import {dateFormatterUtil} from "../../common/js/formatUtils";

  export default {
    name: "personaldass21history",
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
          'depression': '抑郁',
          'anxiety': '焦虑',
          'stress': '压力'
        }
      };
      this.radarChartExtend = {
        series: {
          label: {
            normal: {
              show: true
            }
          }
        },
      };
      this.radarChartSettings = {
        labelMap: {
          'depression': '抑郁',
          'anxiety': '焦虑',
          'stress': '压力'
        }
      };
      return {
        // solgan
        username: '',
        // table
        userdass21history: [],
        listLoading: false,
        // graph
        isShowGraph: true,
        lineChartData: {
          columns: ['date', 'depression', 'anxiety', 'stress'],
          rows: [
            // {'date': '4-3', 'depression': 12, 'anxiety': 34, 'stress': 11},
          ]
        },
        radarchartData: {
          columns: ['类别', 'anxiety', 'depression', 'stress'],
          rows: [
            {'类别': '正常值', 'anxiety': 7, 'depression': 9, 'stress': 14},
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
          let tabledata = getUserDass21history(arguData).then((res) => {
            return res.data
          });
          resolve(tabledata); // 异步改为同步，此时数据获取完毕。
        }).then(res => {
          if (res.length > 0) {
            // 表格数据
            this.userdass21history = res;
            // 图表数据
            for (let data of res) {
              let datatime = data.time.toString().toString().substr(5, 5) + " " + data.time.toString().substr(11, 8);
              let obj = {
                'date': datatime,
                'depression': parseInt(data.depression),
                'anxiety': parseInt(data.anxiety),
                'stress': parseInt(data.stress)
              };
              this.lineChartData.rows.push(obj);
            }
            let lastdata = res[res.length - 1];
            let lastobj = {
              '类别': '您的最近一次测试值',
              'anxiety': lastdata.anxiety,
              'depression': lastdata.depression,
              'stress': lastdata.stress
            };
            this.radarchartData.rows.push(lastobj);
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
        if (parseInt(row.stress) >= 26) {
          str += 'warning-stress-row';
        }
        if (parseInt(row.anxiety) >= 15) {
          str += ' warning-anxiety-row';
        }
        if (parseInt(row.depression) >= 21) {
          str += ' warning-depression-row';
        }
        return str;
      },
      depressionFormatter: function (row, colmun) {
        let val = parseInt(row.depression);
        if (val <= 9) {
          return val + "(正常)";
        } else if (val >= 10 && val <= 13) {
          return val + "(轻微)";
        } else if (val >= 14 && val <= 20) {
          return val + "(中度)";
        } else if (val >= 21 && val <= 27) {
          return val + "(重度)";
        } else if (val >= 28) {
          return val + "(极端)";
        }
      },
      anxietyFormatter: function (row, colmun) {
        let val = parseInt(row.anxiety);
        if (val <= 7) {
          return val + "(正常)";
        } else if (val >= 8 && val <= 9) {
          return val + "(轻微)";
        } else if (val >= 10 && val <= 14) {
          return val + "(中度)";
        } else if (val >= 15 && val <= 19) {
          return val + "(重度)";
        } else if (val >= 20) {
          return val + "(极端)";
        }
      },
      stressFormatter: function (row, colmun) {
        let val = parseInt(row.stress);
        if (val <= 14) {
          return val + "(正常)";
        } else if (val >= 15 && val <= 18) {
          return val + "(轻微)";
        } else if (val >= 19 && val <= 25) {
          return val + "(中度)";
        } else if (val >= 26 && val <= 33) {
          return val + "(重度)";
        } else if (val > 33) {
          return val + "(极端)";
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
  .personaldass21history .el-table .warning-depression-row td:nth-child(3),
  .personaldass21history .el-table .warning-anxiety-row td:nth-child(4),
  .personaldass21history .el-table .warning-stress-row td:nth-child(5) {
    color: red;
  }
</style>
