<template>
  <section class="personalscl90history">
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-time"></i> 历史测试记录</el-breadcrumb-item>
        <el-breadcrumb-item>SCL90历史记录</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <section class="solgan" style="margin: 10px 0">
      <el-row>
        <el-col :span="22">
          <p>用户 <span style="font-weight: bold">{{username}}</span> ，这是您的症状自评量表历史测量记录。</p>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="22">
          <div class="collapse" style="text-align: left;margin: 20px 0">
          <el-collapse>
            <el-collapse-item title="查看问卷评分解释" name="1">
              <el-collapse>
                <el-collapse-item title="因子分" name="2">
                  <p>SCL-90包括9个因子，每一个因子反映出个体某方面的症状情况，通过因子分可了解症状分布特点。因子分等于组成某一因子的各项总分与组成某一因子的项目数。当个体在某一因子的得分大于2时，即超出正常均分，则个体在该方面就很有可能有心理健康方面的问题。</p>
                </el-collapse-item>
                <el-collapse-item title="阳性项目数" name="3">
                  <p>指被评为2-5分的项目数分别是多少，它表示被试在多少项目中感到“有症状”。</p>
                </el-collapse-item>
                <el-collapse-item title="阳性症状均分" name="4">
                  <p>指个体自我感觉不佳的项目的程度究竟处于哪个水平。其意义与总症状指数的相同。</p>
                </el-collapse-item>
                <el-collapse-item title="躯体化" name="5">
                  <p>主要反映身体不适感，包括心血管、胃肠道、呼吸和其他系统的不适，和头痛、背痛、肌肉酸痛，以及焦虑等躯体不适表现。</p>
                  <p>该分量表的得分在12-60分之间。得分在36分以上，表明个体在身体上有较明显的不适感，并常伴有头痛、肌肉酸痛等症状。得分在24分以下，躯体症状表现不明显。总的说来，得分越高，躯体的不适感越强；得分越低，症状体验越不明显。</p>
                </el-collapse-item>
                <el-collapse-item title="强迫症状" name="6">
                  <p>主要指那些明知没有必要，但又无法摆脱的无意义的思想、冲动和行为，还有一些比较一般的认知障碍的行为征象也在这一因子中反映。</p>
                  <p>该分量表的得分在10-50分之间。得分在30分以上，强迫症状较明显。得分在20分以下，强迫症状不明显。总的说来，得分越高，表明个体越无法摆脱一些无意义的行为、思想和冲动，并可能表现出一些认知障碍的行为征兆。得分越低，表明个体在此种症状上表现越不明显，没有出现强迫行为。</p>
                </el-collapse-item>
                <el-collapse-item title="人际关系敏感" name="7">
                  <p>主要是指某些人际的不自在与自卑感，特别是与其他人相比较时更加突出。在人际交往中的自卑感，心神不安，明显的不自在，以及人际交流中的不良自我暗示，消极的期待等是这方面症状的典型原因。</p>
                  <p>该分量表的得分在9-45分之间。得分在27分以上，表明个体人际关系较为敏感，人际交往中自卑感较强，并伴有行为症状（如坐立不安，退缩等）。得分在18分以下，表明个体在人际关系上较为正常。总的说来，得分越高，个体在人际交往中表现的问题就越多，自卑，自我中心越突出，并且已表现出消极的期待。得分越低，个体在人际关系上越能应付自如，人际交流自信、胸有成竹，并抱有积极的期待。</p>
                </el-collapse-item>
                <el-collapse-item title="抑郁" name="8">
                  <p>苦闷的情感与心境为代表性症状，还以生活兴趣的减退，动力缺乏，活力丧失等为特征。还表现出失望、悲观以及与抑郁相联系的认知和躯体方面的感受，另外，还包括有关死亡的思想和自杀观念。</p>
                  <p>该分量表的得分在13-65分之间。得分在39分以上，表明个体的抑郁程度较强，生活缺乏足够的兴趣，缺乏运动活力，极端情况下，可能会有想死亡的思想和自杀的观念。得分在26分以下，表明个体抑郁程度较弱，生活态度乐观积极，充满活力，心境愉快。总的说来，得分越高，抑郁程度越明显，得分越低，抑郁程度越不明显。</p>
                </el-collapse-item>
                <el-collapse-item title="焦虑" name="9">
                  <p>一般指那些烦躁，坐立不安，神经过敏，紧张以及由此产生的躯体征象，如震颤等。</p>
                  <p>该分量表的得分在10-50分之间。得分在30分以上，表明个体较易焦虑，易表现出烦躁、不安静和神经过敏，极端时可能导致惊恐发作。得分在20分以下，表明个体不易焦虑，易表现出安定的状态。总的说来，得分越高，焦虑表现越明显。得分越低，越不会导致焦虑。</p>
                </el-collapse-item>
                <el-collapse-item title="敌对" name="10">
                  <p>主要从三方面来反映敌对的表现：思想、感情及行为。其项目包括厌烦的感觉，摔物，争论直到不可控制的脾气暴发等各方面。</p>
                  <p>该分量表的得分在6-30分之间。得分在18分以上，表明个体易表现出敌对的思想、情感和行为。得分在12分以下表明个体容易表现出友好的思想、情感和行为。总的说来，得分越高，个体越容易敌对，好争论，脾气难以控制。得分越低，个体的脾气越温和，待人友好，不喜欢争论、无破坏行为。</p>
                </el-collapse-item>
                <el-collapse-item title="恐怖" name="11">
                  <p>恐惧的对象包括出门旅行，空旷场地，人群或公共场所和交通工具。此外，还有社交恐怖。</p>
                  <p>该分量表的得分在7-35分之间。得分在21分以上，表明个体恐怖症状较为明显，常表现出社交、广场和人群恐惧，得分在14分以下，表明个体的恐怖症状不明显。总的说来，得分越高，个体越容易对一些场所和物体发生恐惧，并伴有明显的躯体症状。得分越低，个体越不易产生恐怖心理，越能正常的交往和活动。</p>
                </el-collapse-item>
                <el-collapse-item title="偏执" name="12">
                  <p>主要指投射性思维，敌对，猜疑，妄想，被动体验和夸大等。</p>
                  <p>该分量表的得分在6-30分之间。得分在18分以上，表明个体的偏执症状明显，较易猜疑和敌对，得分在12分以下，表明个体的偏执症状不明显。总的说来，得分越高，个体越易偏执，表现出投射性的思维和妄想，得分越低，个体思维越不易走极端。</p>
                </el-collapse-item>
                <el-collapse-item title="精神病性" name="13">
                  <p>反映各式各样的急性症状和行为，即限定不严的精神病性过程的症状表现。</p>
                  <p>该分量表的得分在10-50分之间。得分在30分以上，表明个体的精神病性症状较为明显，得分在20分以下，表明个体的精神病性症状不明显。总的说来，得分越高，越多的表现出精神病性症状和行为。得分越低，就越少表现出这些症状和行为</p>
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
              <el-table :data="userscl90history" max-height="300" border width="100%" v-loading="listLoading"
                        :row-class-name="tableRowName">
                <el-table-column prop="id" label="序号" width="80" sortable></el-table-column>
                <el-table-column prop="time" label="测试时间" :formatter="dateformatter" sortable></el-table-column>
                <el-table-column prop="sumscore" label="总评分" sortable></el-table-column>
                <el-table-column prop="posSymptomCount" label="阳性回答数" sortable></el-table-column>
                <el-table-column prop="posSymptomAvgscore" label="阳性回答均分" sortable></el-table-column>
                <el-table-column prop="somatization" label="躯体化F1" sortable></el-table-column>
                <el-table-column prop="obsessive" label="强迫症状F2" sortable></el-table-column>
                <el-table-column prop="interpersonal" label="人际关系敏感F3" sortable></el-table-column>
                <el-table-column prop="depression" label="抑郁F4" sortable></el-table-column>
                <el-table-column prop="anxiety" label="焦虑F5" sortable></el-table-column>
                <el-table-column prop="hostility" label="敌对F6" sortable></el-table-column>
                <el-table-column prop="phobic" label="恐怖F7" sortable></el-table-column>
                <el-table-column prop="paranoid" label="偏执F8" sortable></el-table-column>
                <el-table-column prop="psychoticism" label="精神病性F9" sortable></el-table-column>

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
            <span>您的九项指标变化情况(已转为单项平均值)</span>
          </el-card>
        </el-col>
        <el-col :span="11">
          <el-card class="graph">
            <ve-radar :data="radarchartData" :extend="radarChartExtend" :settings="radarChartSettings"></ve-radar>
            <span>您的九项指标与正常值关系(已转为单项平均值)</span>
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
  import {getUserScl90history} from "../../api/api";
  import {dateFormatterUtil} from "../../common/js/formatUtils";

  export default {
    name: "personalscl90history",
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
          'somatization': '躯体化',
          'obsessive': '强迫症状',
          'interpersonal': '人际关系敏感',
          'depression': '抑郁',
          'anxiety': '焦虑',
          'hostility': '敌对',
          'phobic': '恐怖',
          'paranoid': '偏执',
          'psychoticism': '精神病性',
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
          'F1': '躯体化',
          'F2': '强迫症状',
          'F3': '人际关系敏感',
          'F4': '抑郁',
          'F5': '焦虑',
          'F6': '敌对',
          'F7': '恐怖',
          'F8': '偏执',
          'F9': '精神病性',
        }
      };
      return {
        // solgan
        username: '',
        // table
        userscl90history: [],
        listLoading: false,
        // graph
        isShowGraph: true,
        lineChartData: {
          columns: ['date', 'somatization', 'obsessive', 'interpersonal', 'depression', 'anxiety', 'hostility', 'phobic', 'paranoid', 'psychoticism'],
          rows: [
            // {'date': '4-3', 'depression': 12, 'anxiety': 34, 'stress': 11},
          ]
        },
        radarchartData: {
          columns: ['类别', 'F1', 'F2', 'F3', 'F4', 'F5', 'F6', 'F7', 'F8', 'F9'],
          rows: [
            {
              '类别': '常模',
              'F1': 1.37,
              'F2': 1.62,
              'F3': 1.65,
              'F4': 1.50,
              'F5': 1.39,
              'F6': 1.48,
              'F7': 1.23,
              'F8': 1.43,
              'F9': 1.29
            },
            {
              '类别': '正常值',
              'F1': 2.54,
              'F2': 1.53,
              'F3': 4.37,
              'F4': 3.98,
              'F5': 4.99,
              'F6': 2.49,
              'F7': 3.71,
              'F8': 3.45,
              'F9': 1.79,
            }
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
          let tabledata = getUserScl90history(arguData).then((res) => {
            return res.data
          });
          resolve(tabledata); // 异步改为同步，此时数据获取完毕。

        }).then(res => {
          if (res.length > 0) {
            // 表格数据
            this.userscl90history = res;
            // 图表数据
            for (let data of res) {
              let datatime = data.time.toString().toString().substr(5, 5) + " " + data.time.toString().substr(11, 8);
              let obj = {
                'date': datatime,
                'somatization': (parseInt(data.somatization) / 10).toFixed(2),
                'obsessive': (parseInt(data.obsessive) / 10).toFixed(2),
                'interpersonal': (parseInt(data.interpersonal) / 9).toFixed(2),
                'depression': (parseInt(data.depression) / 13).toFixed(2),
                'anxiety': (parseInt(data.anxiety) / 10).toFixed(2),
                'hostility': (parseInt(data.hostility) / 6).toFixed(2),
                'phobic': (parseInt(data.phobic) / 7).toFixed(2),
                'paranoid': (parseInt(data.paranoid) / 6).toFixed(2),
                'psychoticism': (parseInt(data.psychoticism) / 10).toFixed(2),
              };
              this.lineChartData.rows.push(obj);
            }
            let lastdata = res[res.length - 1];
            let lastobj = {
              '类别': '您的最近一次测试值',
              'F1': (parseInt(lastdata.somatization) / 10).toFixed(2),
              'F2': (parseInt(lastdata.obsessive) / 10).toFixed(2),
              'F3': (parseInt(lastdata.interpersonal) / 9).toFixed(2),
              'F4': (parseInt(lastdata.depression) / 13).toFixed(2),
              'F5': (parseInt(lastdata.anxiety) / 10).toFixed(2),
              'F6': (parseInt(lastdata.hostility) / 6).toFixed(2),
              'F7': (parseInt(lastdata.phobic) / 7).toFixed(2),
              'F8': (parseInt(lastdata.paranoid) / 6).toFixed(2),
              'F9': (parseInt(lastdata.psychoticism) / 10).toFixed(2),
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
      },

    },
    mounted() {
      this.getData();
    },
  }
</script>

<style scoped>
  section {
    margin-bottom: 20px;
  }
</style>
<style>
  .personalscl90history .el-table .warning-sum-row td:nth-child(3),
  .personalscl90history .el-table .warning-somatization-row td:nth-child(6),
  .personalscl90history .el-table .warning-obsessive-row td:nth-child(7),
  .personalscl90history .el-table .warning-interpersonal-row td:nth-child(8),
  .personalscl90history .el-table .warning-depression-row td:nth-child(9),
  .personalscl90history .el-table .warning-anxiety-row td:nth-child(10),
  .personalscl90history .el-table .warning-hostility-row td:nth-child(11),
  .personalscl90history .el-table .warning-phobic-row td:nth-child(12),
  .personalscl90history .el-table .warning-paranoid-row td:nth-child(13),
  .personalscl90history .el-table .warning-psychoticism-row td:nth-child(14) {
    color: #e64242;
  }
</style>
