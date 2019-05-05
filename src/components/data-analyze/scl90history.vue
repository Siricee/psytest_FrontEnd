<template>
  <section class="scl90history">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-time"></i> 历史记录</el-breadcrumb-item>
        <el-breadcrumb-item>SCL90历史记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class="sextion-1">
      <el-row :gutter="20">
        <el-col :span="11">
          <el-card class="box-card" style="overflow:auto">
            <el-table :data="scl90history" v-loading="listLoading" height="416" width="95%"
                      :summary-method="calculateAverage"
                      show-summary highlight-current-row
                      border :row-class-name="tableRowName">
              <el-table-column prop="id" label="序号" width="80" sortable></el-table-column>
              <el-table-column prop="user.id" label="测试者ID" width="80" sortable></el-table-column>
              <el-table-column prop="time" label="测试时间" width="160" :formatter="dateformatter"
                               sortable></el-table-column>
              <el-table-column prop="sumscore" label="总评分" width="90" sortable></el-table-column>
              <el-table-column prop="posSymptomCount" label="阳性回答数" width="90" sortable></el-table-column>
              <el-table-column prop="posSymptomAvgscore" label="阳性回答均分" width="90" sortable></el-table-column>
              <el-table-column prop="somatization" label="躯体化F1" width="90" sortable></el-table-column>
              <el-table-column prop="obsessive" label="强迫症状F2" width="90" sortable></el-table-column>
              <el-table-column prop="interpersonal" label="人际关系敏感F3" width="90" sortable></el-table-column>
              <el-table-column prop="depression" label="抑郁F4" width="90" sortable></el-table-column>
              <el-table-column prop="anxiety" label="焦虑F5" width="90" sortable></el-table-column>
              <el-table-column prop="hostility" label="敌对F6" width="90" sortable></el-table-column>
              <el-table-column prop="phobic" label="恐怖F7" width="90" sortable></el-table-column>
              <el-table-column prop="paranoid" label="偏执F8" width="90" sortable></el-table-column>
              <el-table-column prop="psychoticism" label="精神病性F9" width="90" sortable></el-table-column>

              <el-table-column label="操作" width="70" fixed="right">
                <template slot-scope="scope">
                  <el-button size="small" type="text" @click="handleExamine(scope.$index, scope.row)">历史记录</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>

        <el-col :span="11">
          <el-card class="box-card">
            <ve-radar :data="radarchartData" :settings="radarChartSettings" height="400px"></ve-radar>
            <span>9种症状评分雷达图</span>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section class="section-2">
      <el-row :gutter="20">


        <el-col :span="11">
          <el-card class="box-card">
            <ve-pie :data="pieChartData" :settings="pieChartSettings"></ve-pie>
            <span>有明显负面情绪倾向人群的性别、婚姻情况分布</span>
          </el-card>
        </el-col>

        <el-col :span="11">
          <el-card class="box-card">
            <ve-histogram :data="histogramData"></ve-histogram>
            <span>有负面情绪倾向人群的年龄统计</span>
          </el-card>
        </el-col>

      </el-row>
    </section>

    <section class="section-3">
      <el-row :gutter="20">
        <el-col :span="11">
          <el-card class="box-card">
            <ve-ring :data="ringChartData"></ve-ring>
            <span>有明显负面情绪倾向人群的收入分布</span>
          </el-card>
        </el-col>

        <el-col :span="11">
          <el-card class="box-card">
            <ve-heatmap :data="heatMapChartData" :settings="heatMapChartSettings"></ve-heatmap>
            <span>有明显负面情绪倾向人群的地区分布</span>
          </el-card>
        </el-col>
      </el-row>
    </section>


    <!--    查看个人历史记录 对话弹框-->
    <el-dialog title="历史记录" :visible.sync="ExamineDialogVisible" width="50%">

      <p style="margin: 20px 0">用户名: {{username}} (ID:{{userId}}) 的历史记录</p>
      <div class="userInfoTable" style="margin-bottom: 20px">
        <el-table :data="userInfo" border width="100%">
          <el-table-column prop="age" label="年龄" width="80"></el-table-column>
          <el-table-column prop="sex" label="性别" :formatter="formatSex" width="80"></el-table-column>
          <el-table-column prop="location" label="地区"></el-table-column>
          <el-table-column prop="salary" label="薪资" :formatter="formatSalary" width="120"></el-table-column>
          <el-table-column prop="work" label="从事行业" :formatter="formatWork"></el-table-column>
          <el-table-column prop="marriage" label="是否已婚" :formatter="formatMarriage" width="80"></el-table-column>
        </el-table>
      </div>
      <div style="text-align: center">
        <el-table :data="userscl90history" max-height="300" border width="100%" v-loading="listLoading"
                  :row-class-name="tableRowName">
          <el-table-column prop="id" label="序号" width="80" sortable></el-table-column>
          <el-table-column prop="userid" label="测试者ID" width="80"></el-table-column>
          <el-table-column prop="time" label="测试时间" :formatter="dateformatter" sortable></el-table-column>
          <el-table-column prop="sumscore" label="总评分" width="90" sortable></el-table-column>
          <el-table-column prop="posSymptomCount" label="阳性回答数" width="90" sortable></el-table-column>
          <el-table-column prop="posSymptomAvgscore" label="阳性回答均分" width="90" sortable></el-table-column>
          <el-table-column prop="somatization" label="躯体化" width="90" sortable></el-table-column>
          <el-table-column prop="obsessive" label="强迫症状" width="90" sortable></el-table-column>
          <el-table-column prop="interpersonal" label="人际关系敏感" width="90" sortable></el-table-column>
          <el-table-column prop="depression" label="抑郁" width="90" sortable></el-table-column>
          <el-table-column prop="anxiety" label="焦虑" width="90" sortable></el-table-column>
          <el-table-column prop="hostility" label="敌对" width="90" sortable></el-table-column>
          <el-table-column prop="phobic" label="恐怖" width="90" sortable></el-table-column>
          <el-table-column prop="paranoid" label="偏执" width="90" sortable></el-table-column>
          <el-table-column prop="psychoticism" label="精神病性" width="90" sortable></el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="ExamineDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>

  </section>
