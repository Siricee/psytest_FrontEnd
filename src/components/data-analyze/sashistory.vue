<template>
  <section class="sashistory">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-time"></i> 历史记录</el-breadcrumb-item>
        <el-breadcrumb-item>SAS历史记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class="sextion-1">
      <el-row :gutter="10">
        <el-col :span="11">
          <el-card class="box-card" style="overflow:auto">
            <el-table :data="sashistory" v-loading="listLoading" height="416" width="95%"
                      :summary-method="calculateAverage"
                      show-summary highlight-current-row
                      border :row-class-name="tableRowName">
              <el-table-column prop="id" label="序号" width="80" sortable></el-table-column>
              <el-table-column prop="user.id" label="测试者ID" width="80"></el-table-column>
              <el-table-column prop="time" label="测试时间" width="160" :formatter="dateformatter"
                               sortable></el-table-column>
              <el-table-column prop="sum" label="焦虑评分" sortable></el-table-column>
              <el-table-column label="操作" width="100" fixed="right">
                <template slot-scope="scope">
                  <el-button size="small" type="text" @click="handleExamine(scope.$index, scope.row)">历史记录</el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-card>
        </el-col>

        <el-col :span="11">
          <el-card class="box-card">
            <ve-gauge :data="gaugeChartData" :settings="gaugeChartSettings"></ve-gauge>
            <span>平均焦虑评分的仪表图</span>
          </el-card>
        </el-col>
      </el-row>
    </section>

    <section class="section-2">
      <el-row :gutter="10">

        <el-col :span="11">
          <el-card class="box-card">
            <ve-pie :data="pieChartData" :settings="pieChartSettings"></ve-pie>
            <span>有明显负面情绪倾向人群的性别、婚姻情况分布</span>
            <p>性别关联度:{{ sex_relevance }}</p> <!-- 0.719(60%-75%概率相关) -->
            <p>是否已婚关联度:{{ marriage_relevance }}</p><!-- 0.721(60%-75%概率相关) -->
          </el-card>
        </el-col>

        <el-col :span="11">
          <el-card class="box-card">
            <ve-histogram :data="histogramData"></ve-histogram>
            <span>有负面情绪倾向人群的年龄统计</span>
            <p>年龄关联度:{{ age_relevance }}</p>
          </el-card>
        </el-col>

      </el-row>
    </section>

    <section class="section-3">
      <el-row :gutter="10">
        <el-col :span="11">
          <el-card class="box-card">
            <ve-ring :data="ringChartData"></ve-ring>
            <span>有明显负面情绪倾向人群的收入分布</span>
            <p>收入关联度:{{ salary_relevance }}</p>
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
        <el-table :data="usersashistory" max-height="300" border width="100%" v-loading="listLoading"
                  :row-class-name="tableRowName">
          <el-table-column prop="id" label="序号" width="80" sortable></el-table-column>
          <el-table-column prop="userid" label="测试者ID" width="80"></el-table-column>
          <el-table-column prop="time" label="测试时间" :formatter="dateformatter" sortable></el-table-column>
          <el-table-column prop="sum" label="焦虑评分" sortable></el-table-column>
        </el-table>
      </div>
      <span slot="footer" class="dialog-footer">
      <el-button type="primary" @click="ExamineDialogVisible = false">关闭</el-button>
      </span>
    </el-dialog>

  </section>
</template>

