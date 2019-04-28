<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-edit-outline"></i> 心理测试问卷</el-breadcrumb-item>
        <el-breadcrumb-item>诺瓦克愤怒量表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="introduction">
      <h3 class="paper-title">诺瓦克愤怒量表</h3>
      <p>阅读下面所列出的25种可能的让你生气的情景。</p>
      <p>指导语：设想下你遇见如下每一题中的情况，选择一个通常情况下这种情形惹恼或激怒你的程度。</p>
    </div>

    <hr>

    <div class="form-box">
      <el-form ref="novackpaper" :rules="rules" label-position="top" :model="novackpaper">

        <el-form-item label='1.	你打开了你刚买的一件设备，插上电，却发现它根本就不工作。' prop="answer1">
          <el-radio-group v-model="novackpaper.answer1">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='2.	你被一名修理人员敲诈，他要挟你。' prop="answer2">
          <el-radio-group v-model="novackpaper.answer2">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='3.	你被单挑出来改正错误，而其他人的行为没有被察觉。' prop="answer3">
          <el-radio-group v-model="novackpaper.answer3">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='4.	你的车陷进了泥浆里或雪窝里。' prop="answer4">
          <el-radio-group v-model="novackpaper.answer4">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='5.	你正在和某人说话，而他却不回答你。' prop="answer5">
          <el-radio-group v-model="novackpaper.answer5">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='6.	有人谎称他们有某种东西，而事实上他们却没有。' prop="answer6">
          <el-radio-group v-model="novackpaper.answer6">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='7.	在咖啡店，你正费力的把四杯咖啡往自己的桌子前端时，有人撞到了你，咖啡溅了出来。' prop="answer7">
          <el-radio-group v-model="novackpaper.answer7">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='8.	你已经把衣服挂好了，但是却有人把它们碰到了地上，而且没有把它们捡起来。' prop="answer8">
          <el-radio-group v-model="novackpaper.answer8">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='9.	从你进店的那一刻起，售货员就一直在跟着你。' prop="answer9">
          <el-radio-group v-model="novackpaper.answer9">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='10.	你已经安排好和某人一起出去，但是这人却在最后一刻爽约了，把你一个人晾在那里。' prop="answer10">
          <el-radio-group v-model="novackpaper.answer10">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='11.	被人开玩笑或被人奚落。' prop="answer11">
          <el-radio-group v-model="novackpaper.answer11">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='12.	红灯了，你的车停下来，而后面的家伙却不停的冲你按喇叭。' prop="answer12">
          <el-radio-group v-model="novackpaper.answer12">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='13.	你在停车场偶然转错了弯儿，你刚钻出汽车，就有人冲你叫道：“是在哪儿学的车？”' prop="answer13">
          <el-radio-group v-model="novackpaper.answer13">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='14.	有人犯了错，却拿这件错事责备你。' prop="answer14">
          <el-radio-group v-model="novackpaper.answer14">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='15.	你正想集中精力，但是你周围的人却在用脚打拍子。' prop="answer15">
          <el-radio-group v-model="novackpaper.answer15">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='16.	你把某本重要的书或某个重要的工具借给某人，他们却不还给你。' prop="answer16">
          <el-radio-group v-model="novackpaper.answer16">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='17.	你这一天很忙，但是和你在一起住的人却抱怨说，你本来答应做某件事情，可是你却忘记做了。' prop="answer17">
          <el-radio-group v-model="novackpaper.answer17">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='18.	你想和你的同伴或同事讨论某个重要的事情，但是他却不给你机会表达你的感受。' prop="answer18">
          <el-radio-group v-model="novackpaper.answer18">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='19.	你和某人在讨论，这人坚持要讨论他们所知甚少的话题。' prop="answer19">
          <el-radio-group v-model="novackpaper.answer19">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='20.	当你和某个人进行讨论时，另外一个人却坚持要进来插话。' prop="answer20">
          <el-radio-group v-model="novackpaper.answer20">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='21.	你需要赶快到某个地方去，但是你面前的汽车却在40公里∕小时的区域里以25公里∕小时的速度往前开，你没法开车。' prop="answer21">
          <el-radio-group v-model="novackpaper.answer21">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='22.	踩在一块嚼过的口香糖上。' prop="answer22">
          <el-radio-group v-model="novackpaper.answer22">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='23.	当你路过时，受到了一小群人的嘲笑。' prop="answer23">
          <el-radio-group v-model="novackpaper.answer23">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='24.	匆匆忙忙要去某个地方，结果你的一条很好的休闲裤子被一个锋利的东西剐破了。' prop="answer24">
          <el-radio-group v-model="novackpaper.answer24">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='25.	你用最后一枚硬币打电话，但是在你拨完之后却掉了线，而硬币也没有了。' prop="answer25">
          <el-radio-group v-model="novackpaper.answer25">
            <el-radio :label="0">你几乎不生气</el-radio>
            <el-radio :label="1">你有点恼火</el-radio>
            <el-radio :label="2">你有些愤怒</el-radio>
            <el-radio :label="3">你相当愤怒</el-radio>
            <el-radio :label="4">你非常愤怒</el-radio>
          </el-radio-group>
        </el-form-item>

        <el-form-item>
          <el-col :span="12">
            <el-button type="primary" @click="onSubmit('novackpaper')" style="width: 40%" :disabled="isAbledtoCommit">
              提交
            </el-button>
            <el-button type="primary" @click="dialogVisible = true,changeData" :disabled="isAbledtoShowResult">查看测评结果
            </el-button>
          </el-col>
        </el-form-item>


      </el-form>
    </div>


    <el-dialog title="诺瓦克心理测评结果" :visible.sync="dialogVisible" width="30%">
      <p class="resultMessage">您的评分如下：</p>
      <span :style="{'color':changeLevel}">总分: {{total}} </span>

      <p>评价:{{ragelevel()}}</p>
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>


  </section>