</template>

<script>
  import {getScl90historyListWithUserData, getUserScl90history} from "../../api/api";
  import {
    formatWorkUtil,
    formatSexUtil,
    formatMarriageUtil,
    formatSalaryUtil,
    dateFormatterUtil
  } from "../../common/js/formatUtils";

  export default {
    name: "scl90history",
    data() {
      // 雷达图
      this.radarChartSettings = {
        metrics: ['F1','F2','F3','F4','F5','F6','F7','F8','F9',],
      };
      // 双环饼图
      this.pieChartSettings = {
        level: [
          ['男', '女',],
          ['已婚', '未婚']
        ]
      };
      // 热力图
      this.heatMapChartSettings = {
        position: 'china',
        type: 'map',
        geo: {
          label: {
            emphasis: {
              show: false
            }
          },
          itemStyle: {
            normal: {
              areaColor: '#323c48',
              borderColor: '#111'
            },
            emphasis: {
              areaColor: '#2a333d'
            }
          }
        }
      };

      return {
        // dialog
        username: '',
        userId: '',
        ExamineDialogVisible: false,
        userscl90history: [],
        userInfo: [],
        // table
        listLoading: true,
        scl90history: [],
        // graph
        ringChartData: {
          columns: ['收入情况', '人数'],
          rows: [
            {'收入情况': '1000元以下', '人数': 1393},
            {'收入情况': '1000-1999元', '人数': 3530},
            {'收入情况': '2000-3999元', '人数': 2923},
            {'收入情况': '4000-5999元', '人数': 1723},
            {'收入情况': '6000-9999元', '人数': 3792},
            {'收入情况': '10000-19999元', '人数': 4593}
          ]
        },
        histogramData: {
          columns: ['年龄', 'F1','F2','F3','F4','F5','F6','F7','F8','F9',],
          rows: [
            {'年龄': '20-30', 'F1':662,'F2':574,'F3':795,'F4':677,'F5':821,'F6':736,'F7':310,'F8':659,'F9':845,},
            {'年龄': '30-40', 'F1':459,'F2':514,'F3':411,'F4':501,'F5':936,'F6':527,'F7':749,'F8':260,'F9':858,},
            {'年龄': '40-50', 'F1':180,'F2':944,'F3':325,'F4':934,'F5':177,'F6':502,'F7':844,'F8':477,'F9':944,},
            {'年龄': '50-70', 'F1':135,'F2':807,'F3':707,'F4':264,'F5':600,'F6':183,'F7':605,'F8':308,'F9':646,},
            {'年龄': '70+', 'F1':139,'F2':941,'F3':325,'F4':311,'F5':723,'F6':300,'F7':335,'F8':498,'F9':926,},
          ]
        },
        radarchartData: {
          columns: ['类别', 'F1','F2','F3','F4','F5','F6','F7','F8','F9'],
          rows: [
            {'类别': '测试用户平均值','F1':1.24,'F2':2.23,'F3':1.71,'F4':2.02,'F5':0.25,'F6':0.31,'F7':4.26,'F8':2.78,'F9':0.87,},
            {'类别': '常模', 'F1':1.37,'F2':1.62,'F3':1.65,'F4':1.50,'F5':1.39,'F6':1.48,'F7':1.23,'F8':1.43,'F9':1.29},
            {'类别': '正常值', 'F1':2.54,'F2':1.53,'F3':4.37,'F4':3.98,'F5':4.99,'F6':2.49,'F7':3.71,'F8':3.45,'F9':1.79,},
          ]
        },
        pieChartData: {
          columns: ['人群', '负面情绪倾向人数'],
          rows: [
            {'人群': '男', '负面情绪倾向人数': 393},
            {'人群': '女', '负面情绪倾向人数': 530},
            {'人群': '已婚', '负面情绪倾向人数': 240},
            {'人群': '未婚', '负面情绪倾向人数': 350},
          ]
        },
        heatMapChartData: {
          columns: ['lat', 'lng', '人数'],
          rows: [
            {'lat': 115.892151, 'lng': 28.676493, '人数': 1000},
            {'lat': 117.000923, 'lng': 36.675807, '人数': 400},
            {'lat': 113.665412, 'lng': 34.757975, '人数': 800},
            {'lat': 114.298572, 'lng': 30.584355, '人数': 200},
            {'lat': 112.982279, 'lng': 28.19409, '人数': 100},
            {'lat': 113.280637, 'lng': 23.125178, '人数': 300},
            {'lat': 110.33119, 'lng': 20.031971, '人数': 800},
            {'lat': 104.065735, 'lng': 30.659462, '人数': 700},
            {'lat': 108.948024, 'lng': 34.263161, '人数': 300},
            {'lat': 103.823557, 'lng': 36.058039, '人数': 500}
          ]
        },
      }
    },
    methods:
      {
        // 表格数据：
        // 此处应该为全局数据。
        getData() {
          new Promise((resolve, reject) => {
            let tabledata = getScl90historyListWithUserData().then((res) => {
              return res.data
            });
            resolve(tabledata); // 异步改为同步，此时数据获取完毕。
          }).then(res => {
            this.scl90history = res;
            this.listLoading = false;
          });
        },
        // 带状态表格的行列标注：
        // :row-class-name渲染之后会变为class属性，接收的参数为字符串。
        // 因此可以根据条件进行拼接字符串，搭配子元素选择器可以实现单个元素的着色。
        tableRowName({row, rowIndex}) {
          let str = '';
          if (parseInt(row.sumscore) > 160) {
            str += 'warning-sum-row ';
          }
          if ((parseInt(row.somatization) / 10).toFixed(2) > 1.37) {
            str += 'warning-somatization-row '
          }
          if ((parseInt(row.obsessive) / 10).toFixed(2) > 1.62) {
            str += 'warning-obsessive-row '
          }
          if ((parseInt(row.interpersonal) / 9).toFixed(2) > 1.65) {
            str += 'warning-interpersonal-row '
          }
          if ((parseInt(row.depression) / 13).toFixed(2) > 1.50) {
            str += 'warning-depression-row '
          }
          if ((parseInt(row.anxiety) / 10).toFixed(2) > 1.39) {
            str += 'warning-anxiety-row '
          }
          if ((parseInt(row.hostility) / 6).toFixed(2) > 1.48) {
            str += 'warning-hostility-row '
          }
          if ((parseInt(row.phobic) / 7).toFixed(2) > 1.23) {
            str += 'warning-phobic-row '
          }
          if ((parseInt(row.paranoid) / 6).toFixed(2) > 1.43) {
            str += 'warning-paranoid-row '
          }
          if ((parseInt(row.psychoticism) / 10).toFixed(2) > 1.29) {
            str += 'warning-psychoticism-row '
          }
          return str;
        }
        ,
        // 表格平均值计算方法
        calculateAverage(param) {
          const {columns, data} = param;
          const sums = [];
          columns.forEach((column, index) => {
            if (index === 0) {
              sums[index] = '平均值';
              return;
            }
            const values = data.map(item => Number(item[column.property]));
            if (!values.every(value => isNaN(value))) {
              sums[index] = values.reduce((prev, curr) => {
                const value = Number(curr);
                if (!isNaN(value)) {
                  return prev + curr;
                } else {
                  return prev;
                }
              }, 0);
              sums[index] = (sums[index] / data.length).toFixed(3);
            } else {
              sums[index] = '--';
            }
          });
          return sums;
        }
        ,
        // 表格按钮事件
        handleExamine: function (index, row) {
          this.ExamineDialogVisible = true;
          this.username = row.user.username;
          this.userId = row.user.id;
          let arr = [];
          arr.push(row.user);
          this.userInfo = arr;
          // console.log(row);
          let data = {userid: parseInt(row.user.id)};

          getUserScl90history(data).then((res) => {
            this.userscl90history = res.data;
          })
        }
        ,
        // 表格数据格式化
        dateformatter: function (row, column) {
          return dateFormatterUtil(row, column);
        }
        ,
        formatSex: function (row, colmun) {
          return formatSexUtil(row, colmun);
        }
        ,
        formatSalary: function (row, colmun) {
          return formatSalaryUtil(row, colmun);
        }
        ,
        formatMarriage: function (row, colmun) {
          return formatMarriageUtil(row, colmun);
        }
        ,
        formatWork: function (row, colmun) {
          return formatWorkUtil(row, colmun);
        }
        ,

      }
    ,
    mounted() {
      this.getData();
    }
  }
</script>

<style scoped>

</style>
<style>
  .scl90history .el-table .warning-sum-row td:nth-child(4),
  .scl90history .el-table .warning-somatization-row td:nth-child(7),
  .scl90history .el-table .warning-obsessive-row td:nth-child(8),
  .scl90history .el-table .warning-interpersonal-row td:nth-child(9),
  .scl90history .el-table .warning-depression-row td:nth-child(10),
  .scl90history .el-table .warning-anxiety-row td:nth-child(11),
  .scl90history .el-table .warning-hostility-row td:nth-child(12),
  .scl90history .el-table .warning-phobic-row td:nth-child(13),
  .scl90history .el-table .warning-paranoid-row td:nth-child(14),
  .scl90history .el-table .warning-psychoticism-row td:nth-child(15) {
    color: #e64242;
  }

  .el-card {
    margin-bottom: 20px;
  }

</style>