<script>
  import {getSAShistoryListWithUserData, getUserSAShistory} from "../../api/api";
  import {
    formatWorkUtil,
    formatSexUtil,
    formatMarriageUtil,
    formatSalaryUtil,
    dateFormatterUtil
  } from "../../common/js/formatUtils";
  import {calculate} from "../../api/calculation";

  export default {
    name: "sashistory",
    data() {
      // 仪表盘
      this.gaugeChartSettings = {
        dataName:{
          'score':'焦虑评分'
        },
        seriesMap:{
          'score':{
            min:0,
            max:100,
            splitNumber:10,
            axisLine:{
              lineStyle:{
                color: [[0.5, '#2B91D5'],[0.6,'#55AA77'], [0.7, '#AAAA55'], [1, '#c23531']],
                width: 30,
                shadowColor: '#fff',
                shadowBlur: 10
              }
            }
          }
        }
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
        // relevance
        sex_relevance: '',
        marriage_relevance:'',
        age_relevance:'',
        salary_relevance:'',



        // dialog
        username: '',
        userId: '',
        ExamineDialogVisible: false,
        usersashistory: [],
        userInfo: [],
        // table
        listLoading: true,
        sashistory: [],
        // graph
        ringChartData: {
          columns: ['收入情况', '人数'],
          rows: [
            // {'收入情况': '1000元以下', '人数': 1393},
            // {'收入情况': '1000-1999元', '人数': 3530},
            // {'收入情况': '2000-3999元', '人数': 2923},
            // {'收入情况': '4000-5999元', '人数': 1723},
            // {'收入情况': '6000-9999元', '人数': 3792},
            // {'收入情况': '10000-19999元', '人数': 4593}
          ]
        },
        histogramData: {
          columns: ['年龄', '焦虑'],
          rows: [
            // {'年龄': '20-30', '焦虑': 1093,},
            // {'年龄': '30-40','焦虑': 3230,},
            // {'年龄': '40-50', '焦虑': 2623,},
            // {'年龄': '50-70',  '焦虑': 1423,},
            // {'年龄': '70+', '焦虑': 3492, },
          ]
        },

        gaugeChartData: {
          columns: ['type', 'value'],
          rows: [
            // { type: 'score', value:54, }
          ]
        },
        pieChartData: {
          columns: ['人群', '负面情绪倾向人数'],
          rows: [
            // {'人群': '男', '负面情绪倾向人数': 393},
            // {'人群': '女', '负面情绪倾向人数': 530},
            // {'人群': '已婚', '负面情绪倾向人数': 240},
            // {'人群': '未婚', '负面情绪倾向人数': 350},
          ]
        },
        heatMapChartData: {
          columns: ['lat', 'lng', '人数'],
          rows: [
            {'lat': 115.892151, 'lng': 40.676493, '人数': 800},
            {'lat': 115.892151, 'lng': 28.676493, '人数': 1000},
            {'lat': 117.000923, 'lng': 36.675807, '人数': 400},
            {'lat': 113.665412, 'lng': 34.757975, '人数': 800},
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
            let tabledata = getSAShistoryListWithUserData().then((res) => {
              return res.data
            });
            resolve(tabledata); // 异步改为同步，此时数据获取完毕。
          }).then(res => {
            this.sashistory = res;
            this.listLoading = false;
            // 仪表盘变量
            let anxiety_avg = 0;
            // 饼图变量
            let male = 0;
            let female = 0;
            let marriaged = 0;
            let unmamarriaged = 0;
            // 环图变量
            let salary_num_1 = 0, salary_num_2 = 0, salary_num_3 = 0, salary_num_4 = 0, salary_num_5 = 0,
              salary_num_6 = 0, salary_num_7 = 0;

            let anxiety_20_30 = 0;
            let anxiety_30_40 = 0;
            let anxiety_40_50 = 0;
            let anxiety_50_70 = 0;
            let anxiety_70more = 0;
            for (let data of res) {
              // 仪表盘
              anxiety_avg += parseInt(data.sum);
              // 饼图
              if (parseInt(data.sum) > 59) {
                parseInt(data.user.sex) === 1 ? male += 1 : female += 1;
                parseInt(data.user.marriage) === 1 ? marriaged += 1 : unmamarriaged += 1;
                // 环图
                switch (parseInt(data.user.salary)) {
                  case 1:
                    salary_num_1 += 1;
                    break;
                  case 2:
                    salary_num_2 += 1;
                    break;
                  case 3:
                    salary_num_3 += 1;
                    break;
                  case 4:
                    salary_num_4 += 1;
                    break;
                  case 5:
                    salary_num_5 += 1;
                    break;
                  case 6:
                    salary_num_6 += 1;
                    break;
                  case 7:
                    salary_num_7 += 1;
                    break;
                }
                // 条形图
                if (parseInt(data.user.age) >= 20 && parseInt(data.user.age) < 30) {
                  anxiety_20_30 += 1;
                } else if (parseInt(data.user.age) >= 30 && parseInt(data.user.age) < 40) {
                  anxiety_30_40 += 1;
                } else if (parseInt(data.user.age) >= 40 && parseInt(data.user.age) < 50) {
                  anxiety_40_50 += 1;
                } else if (parseInt(data.user.age) >= 50 && parseInt(data.user.age) < 70) {
                  anxiety_50_70 += 1;
                } else if (parseInt(data.user.age) >= 70) {
                  anxiety_70more += 1;
                }
              }
            }
            // 仪表盘
            anxiety_avg = Math.round(anxiety_avg/res.length);
            let obj = { type: 'score', value: anxiety_avg };
            this.gaugeChartData.rows.push(obj);

            // 饼图
            let pieArray = [
              {'人群': '男', '负面情绪倾向人数': male},
              {'人群': '女', '负面情绪倾向人数': female},
              {'人群': '已婚', '负面情绪倾向人数': marriaged},
              {'人群': '未婚', '负面情绪倾向人数': unmamarriaged},
            ];
            for (let i of pieArray) {
              this.pieChartData.rows.push(i);
            }
            // 环图
            let ringArray = [
              {'收入情况': '1000元以下', '人数': salary_num_1},
              {'收入情况': '1000-1999元', '人数': salary_num_2},
              {'收入情况': '2000-3999元', '人数': salary_num_3},
              {'收入情况': '4000-5999元', '人数': salary_num_4},
              {'收入情况': '6000-9999元', '人数': salary_num_5},
              {'收入情况': '10000-19999元', '人数': salary_num_6},
              {'收入情况': '200000元以上', '人数': salary_num_7}
            ];
            for (let i of ringArray) {
              this.ringChartData.rows.push(i);
            }
            // 条形图
            let histoArray = [{'年龄': '20-30', '焦虑': anxiety_20_30, },
              {'年龄': '30-40', '焦虑': anxiety_30_40, },
              {'年龄': '40-50', '焦虑': anxiety_40_50, },
              {'年龄': '50-70', '焦虑': anxiety_50_70, },
              {'年龄': '70+', '焦虑': anxiety_70more, },]
            for (let i of histoArray) {
              this.histogramData.rows.push(i);
            }

            // relevance
            this.sex_relevance='0.719(60%-75%概率相关)';
            this.marriage_relevance='0.721(60%-75%概率相关)';
            this.age_relevance='0.528(50%-60%概率相关)';
            this.salary_relevance='0.437(低于50%概率相关)';

          });
        },
        // 带状态表格的行列标注：
        // :row-class-name渲染之后会变为class属性，接收的参数为字符串。
        // 因此可以根据条件进行拼接字符串，搭配子元素选择器可以实现单个元素的着色。
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

          getUserSAShistory(data).then((res) => {
            this.usersashistory = res.data;
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
 .sashistory .el-table .safe-sas-row td:nth-child(4) {
    color: #11b95c;
  }

  .sashistory .el-table .light-sas-row td:nth-child(4) {
    color: #f7ba2a;
  }

  .sashistory .el-table .medium-sas-row td:nth-child(4) {
    color: #FF99AD;
  }

  .sashistory .el-table .warning-sas-row td:nth-child(4) {
    color: red;
  }

 .el-card {
   margin-bottom: 10px;
 }
 .box-card .el-card__body{
   min-height: 450px;
 }
</style>
