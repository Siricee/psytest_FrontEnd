<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-edit-outline"></i> 心理测试问卷</el-breadcrumb-item>
        <el-breadcrumb-item>SAS焦虑自评量表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="introduction">
      <h3 class="paper-title">SAS焦虑自评量表</h3>
      <p>SAS被称为焦虑自评量表，是心理学的专业问卷，是一种焦虑评定的标准，用于测量焦虑状态轻重程度及其在治疗过程中变化情况的心理量表。<br>下面有二十条文字（括号中为症状名称），请仔细阅读每一条。</p>
      <p>指导语：每一条文字后有四级评分,表示: 没有或偶尔；有时；经常；总是如此。然后根据您最近一星期的实际情况，选择最接近你的一项。
      </p>
    </div>

    <hr>

    <div class="form-box">
      <el-form ref="saspaper" :rules="rules" label-position="top" :model="saspaper">

        <el-form-item label='1．我觉得比平时容易紧张和着急（焦虑）' prop="answer1">
          <el-radio-group v-model="saspaper.answer1">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='2. 我无缘无故地感到害怕（害怕）' prop="answer2">
          <el-radio-group v-model="saspaper.answer2">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='3．我容易心里烦乱或觉得惊恐（惊恐）' prop="answer3">
          <el-radio-group v-model="saspaper.answer3">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='4．我觉得我可能将要发疯 （发疯感）' prop="answer4">
          <el-radio-group v-model="saspaper.answer4">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='5．我觉得一切都很好，也不会发生什么不幸（不幸预感）' prop="answer5">
          <el-radio-group v-model="saspaper.answer5">
            <el-radio :label="4">没有或偶尔</el-radio>
            <el-radio :label="3">有时</el-radio>
            <el-radio :label="2">经常</el-radio>
            <el-radio :label="1">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='6．我手脚发抖打颤（手足颤抖）' prop="answer6">
          <el-radio-group v-model="saspaper.answer6">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='7．我因为头痛、颈痛和背痛而苦恼（躯体疼痛）' prop="answer7">
          <el-radio-group v-model="saspaper.answer7">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='8．我感觉容易衰弱和疲乏 （乏力）' prop="answer8">
          <el-radio-group v-model="saspaper.answer8">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='9．我觉得心平气和，并且容易安静坐着 （静坐不能）' prop="answer9">
          <el-radio-group v-model="saspaper.answer9">
            <el-radio :label="4">没有或偶尔</el-radio>
            <el-radio :label="3">有时</el-radio>
            <el-radio :label="2">经常</el-radio>
            <el-radio :label="1">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='10．我觉得心跳得快（心悸）' prop="answer10">
          <el-radio-group v-model="saspaper.answer10">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='11．我因为一阵阵头晕而苦恼（头昏）' prop="answer11">
          <el-radio-group v-model="saspaper.answer11">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='12．我有过晕倒发作，或觉得要晕倒似的（晕厥感）' prop="answer12">
          <el-radio-group v-model="saspaper.answer12">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='13．我呼气吸气都感到很容易（呼吸困难）' prop="answer13">
          <el-radio-group v-model="saspaper.answer13">
            <el-radio :label="4">没有或偶尔</el-radio>
            <el-radio :label="3">有时</el-radio>
            <el-radio :label="2">经常</el-radio>
            <el-radio :label="1">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='14．我手脚麻木和刺痛（手足刺痛）' prop="answer14">
          <el-radio-group v-model="saspaper.answer14">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='15．我因胃痛和消化不良而苦恼（胃痛或消化不良）' prop="answer15">
          <el-radio-group v-model="saspaper.answer15">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='16．我常常要小便（尿意频数）' prop="answer16">
          <el-radio-group v-model="saspaper.answer16">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='17．我的手常常是干燥温暖的（多汗）' prop="answer17">
          <el-radio-group v-model="saspaper.answer17">
            <el-radio :label="4">没有或偶尔</el-radio>
            <el-radio :label="3">有时</el-radio>
            <el-radio :label="2">经常</el-radio>
            <el-radio :label="1">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='18．我脸红发热 （面部潮红）' prop="answer18">
          <el-radio-group v-model="saspaper.answer18">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='19．我容易入睡并且一夜睡得很好（睡眠障碍）' prop="answer19">
          <el-radio-group v-model="saspaper.answer19">
            <el-radio :label="4">没有或偶尔</el-radio>
            <el-radio :label="3">有时</el-radio>
            <el-radio :label="2">经常</el-radio>
            <el-radio :label="1">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='20．我做恶梦（恶梦）' prop="answer20">
          <el-radio-group v-model="saspaper.answer20">
            <el-radio :label="1">没有或偶尔</el-radio>
            <el-radio :label="2">有时</el-radio>
            <el-radio :label="3">经常</el-radio>
            <el-radio :label="4">总是如此</el-radio>
          </el-radio-group>
        </el-form-item>


        <el-form-item>
          <el-col :span="12">
            <el-button type="primary" @click="onSubmit('saspaper')" style="width: 40%" :disabled="isAbledtoCommit">
              提交
            </el-button>
            <el-button type="primary" @click="dialogVisible = true,changeData" :disabled="isAbledtoShowResult">查看测评结果
            </el-button>
          </el-col>
        </el-form-item>


      </el-form>
    </div>


    <el-dialog title="SAS焦虑测评结果" :visible.sync="dialogVisible" width="30%">
      <p class="resultMessage">您的评分如下：</p>
      <span >原始分: {{total}} </span>
      <span :style="{'color':changeLevel}">标准分: {{standard}} </span>
      <p>评价:{{anxietylevel()}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>


  </section>
</template>

<script>
  import {commitSasPaper} from '../../api/api'

  export default {
    name: "saspaper",
    data() {
      return {
        saspaper: {
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
        },
        total: 0,
        standard:0,

        dialogVisible: false,
        isAbledtoShowResult: true,
        // isAbledtoShowResult: false,
        isAbledtoCommit: false,

      }
    },
    computed: {
      // 点击按钮触发
      changeData: function () {
        let sum = parseInt(this.saspaper.answer1) +parseInt(this.saspaper.answer2) +parseInt(this.saspaper.answer3) +parseInt(this.saspaper.answer4) +parseInt(this.saspaper.answer5) + parseInt(this.saspaper.answer6) + parseInt(this.saspaper.answer7) +parseInt(this.saspaper.answer8) +parseInt(this.saspaper.answer9) +parseInt(this.saspaper.answer10) + parseInt(this.saspaper.answer11) + parseInt(this.saspaper.answer12) +parseInt(this.saspaper.answer13) + parseInt(this.saspaper.answer14) + parseInt(this.saspaper.answer15) + parseInt(this.saspaper.answer16) + parseInt(this.saspaper.answer17) + parseInt(this.saspaper.answer18) + parseInt(this.saspaper.answer19) + parseInt(this.saspaper.answer20);
        this.total = isNaN(sum) ? 0 : sum;
        this.standard = Math.round(sum*1.25);
      },

      changeLevel: function () {
        if (this.standard <= 49 && this.standard >= 0) {
          return "green";
        } else if (this.standard >= 50 && this.standard <= 59) {
          return "#CCCC00";
        } else if (this.standard >= 60 && this.standard <= 69) {
          return "#FF88A0";
        } else if (this.standard > 69) {
          return "red";
        }
      },


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
          answer1: this.saspaper.answer1,
          answer2: this.saspaper.answer2,
          answer3: this.saspaper.answer3,
          answer4: this.saspaper.answer4,
          answer5: this.saspaper.answer5,
          answer6: this.saspaper.answer6,
          answer7: this.saspaper.answer7,
          answer8: this.saspaper.answer8,
          answer9: this.saspaper.answer9,
          answer10: this.saspaper.answer10,
          answer11: this.saspaper.answer11,
          answer12: this.saspaper.answer12,
          answer13: this.saspaper.answer13,
          answer14: this.saspaper.answer14,
          answer15: this.saspaper.answer15,
          answer16: this.saspaper.answer16,
          answer17: this.saspaper.answer17,
          answer18: this.saspaper.answer18,
          answer19: this.saspaper.answer19,
          answer20: this.saspaper.answer20,
        };


        // 表单验证
        this.$refs[formName].validate((valid) => {
          if (valid) {

            // 校验成功之后可以查看结果,且不可重复提交
            this.isAbledtoShowResult = false;
            this.isAbledtoCommit = true;
            // 发送数据
            commitSasPaper(data).then((res) => {
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
            this.$message.error("请完成问卷全部问题");
          }
        });
      },
      anxietylevel: function () {
        if (this.standard <= 49 && this.standard >= 0) {
          return "您的焦虑评分在正常范围内。";
        } else if (this.standard >= 50 && this.standard <= 59) {
          return "您具有轻度焦虑";
        } else if (this.standard >= 60 && this.standard <= 69) {
          return "您具有中度焦虑";
        } else if (this.standard > 69) {
          return "您具有重度焦虑";
        }
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


</style>
<style>
  .el-dialog span, p {
    font-size: 16px;
    margin: 10px 0px;
  }

</style>