</template>

<script>
  import {commitNovackPaper} from '../../api/api'

  export default {
    name: "novackpaper",
    data() {
      return {
        novackpaper: {
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
          answer22: '',
          answer23: '',
          answer24: '',
          answer25: '',
          // answer1: 3,
          // answer2: 3,
          // answer3: 4,
          // answer4: 3,
          // answer5: 4,
          // answer6: 4,
          // answer7: 4,
          // answer8: 4,
          // answer9: 4,
          // answer10: 4,
          // answer11: 4,
          // answer12: 3,
          // answer13: 4,
          // answer14: 4,
          // answer15: 3,
          // answer16: 4,
          // answer17: 2,
          // answer18: 3,
          // answer19: 1,
          // answer20: 1,
          // answer21: 4,
          // answer22: 4,
          // answer23: 4,
          // answer24: 4,
          // answer25: 4,
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
          answer22: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer23: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer24: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer25: [{required: true, message: '请选择其中一个', trigger: 'change'}],
        },
        total: 0,


        dialogVisible: false,
        isAbledtoShowResult: true,
        // isAbledtoShowResult: false,
        isAbledtoCommit: false,

      }
    },
    computed: {
      // 点击按钮触发
      changeData: function () {
        let rage = parseInt(this.novackpaper.answer1) +parseInt(this.novackpaper.answer2) +parseInt(this.novackpaper.answer3) +parseInt(this.novackpaper.answer4) +parseInt(this.novackpaper.answer5) + parseInt(this.novackpaper.answer6) + parseInt(this.novackpaper.answer7) +parseInt(this.novackpaper.answer8) +parseInt(this.novackpaper.answer9) +parseInt(this.novackpaper.answer10) + parseInt(this.novackpaper.answer11) + parseInt(this.novackpaper.answer12) +parseInt(this.novackpaper.answer13) + parseInt(this.novackpaper.answer14) + parseInt(this.novackpaper.answer15) + parseInt(this.novackpaper.answer16) + parseInt(this.novackpaper.answer17) + parseInt(this.novackpaper.answer18) + parseInt(this.novackpaper.answer19) + parseInt(this.novackpaper.answer20) + parseInt(this.novackpaper.answer21) + parseInt(this.novackpaper.answer22) + parseInt(this.novackpaper.answer23) + parseInt(this.novackpaper.answer24) + parseInt(this.novackpaper.answer25);
        this.total = isNaN(rage) ? 0 : rage;
      },

      changeLevel: function () {
        if (this.total <= 55 && this.total >= 0) {
          return "green";
        } else if (this.total >= 56 && this.total <= 75) {
          return "#CCCC00";
        } else if (this.total >= 76 && this.total <= 85) {
          return "#FF88A0";
        } else if (this.total > 85) {
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
          answer1: this.novackpaper.answer1,
          answer2: this.novackpaper.answer2,
          answer3: this.novackpaper.answer3,
          answer4: this.novackpaper.answer4,
          answer5: this.novackpaper.answer5,
          answer6: this.novackpaper.answer6,
          answer7: this.novackpaper.answer7,
          answer8: this.novackpaper.answer8,
          answer9: this.novackpaper.answer9,
          answer10: this.novackpaper.answer10,
          answer11: this.novackpaper.answer11,
          answer12: this.novackpaper.answer12,
          answer13: this.novackpaper.answer13,
          answer14: this.novackpaper.answer14,
          answer15: this.novackpaper.answer15,
          answer16: this.novackpaper.answer16,
          answer17: this.novackpaper.answer17,
          answer18: this.novackpaper.answer18,
          answer19: this.novackpaper.answer19,
          answer20: this.novackpaper.answer20,
          answer21: this.novackpaper.answer21,
          answer22: this.novackpaper.answer22,
          answer23: this.novackpaper.answer23,
          answer24: this.novackpaper.answer24,
          answer25: this.novackpaper.answer25,
        };


        // 表单验证
        this.$refs[formName].validate((valid) => {
          if (valid) {

            // 校验成功之后可以查看结果,且不可重复提交
            this.isAbledtoShowResult = false;
            this.isAbledtoCommit = true;
            // 发送数据
            commitNovackPaper(data).then((res) => {
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
      ragelevel: function () {
        if (this.total <= 45 && this.total >= 0) {
          return "你所体验到的愤怒与烦恼的数量相当低。只有很少一部分人在测试中能得这么低的分数。你就属于这一少部分人！";
        } else if (this.total >= 46 && this.total <= 55) {
          return "你事实上要比一般人更平静。";
        } else if (this.total >= 56 && this.total <= 75) {
          return "你对生活的烦恼报以同等数量的愤怒。";
        } else if (this.total >= 76 && this.total <= 85) {
          return "你经常用一种愤怒的方式来对待生活中所遇到的烦恼。你事实上比一般人更易激怒。";
        } else if (this.total > 85) {
          return "你真的是愤怒冠军，你被经常出现的狂怒反应所折磨，这种反应不能很快消失。在最初的羞辱过去很久之后，你或许还一直有一种消极情感。你或许在你所知道的人当中有鞭炮或莽夫之名。你可能经常会感到紧张头痛，血压也会经常升高。你的愤怒经常失去控制，非常冲动的爆发出敌意来，这种冲动有时会让你陷入麻烦。成人中只有很少一部分人像你这样做出激烈的反应。";
        }
      },

    },
  }
</script>

<style scoped>
  .introduction,
  .form-box {
    width: 80%;
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
