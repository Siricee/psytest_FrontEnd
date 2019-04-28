<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-edit-outline"></i> 心理测试问卷</el-breadcrumb-item>
        <el-breadcrumb-item>DASS21抑郁-焦虑-压力量表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="introduction">
      <h3 class="paper-title">DASS21抑郁-焦虑-压力量表</h3>
      <p>它将帮助你深度了解自己最近的情绪状态，辅助你判别自己是否正处于需要接受帮助的情绪困扰中，我们还将根据你的情况为你提供建议，帮助你认识并了解自己的情绪和感受。</p>
      <p>指导语：请仔细阅读下面每一个句子，表示在过去的1个星期中，每个描述符合你实际情况的程度。答案没有对错之分，请不要花太多时间思考句子。点击适当的选项。</p>
    </div>

    <hr>

    <div class="form-box">
      <el-form ref="dass21paper" :rules="rules" label-position="top" :model="dass21paper">

        <el-form-item label='1. 我觉得很难让自己安静下来。' prop="answer1">
          <el-radio-group v-model="dass21paper.answer1">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label='2. 我感到口干舌燥。' prop="answer2">
          <el-radio-group v-model="dass21paper.answer2">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label='3. 我好像一点都没有感觉到任何愉快、舒畅。' prop="answer3">
          <el-radio-group v-model="dass21paper.answer3">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='4. 我感到呼吸困难（例如：气喘或透不过气来）。' prop="answer4">
          <el-radio-group v-model="dass21paper.answer4">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='5. 我感到很难主动去开始工作。' prop="answer5">
          <el-radio-group v-model="dass21paper.answer5">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='6. 我对事情往往做出过敏反应。' prop="answer6">
          <el-radio-group v-model="dass21paper.answer6">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='7. 我感到颤抖（例如，手抖）。' prop="answer7">
          <el-radio-group v-model="dass21paper.answer7">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='8. 我觉得自己消耗了很多精力。' prop="answer8">
          <el-radio-group v-model="dass21paper.answer8">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='9. 我担心一些可能让自己恐慌或出丑的场合。' prop="answer9">
          <el-radio-group v-model="dass21paper.answer9">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item label='10. 我觉得自己对不久的将来没有什么可期盼的。' prop="answer10">
          <el-radio-group v-model="dass21paper.answer10">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='11. 我感到忐忑不安。' prop="answer11">
          <el-radio-group v-model="dass21paper.answer11">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='12. 我感到很难放松自己。' prop="answer12">
          <el-radio-group v-model="dass21paper.answer12">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='13. 我感到忧郁沮丧。' prop="answer13">
          <el-radio-group v-model="dass21paper.answer13">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='14. 我无法容忍任何阻碍我继续工作的事情。' prop="answer14">
          <el-radio-group v-model="dass21paper.answer14">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='15. 我感到快要崩溃了。' prop="answer15">
          <el-radio-group v-model="dass21paper.answer15">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='16. 我对任何事情都不能产生热情。' prop="answer16">
          <el-radio-group v-model="dass21paper.answer16">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='17. 我觉得自己不怎么配做人。' prop="answer17">
          <el-radio-group v-model="dass21paper.answer17">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='18. 我发觉自己很容易被触怒。' prop="answer18">
          <el-radio-group v-model="dass21paper.answer18">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='19. 即使在没有明显的体力活动时，我也感到心律不正常。' prop="answer19">
          <el-radio-group v-model="dass21paper.answer19">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='20. 我无缘无故地感到害怕。' prop="answer20">
          <el-radio-group v-model="dass21paper.answer20">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='21. 我感到生命毫无意义。' prop="answer21">
          <el-radio-group v-model="dass21paper.answer21">
            <el-radio :label="0">不符合</el-radio>
            <el-radio :label="1">有时符合</el-radio>
            <el-radio :label="2">常常符合</el-radio>
            <el-radio :label="3">总是符合</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-col :span="12">
            <el-button type="primary" @click="onSubmit('dass21paper')" style="width: 40%" :disabled="isAbledtoCommit">提交</el-button>
            <el-button type="primary" @click="dialogVisible = true,changeData" :disabled="isAbledtoShowResult">查看测评结果
            </el-button>
          </el-col>
        </el-form-item>


      </el-form>
    </div>


    <el-dialog title="DASS21心理测评结果" :visible.sync="dialogVisible" width="30%" >
      <p class="resultMessage">您的三项评分如下：</p>
      <span :style="{'color':changeStressLevel}">压力: {{stress}} ({{stresslevel}})</span>
      <span :style="{'color':changeDepressionLevel}">抑郁: {{depression}} ({{depressionlevel}})</span>
      <span :style="{'color':changeAnxietyLevel}">焦虑: {{anxiety}} ({{anxietylevel}})</span>
      <p>评价:{{commentMessage()}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>


  </section>
</template>

<script>
  import {commitDass21Paper} from '../../api/api'

  export default {
    name: "dass21paper",
    data() {
      return {
        dass21paper: {
          answer1: '',
          answer2: '',
          answer3: '',
          answer4: '',
          answer5: '',
          answer6: '',
          answer7: '',
          answer8: '',
          answer9: '',
          answer10: '',
          answer11: '',
          answer12: '',
          answer13: '',
          answer14: '',
          answer15: '',
          answer16: '',
          answer17: '',
          answer18: '',
          answer19: '',
          answer20: '',
          answer21: '',
          // answer1: 1,
          // answer2: 1,
          // answer3: 0,
          // answer4: 0,
          // answer5: 1,
          // answer6: 2,
          // answer7: 3,
          // answer8: 1,
          // answer9: 2,
          // answer10: 1,
          // answer11: 0,
          // answer12: 0,
          // answer13: 0,
          // answer14: 1,
          // answer15: 2,
          // answer16: 1,
          // answer17: 0,
          // answer18: 0,
          // answer19: 1,
          // answer20: 1,
          // answer21: 0,
        },
        rules: {
          answer1: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer2: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer3: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer4: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer5: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer6: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer7: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer8: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer9: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer10: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer11: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer12: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer13: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer14: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer15: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer16: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer17: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer18: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer19: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer20: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer21: [{required: true, message: '请选择其中一个', trigger: 'change'}],
        },
        stress: 0,
        depression: 0,
        anxiety: 0,

        dialogVisible: false,
        isAbledtoShowResult: true,
        // isAbledtoShowResult: false,
        isAbledtoCommit: false,

      }
    },
    computed: {
      // 点击按钮触发
      changeData: function () {
        let stressValue = (parseInt(this.dass21paper.answer1) + parseInt(this.dass21paper.answer6) + parseInt(this.dass21paper.answer8) + parseInt(this.dass21paper.answer11) + parseInt(this.dass21paper.answer12) + parseInt(this.dass21paper.answer14) + parseInt(this.dass21paper.answer18)) * 2;
        let depressionValue = (parseInt(this.dass21paper.answer3) + parseInt(this.dass21paper.answer5) + parseInt(this.dass21paper.answer10) + parseInt(this.dass21paper.answer13) + parseInt(this.dass21paper.answer16) + parseInt(this.dass21paper.answer17) + parseInt(this.dass21paper.answer21)) * 2;
        let anxietyValue = (parseInt(this.dass21paper.answer2) + parseInt(this.dass21paper.answer4) + parseInt(this.dass21paper.answer7) + parseInt(this.dass21paper.answer9) + parseInt(this.dass21paper.answer15) + parseInt(this.dass21paper.answer19) + parseInt(this.dass21paper.answer20)) * 2;
        this.stress = isNaN(stressValue) ? 0 : stressValue;
        this.depression = isNaN(depressionValue) ? 0 : depressionValue;
        this.anxiety = isNaN(anxietyValue) ? 0 : anxietyValue;
      },
      stresslevel: function () {
        if (this.stress <= 14 && this.stress >= 0) {
          return "正常";
        } else if (this.stress >= 15 && this.stress <= 18) {
          return "轻微";
        } else if (this.stress >= 19 && this.stress <= 25) {
          return "中度";
        } else if (this.stress >= 26 && this.stress <= 33) {
          return "重度";
        } else if (this.stress > 33) {
          return "极端";
        }
      },
      depressionlevel: function () {
        if (this.depression <= 9 && this.depression >= 0) {
          return "正常";
        } else if (this.depression >= 10 && this.depression <= 13) {
          return "轻微";
        } else if (this.depression >= 14 && this.depression <= 20) {
          return "中度";
        } else if (this.depression >= 21 && this.depression <= 27) {
          return "重度";
        } else if (this.depression > 27) {
          return "极端";
        }
      },
      anxietylevel: function () {
        if (this.anxiety <= 7 && this.anxiety >= 0) {
          return "正常";
        } else if (this.anxiety >= 8 && this.anxiety <= 9) {
          return "轻微";
        } else if (this.anxiety >= 10 && this.anxiety <= 14) {
          return "中度";
        } else if (this.anxiety >= 15 && this.anxiety <= 19) {
          return "重度";
        } else if (this.anxiety > 19) {
          return "极端";
        }
      },
      changeStressLevel:function () {
        if (this.stress <= 18 && this.stress >= 0) {
          return "green";
        } else if (this.stress >= 19 && this.stress <= 25) {
          return "#CCCC00";
        } else if (this.stress >= 26 && this.stress <= 33) {
          return "#FF88A0";
        } else if (this.stress > 33) {
          return "red";
        }
      },
      changeDepressionLevel:function () {
        if (this.depression <= 13 && this.depression >= 0) {
          return "green";
        } else if (this.depression >= 14 && this.depression <= 20) {
          return "#CCCC00";
        } else if (this.depression >= 21 && this.depression <= 27) {
          return "#FF88A0";
        } else if (this.depression > 27) {
          return "red";
        }
      },
      changeAnxietyLevel:function () {
        if (this.anxiety <= 9 && this.anxiety >= 0) {
          return "green";
        } else if (this.anxiety >= 10 && this.anxiety <= 14) {
          return "#CCCC00";
        } else if (this.anxiety >= 15 && this.anxiety <= 19) {
          return "#FF88A0";
        } else if (this.anxiety > 19) {
          return "red";
        }
      }

    },
    methods: {
      onSubmit(formName) {

        // 登录信息验证
        let login_user = JSON.parse(localStorage.getItem('user'));
        if (login_user) {
          // console.log(login_user.userid + login_user.username);
        } else {
          this.$message.error("请先登录");
          return false;
        }

        let data = {
          userid: login_user.userid,
          answer1: this.dass21paper.answer1,
          answer2: this.dass21paper.answer2,
          answer3: this.dass21paper.answer3,
          answer4: this.dass21paper.answer4,
          answer5: this.dass21paper.answer5,
          answer6: this.dass21paper.answer6,
          answer7: this.dass21paper.answer7,
          answer8: this.dass21paper.answer8,
          answer9: this.dass21paper.answer9,
          answer10: this.dass21paper.answer10,
          answer11: this.dass21paper.answer11,
          answer12: this.dass21paper.answer12,
          answer13: this.dass21paper.answer13,
          answer14: this.dass21paper.answer14,
          answer15: this.dass21paper.answer15,
          answer16: this.dass21paper.answer16,
          answer17: this.dass21paper.answer17,
          answer18: this.dass21paper.answer18,
          answer19: this.dass21paper.answer19,
          answer20: this.dass21paper.answer20,
          answer21: this.dass21paper.answer21,
        };


        // 表单验证
        this.$refs[formName].validate((valid) => {
          if (valid) {

            // 校验成功之后可以查看结果,且不可重复提交
            this.isAbledtoShowResult = false;
            this.isAbledtoCommit = true;
              // 发送数据
            commitDass21Paper(data).then((res) => {

              if (res.data == 1) {
                this.$message({
                  message: '问卷提交成功',
                  type: 'success'
                });
                // 显示结果
              } else {
                this.$message.error('提交失败');
              }
            });

          } else {
            this.$message.error("请完成问卷全部问题")
          }
        });
      },
      commentMessage() {
        let str = '您最近';
        if (this.stress > 19) {
          str += '压力有点大哦，'
        }
        if (this.depression >= 14) {
          str += '抑郁水平有点高，'
        }
        if (this.anxiety >= 15) {
          str += '焦虑情况比较严重。'
        }
        if (this.stress > 19 && this.depression >= 14 && this.anxiety >= 15) {
          str += '建议调整心态或咨询心理医生。'
        }
        return str;
      },

    },
  }
</script>

<style scoped>
  .introduction,
  .form-box {
    text-align: left;
  }

  .paper-title,
  .introduction p {
    margin: 20px 0;
  }
  .extreme{
    color: red;
  }

</style>
<style>
  .el-dialog span,p{
    font-size: 16px;
    margin: 10px 0px;
  }
</style>
