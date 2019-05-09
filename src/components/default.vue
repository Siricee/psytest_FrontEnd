<template>
  <section>
    <div class="solgan-text"><h1>欢迎使用心理测试数据分析平台</h1></div>

    <div class="introduction">
      <el-row>
        <p class="sub-title"><i class="el-icon-info"></i>系统简介</p>
        <p>本平台集成即时查看结果的在线心理测试和群体数据分析，测试用户可以根据以下指导使用本系统进行心里症状自评并查看结果。数据分析人员可以在本系统中查阅群体心理症状信息的人群分布和变化趋势。</p>
      </el-row>
    </div>

    <div class="user-intro">
      <div class="sub-title">
        <i class="el-icon-edit"></i>测试流程：
      </div>
      <el-row>
        <el-col :span="20" :offset="2">
          <el-steps active="4" align-center>
            <el-step title="步骤1" description="注册账户并填写信息"></el-step>
            <el-step title="步骤2" description="登录系统"></el-step>
            <el-step title="步骤3" description="选择问卷进行填写并提交"></el-step>
            <el-step title="步骤4" description="查看历史提交记录，掌握个人情绪变化"></el-step>
          </el-steps>
        </el-col>
      </el-row>
    </div>

    <div class="paper-intro">
      <div class="sub-title"><i class="el-icon-tickets"></i>问卷简介</div>
      <el-col :span="20" :offset="2">
      <el-row :gutter="10" style="margin-bottom: 10px">
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>DASS21问卷</span>
            </div>
            <div>
              <p>DASS21是抑郁-焦虑-压力量表，它将帮助你深度了解自己最近的情绪状态，辅助你判别自己是否正处于需要接受帮助的情绪困扰中，帮助你认识并了解自己的情绪和感受。</p>
            </div>
          </el-card>
        </el-col>

        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>SAS问卷</span>
            </div>
            <div>
              <p>SAS被称为焦虑自评量表，是心理学的专业问卷，是一种焦虑评定的标准，用于测量焦虑状态轻重程度及其在治疗过程中变化情况的心理量表。</p>
            </div>
          </el-card>
        </el-col>
      </el-row>

      <el-row :gutter="10">
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>Novack问卷</span>
            </div>
            <div>
              <p>日常生活中你能承受多少的愤怒情绪呢?诺瓦克愤怒程度自测量表可以帮您测试出您的易怒程度，希望管理好自己的脾气哦</p>
            </div>
          </el-card>
        </el-col>
        <el-col :span="12">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>SCL90问卷</span>
            </div>
            <div>
              <p>症状自评量表，又名90项症状清单（SCL-90）该量表共有90个项目，包含有较广泛的精神病症状学内容，从感觉、情感、思维、意识、行为直至生活习惯、人际关系、饮食睡眠等，均有涉及，并采用10个因子分别反映10个方面的心理症状情况。</p>
            </div>
          </el-card>
        </el-col>
      </el-row>
      </el-col>
    </div>
  </section>
</template>

<script>
  export default {
    name: "default"
  }
</script>

<style scoped>
  section{
    line-height: 200%;
  }
  .introduction {
    text-align: left;
  }

  .introduction p {
    margin: 10px 0;
  }

  .user-intro {
    text-align: left;
  }

  .sub-title{
    text-align: left;
    font-weight: bold;
    font-size: larger;
    margin: 20px 0;
  }
  .el-card{
    height: 220px;
    text-align: justify;
  }
  .el-card div span{
    font-weight: bold;
  }
  i {
    margin-right: 5px;
  }
</style>
