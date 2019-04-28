<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-edit-outline"></i> 心理测试问卷</el-breadcrumb-item>
        <el-breadcrumb-item>SCL90症状自评量表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="introduction">
      <h3 class="paper-title">SCL90症状自评量表</h3>
      <p>该量表共有90个项目，包含有较广泛的精神病症状学内容，从感觉、情感、思维、意识、行为直至生活习惯、人际关系、饮食睡眠等，均有涉及，并采用10个因子分别反映10个方面的心理症状情况。</p>
      <p>它的每一个项目均采取1～5级评分，具体说明如下：
        没有：自觉并无该项问题（症状）；
        很轻：自觉有该问题，但发生得并不频繁、严重；
        中等：自觉有该项症状，其严重程度为轻到中度；
        偏重：自觉常有该项症状，其程度为中到严重；
        严重：自觉该症状的频度和强度都十分严重。
        作为自评量表，这里的“轻、中、重”的具体涵义应该由自评者自己去体会，不必做硬性规定。
      </p>
    </div>

    <hr>

    <div class="form-box">
      <el-form ref="scl90paper" :rules="rules" label-position="top" :model="scl90paper">

        <el-form-item label='1. 头痛' prop="answer1">
          <el-radio-group v-model="scl90paper.answer1">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='2. 神经过敏，心中不踏实' prop="answer2">
          <el-radio-group v-model="scl90paper.answer2">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='3. 头脑中有不必要的想法或字句盘旋' prop="answer3">
          <el-radio-group v-model="scl90paper.answer3">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='4. 头晕或晕倒' prop="answer4">
          <el-radio-group v-model="scl90paper.answer4">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='5. 对异性的兴趣减退' prop="answer5">
          <el-radio-group v-model="scl90paper.answer5">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='6. 对旁人责备求全' prop="answer6">
          <el-radio-group v-model="scl90paper.answer6">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='7. 感到别人能控制您的思想' prop="answer7">
          <el-radio-group v-model="scl90paper.answer7">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='8. 责怪别人制造麻烦' prop="answer8">
          <el-radio-group v-model="scl90paper.answer8">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='9. 忘性大' prop="answer9">
          <el-radio-group v-model="scl90paper.answer9">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='10. 担心自己的衣饰整齐及仪态的端正' prop="answer10">
          <el-radio-group v-model="scl90paper.answer10">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='11. 容易烦恼和激动' prop="answer11">
          <el-radio-group v-model="scl90paper.answer11">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='12. 胸痛' prop="answer12">
          <el-radio-group v-model="scl90paper.answer12">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='13. 害怕空旷的场所或街道' prop="answer13">
          <el-radio-group v-model="scl90paper.answer13">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='14. 感到自己的精力下降，活动减慢' prop="answer14">
          <el-radio-group v-model="scl90paper.answer14">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='15. 想结束自己的生命' prop="answer15">
          <el-radio-group v-model="scl90paper.answer15">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='16. 听到旁人听不到的声音' prop="answer16">
          <el-radio-group v-model="scl90paper.answer16">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='17. 发抖' prop="answer17">
          <el-radio-group v-model="scl90paper.answer17">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='18. 感到大多数人都不可信任' prop="answer18">
          <el-radio-group v-model="scl90paper.answer18">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='19. 胃口不好' prop="answer19">
          <el-radio-group v-model="scl90paper.answer19">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='20. 容易哭泣' prop="answer20">
          <el-radio-group v-model="scl90paper.answer20">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='21. 同异性相处时感到害羞不自在' prop="answer21">
          <el-radio-group v-model="scl90paper.answer21">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='22. 感到受骗，中了圈套或有人想抓住您' prop="answer22">
          <el-radio-group v-model="scl90paper.answer22">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='23. 无缘无故地突然感到害怕' prop="answer23">
          <el-radio-group v-model="scl90paper.answer23">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='24. 自己不能控制地大发脾气' prop="answer24">
          <el-radio-group v-model="scl90paper.answer24">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='25. 怕单独出门' prop="answer25">
          <el-radio-group v-model="scl90paper.answer25">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='26. 经常责怪自己' prop="answer26">
          <el-radio-group v-model="scl90paper.answer26">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='27. 腰痛' prop="answer27">
          <el-radio-group v-model="scl90paper.answer27">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='28. 感到难以完成任务' prop="answer28">
          <el-radio-group v-model="scl90paper.answer28">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='29. 感到孤独' prop="answer29">
          <el-radio-group v-model="scl90paper.answer29">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='30. 感到苦闷' prop="answer30">
          <el-radio-group v-model="scl90paper.answer30">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='31. 过分担忧' prop="answer31">
          <el-radio-group v-model="scl90paper.answer31">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='32. 对事物不感兴趣' prop="answer32">
          <el-radio-group v-model="scl90paper.answer32">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='33. 感到害怕' prop="answer33">
          <el-radio-group v-model="scl90paper.answer33">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='34. 您的感情容易受到伤害' prop="answer34">
          <el-radio-group v-model="scl90paper.answer34">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='35. 旁人能知道您的私下想法' prop="answer35">
          <el-radio-group v-model="scl90paper.answer35">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='36. 感到别人不理解您、不同情您' prop="answer36">
          <el-radio-group v-model="scl90paper.answer36">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='37. 感到人们对您不友好，不喜欢您' prop="answer37">
          <el-radio-group v-model="scl90paper.answer37">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='38. 做事必须做得很慢以保证做得正确' prop="answer38">
          <el-radio-group v-model="scl90paper.answer38">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='39. 心跳得很厉害' prop="answer39">
          <el-radio-group v-model="scl90paper.answer39">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='40. 恶心或胃部不舒服' prop="answer40">
          <el-radio-group v-model="scl90paper.answer40">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='41. 感到比不上他人' prop="answer41">
          <el-radio-group v-model="scl90paper.answer41">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='42. 肌肉酸痛' prop="answer42">
          <el-radio-group v-model="scl90paper.answer42">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='43. 感到有人在监视您、谈论您' prop="answer43">
          <el-radio-group v-model="scl90paper.answer43">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='44. 难以入睡' prop="answer44">
          <el-radio-group v-model="scl90paper.answer44">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='45. 做事必须反复检查' prop="answer45">
          <el-radio-group v-model="scl90paper.answer45">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='46. 难以做出决定' prop="answer46">
          <el-radio-group v-model="scl90paper.answer46">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='47. 怕乘电车、公共汽车、地铁或火车' prop="answer47">
          <el-radio-group v-model="scl90paper.answer47">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='48. 呼吸有困难' prop="answer48">
          <el-radio-group v-model="scl90paper.answer48">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='49. 一阵阵发冷或发热' prop="answer49">
          <el-radio-group v-model="scl90paper.answer49">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='50. 因为感到害怕而避开某些东西、场合或活动' prop="answer50">
          <el-radio-group v-model="scl90paper.answer50">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='51. 脑子变空了' prop="answer51">
          <el-radio-group v-model="scl90paper.answer51">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='52. 身体发麻或刺痛' prop="answer52">
          <el-radio-group v-model="scl90paper.answer52">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='53. 喉咙有梗塞感' prop="answer53">
          <el-radio-group v-model="scl90paper.answer53">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='54. 感到前途没有希望' prop="answer54">
          <el-radio-group v-model="scl90paper.answer54">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='55. 不能集中注意力' prop="answer55">
          <el-radio-group v-model="scl90paper.answer55">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='56. 感到身体的某一部分软弱无力' prop="answer56">
          <el-radio-group v-model="scl90paper.answer56">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='57. 感到紧张或容易紧张' prop="answer57">
          <el-radio-group v-model="scl90paper.answer57">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='58. 感到手或脚发重' prop="answer58">
          <el-radio-group v-model="scl90paper.answer58">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='59. 想到死亡的事' prop="answer59">
          <el-radio-group v-model="scl90paper.answer59">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='60. 吃得太多' prop="answer60">
          <el-radio-group v-model="scl90paper.answer60">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='61. 当别人看着您或谈论您时感到不自在' prop="answer61">
          <el-radio-group v-model="scl90paper.answer61">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='62. 有一些不属于您自己的想法' prop="answer62">
          <el-radio-group v-model="scl90paper.answer62">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='63. 有想打人或伤害他人的冲动' prop="answer63">
          <el-radio-group v-model="scl90paper.answer63">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='64. 醒得太早' prop="answer64">
          <el-radio-group v-model="scl90paper.answer64">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='65. 必须反复洗手、点数' prop="answer65">
          <el-radio-group v-model="scl90paper.answer65">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='66. 睡得不稳不深' prop="answer66">
          <el-radio-group v-model="scl90paper.answer66">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='67. 有想摔坏或破坏东西的想法' prop="answer67">
          <el-radio-group v-model="scl90paper.answer67">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='68. 有一些别人没有的想法' prop="answer68">
          <el-radio-group v-model="scl90paper.answer68">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='69. 感到对别人神经过敏' prop="answer69">
          <el-radio-group v-model="scl90paper.answer69">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='70. 在商店或电影院等人多的地方感到不自在' prop="answer70">
          <el-radio-group v-model="scl90paper.answer70">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='71. 感到任何事情都很困难' prop="answer71">
          <el-radio-group v-model="scl90paper.answer71">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='72. 一阵阵恐惧或惊恐' prop="answer72">
          <el-radio-group v-model="scl90paper.answer72">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='73. 感到公共场合吃东西很不舒服' prop="answer73">
          <el-radio-group v-model="scl90paper.answer73">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='74. 经常与人争论' prop="answer74">
          <el-radio-group v-model="scl90paper.answer74">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='75. 单独一人时神经很紧张' prop="answer75">
          <el-radio-group v-model="scl90paper.answer75">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='76. 别人对您的成绩没有做出恰当的评价' prop="answer76">
          <el-radio-group v-model="scl90paper.answer76">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='77. 即使和别人在一起也感到孤单' prop="answer77">
          <el-radio-group v-model="scl90paper.answer77">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='78. 感到坐立不安心神不定' prop="answer78">
          <el-radio-group v-model="scl90paper.answer78">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='79. 感到自己没有什么价值' prop="answer79">
          <el-radio-group v-model="scl90paper.answer79">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='80. 感到熟悉的东西变成陌生或不像是真的' prop="answer80">
          <el-radio-group v-model="scl90paper.answer80">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='81. 大叫或摔东西' prop="answer81">
          <el-radio-group v-model="scl90paper.answer81">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='82. 害怕会在公共场合晕倒' prop="answer82">
          <el-radio-group v-model="scl90paper.answer82">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='83. 感到别人想占您的便宜' prop="answer83">
          <el-radio-group v-model="scl90paper.answer83">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='84. 为一些有关性的想法而很苦恼' prop="answer84">
          <el-radio-group v-model="scl90paper.answer84">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='85. 您认为应该因为自己的过错而受到惩罚' prop="answer85">
          <el-radio-group v-model="scl90paper.answer85">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='86. 感到要很快把事情做完' prop="answer86">
          <el-radio-group v-model="scl90paper.answer86">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='87. 感到自己的身体有严重问题' prop="answer87">
          <el-radio-group v-model="scl90paper.answer87">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='88. 从未感到和其他人很亲近' prop="answer88">
          <el-radio-group v-model="scl90paper.answer88">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='89. 感到自己有罪' prop="answer89">
          <el-radio-group v-model="scl90paper.answer89">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>
        <el-form-item label='90. 感到自己的脑子有毛病' prop="answer90">
          <el-radio-group v-model="scl90paper.answer90">
            <el-radio :label="1">没有</el-radio>
            <el-radio :label="2">很轻</el-radio>
            <el-radio :label="3">中等</el-radio>
            <el-radio :label="4">偏重</el-radio>
            <el-radio :label="5">严重</el-radio>
          </el-radio-group>
        </el-form-item>


        <el-form-item>
          <el-col :span="12">
            <el-button type="primary" @click="onSubmit('scl90paper')" style="width: 40%" :disabled="isAbledtoCommit">
              提交
            </el-button>
            <el-button type="primary" @click="dialogVisible = true,changeData" :disabled="isAbledtoShowResult">查看测评结果
            </el-button>
          </el-col>
        </el-form-item>


      </el-form>
    </div>


    <el-dialog title="SCL90心理测评结果" :visible.sync="dialogVisible" width="50%">
      <p class="resultMessage">您的各项评分和诊断如下：</p>

      <el-table :data="resultData">
        <el-table-column property="factor" label="因子" width="80"></el-table-column>
        <el-table-column property="score" label="分数" width="80"></el-table-column>
        <el-table-column property="pos_num" label="阳性指标数" width="100"></el-table-column>
        <el-table-column property="comment" label="解释"></el-table-column>
      </el-table>
      <!--      <p>评价:{{commentMessage()}}</p>-->
      <span slot="footer" class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </span>
    </el-dialog>


  </section>
</template>

<script>
  import {commitScl90Paper} from '../../api/api'

  export default {
    name: "scl90paper",
    data() {
      return {
        scl90paper: {
          // answer1: '',
          // answer2: '',
          // answer3: '',
          // answer4: '',
          // answer5: '',
          // answer6: '',
          // answer7: '',
          // answer8: '',
          // answer9: '',
          // answer10: '',
          // answer11: '',
          // answer12: '',
          // answer13: '',
          // answer14: '',
          // answer15: '',
          // answer16: '',
          // answer17: '',
          // answer18: '',
          // answer19: '',
          // answer20: '',
          // answer21: '',
          // answer22: '',
          // answer23: '',
          // answer24: '',
          // answer25: '',
          // answer26: '',
          // answer27: '',
          // answer28: '',
          // answer29: '',
          // answer30: '',
          // answer31: '',
          // answer32: '',
          // answer33: '',
          // answer34: '',
          // answer35: '',
          // answer36: '',
          // answer37: '',
          // answer38: '',
          // answer39: '',
          // answer40: '',
          // answer41: '',
          // answer42: '',
          // answer43: '',
          // answer44: '',
          // answer45: '',
          // answer46: '',
          // answer47: '',
          // answer48: '',
          // answer49: '',
          // answer50: '',
          // answer51: '',
          // answer52: '',
          // answer53: '',
          // answer54: '',
          // answer55: '',
          // answer56: '',
          // answer57: '',
          // answer58: '',
          // answer59: '',
          // answer60: '',
          // answer61: '',
          // answer62: '',
          // answer63: '',
          // answer64: '',
          // answer65: '',
          // answer66: '',
          // answer67: '',
          // answer68: '',
          // answer69: '',
          // answer70: '',
          // answer71: '',
          // answer72: '',
          // answer73: '',
          // answer74: '',
          // answer75: '',
          // answer76: '',
          // answer77: '',
          // answer78: '',
          // answer79: '',
          // answer80: '',
          // answer81: '',
          // answer82: '',
          // answer83: '',
          // answer84: '',
          // answer85: '',
          // answer86: '',
          // answer87: '',
          // answer88: '',
          // answer89: '',
          // answer90: '',

          answer1: 2,
          answer2: 2,
          answer3: 2,
          answer4: 2,
          answer5: 2,
          answer6: 2,
          answer7: 2,
          answer8: 2,
          answer9: 2,
          answer10: 2,
          answer11: 2,
          answer12: 2,
          answer13: 2,
          answer14: 2,
          answer15: 2,
          answer16: 2,
          answer17: 2,
          answer18: 2,
          answer19: 2,
          answer20: 2,
          answer21: 2,
          answer22: 2,
          answer23: 2,
          answer24: 2,
          answer25: 2,
          answer26: 2,
          answer27: 2,
          answer28: 2,
          answer29: 2,
          answer30: 2,
          answer31: 2,
          answer32: 2,
          answer33: 2,
          answer34: 2,
          answer35: 2,
          answer36: 2,
          answer37: 2,
          answer38: 2,
          answer39: 2,
          answer40: 2,
          answer41: 2,
          answer42: 2,
          answer43: 2,
          answer44: 2,
          answer45: 2,
          answer46: 2,
          answer47: 2,
          answer48: 2,
          answer49: 2,
          answer50: 2,
          answer51: 2,
          answer52: 2,
          answer53: 2,
          answer54: 2,
          answer55: 2,
          answer56: 2,
          answer57: 2,
          answer58: 2,
          answer59: 2,
          answer60: 2,
          answer61: 2,
          answer62: 2,
          answer63: 2,
          answer64: 2,
          answer65: 2,
          answer66: 2,
          answer67: 2,
          answer68: 2,
          answer69: 2,
          answer70: 2,
          answer71: 2,
          answer72: 2,
          answer73: 2,
          answer74: 2,
          answer75: 2,
          answer76: 2,
          answer77: 2,
          answer78: 2,
          answer79: 2,
          answer80: 2,
          answer81: 2,
          answer82: 2,
          answer83: 2,
          answer84: 2,
          answer85: 2,
          answer86: 2,
          answer87: 2,
          answer88: 2,
          answer89: 2,
          answer90: 2,
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
          answer26: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer27: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer28: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer29: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer30: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer31: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer32: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer33: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer34: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer35: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer36: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer37: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer38: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer39: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer40: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer41: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer42: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer43: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer44: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer45: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer46: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer47: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer48: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer49: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer50: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer51: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer52: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer53: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer54: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer55: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer56: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer57: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer58: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer59: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer60: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer61: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer62: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer63: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer64: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer65: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer66: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer67: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer68: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer69: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer70: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer71: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer72: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer73: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer74: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer75: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer76: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer77: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer78: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer79: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer80: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer81: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer82: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer83: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer84: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer85: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer86: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer87: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer88: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer89: [{required: true, message: '请选择其中一个', trigger: 'change'}],
          answer90: [{required: true, message: '请选择其中一个', trigger: 'change'}],
        },

        resultData: [],

        dialogVisible: false,
        isAbledtoShowResult: true,
        // isAbledtoShowResult: false,
        isAbledtoCommit: false,

      }
    },
    computed: {
      // 点击按钮触发
      changeData: function () {
        // somatization 躯体化
        let somatization = parseInt(this.scl90paper.answer1) + parseInt(this.scl90paper.answer4) + parseInt(this.scl90paper.answer12) + parseInt(this.scl90paper.answer27) + parseInt(this.scl90paper.answer40) + parseInt(this.scl90paper.answer42) + parseInt(this.scl90paper.answer48) + parseInt(this.scl90paper.answer49) + parseInt(this.scl90paper.answer52) + parseInt(this.scl90paper.answer53) + parseInt(this.scl90paper.answer56) + parseInt(this.scl90paper.answer58);
        let pos_num_somatization = (parseInt(this.scl90paper.answer1) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer4) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer12) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer27) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer40) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer42) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer48) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer49) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer52) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer53) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer56) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer58) >= 2 ? 1 : 0);
        let comment_somatization = '(主要反映身体不适感，包括心血管、胃肠道、呼吸和其他系统的不适，和头痛、背痛、肌肉酸痛，以及焦虑等躯体不适表现。) ';
        if (somatization < 24) {
          comment_somatization += '您的躯体症状表现不明显';
        } else if (somatization >= 24 && somatization < 36) {
          comment_somatization += '您在身体上可能偶尔有不适感。';
        } else if (somatization >= 36) {
          comment_somatization += '您在身体上可能有较明显的不适感，并常伴有头痛、肌肉酸痛等症状。';
        }
        let obj_somatization = {
          factor: '躯体化',
          score: isNaN(somatization) ? 0 : somatization,
          pos_num: pos_num_somatization + ' / 12',
          comment: comment_somatization
        };
        this.resultData.push(obj_somatization);

        // obsessive 强迫症状
        let obsessive = parseInt(this.scl90paper.answer3) + parseInt(this.scl90paper.answer9) + parseInt(this.scl90paper.answer10) + parseInt(this.scl90paper.answer10) + parseInt(this.scl90paper.answer28) + parseInt(this.scl90paper.answer38) + parseInt(this.scl90paper.answer45) + parseInt(this.scl90paper.answer46) + parseInt(this.scl90paper.answer51) + parseInt(this.scl90paper.answer55) + parseInt(this.scl90paper.answer65);
        let pos_num_obsessive = (parseInt(this.scl90paper.answer3) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer9) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer10) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer10) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer28) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer38) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer45) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer46) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer51) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer55) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer65) >= 2 ? 1 : 0);
        let comment_obsessive = '(主要指那些明知没有必要，但又无法摆脱的无意义的思想、冲动和行为，还有一些比较一般的认知障碍的行为征象也在这一因子中反映) ';
        if (obsessive < 20) {
          comment_obsessive += '您的强迫症状不明显。';
        } else if (obsessive >= 20 && obsessive < 30) {
          comment_obsessive += '您有轻微强迫症状倾向。';
        } else if (obsessive >= 30) {
          comment_obsessive += '您的强迫症状较明显。'
        }
        let obj_obsessive = {
          factor: '强迫症',
          score: isNaN(obsessive) ? 0 : obsessive,
          pos_num: pos_num_obsessive + " / 11",
          comment: comment_obsessive
        };
        this.resultData.push(obj_obsessive);
        // interpersonal 人际关系敏感

        let interpersonal = parseInt(this.scl90paper.answer6) + parseInt(this.scl90paper.answer21) + parseInt(this.scl90paper.answer34) + parseInt(this.scl90paper.answer36) + parseInt(this.scl90paper.answer37) + parseInt(this.scl90paper.answer41) + parseInt(this.scl90paper.answer61) + parseInt(this.scl90paper.answer69) + parseInt(this.scl90paper.answer73);
        let pos_num_interpersonal = (parseInt(this.scl90paper.answer6) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer21) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer34) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer36) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer37) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer41) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer61) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer69) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer73) >= 2 ? 1 : 0);
        let comment_interpersonal = '(主要是指某些人际的不自在与自卑感，特别是与其他人相比较时更加突出。在人际交往中的自卑感，心神不安，明显的不自在，以及人际交流中的不良自我暗示，消极的期待等是这方面症状的典型原因。) ';
        if (interpersonal < 18) {
          comment_interpersonal += '您在人际关系上较为正常';
        } else if (interpersonal >= 18 && interpersonal < 27) {
          comment_interpersonal += '您在人际关系上有敏感倾向,人际交往中有自卑倾向。';
        } else if (interpersonal >= 27) {
          comment_interpersonal += '您的人际关系较为敏感，人际交往中自卑感较强，并伴有行为症状（如坐立不安，退缩等）。'
        }
        let obj_interpersonal = {
          factor: '人际关系敏感',
          score: isNaN(interpersonal) ? 0 : interpersonal,
          pos_num: pos_num_interpersonal + " / 9",
          comment: comment_interpersonal
        };
        this.resultData.push(obj_interpersonal);

        // depression 抑郁
        let depression = parseInt(this.scl90paper.answer5) + parseInt(this.scl90paper.answer14) + parseInt(this.scl90paper.answer15) + parseInt(this.scl90paper.answer20) + parseInt(this.scl90paper.answer22) + parseInt(this.scl90paper.answer26) + parseInt(this.scl90paper.answer29) + parseInt(this.scl90paper.answer30) + parseInt(this.scl90paper.answer31) + parseInt(this.scl90paper.answer32) + parseInt(this.scl90paper.answer54) + parseInt(this.scl90paper.answer71) + parseInt(this.scl90paper.answer79);
        let pos_num_depression = (parseInt(this.scl90paper.answer5) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer14) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer15) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer20) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer22) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer26) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer29) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer30) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer31) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer32) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer54) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer71) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer79) >= 2 ? 1 : 0);
        let comment_depression = '(苦闷的情感与心境为代表性症状，还以生活兴趣的减退，动力缺乏，活力丧失等为特征。还表现出失望、悲观以及与抑郁相联系的认知和躯体方面的感受，另外，还包括有关死亡的思想和自杀观念。) ';
        if (depression < 26) {
          comment_depression += '您的抑郁程度较弱，生活态度乐观积极，充满活力，心境愉快。';
        } else if (depression >= 26 && depression < 39) {
          comment_depression += '您有抑郁倾向，生活有时会缺乏兴趣，精神不足。但不至于很严重。';
        } else if (depression >= 39) {
          comment_depression += '您的抑郁程度较强，生活缺乏足够的兴趣，缺乏运动活力，极端情况下，可能会有想死亡的思想和自杀的观念。'
        }
        let obj_depression = {
          factor: '抑郁',
          score: isNaN(depression) ? 0 : depression,
          pos_num: pos_num_depression + " / 13",
          comment: comment_depression
        };
        this.resultData.push(obj_depression);
        // anxiety 焦虑
        let anxiety = parseInt(this.scl90paper.answer2) + parseInt(this.scl90paper.answer17) + parseInt(this.scl90paper.answer23) + parseInt(this.scl90paper.answer33) + parseInt(this.scl90paper.answer39) + parseInt(this.scl90paper.answer57) + parseInt(this.scl90paper.answer72) + parseInt(this.scl90paper.answer78) + parseInt(this.scl90paper.answer80) + parseInt(this.scl90paper.answer86);
        let pos_num_anxiety = (parseInt(this.scl90paper.answer2) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer17) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer23) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer33) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer39) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer57) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer72) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer78) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer80) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer86) >= 2 ? 1 : 0);
        let comment_anxiety = '(一般指那些烦躁，坐立不安，神经过敏，紧张以及由此产生的躯体征象，如震颤等。) ';
        if (anxiety < 20) {
          comment_anxiety += '您不易焦虑，易表现出安定的状态。';
        } else if (anxiety >= 20 && anxiety < 30) {
          comment_anxiety += '您有时会焦虑，但多数时候为安定的状态。';
        } else if (anxiety >= 20) {
          comment_anxiety += '您较易焦虑，易表现出烦躁、不安静和神经过敏，极端时可能导致惊恐发作。'
        }
        let obj_anxiety = {
          factor: '焦虑',
          score: isNaN(anxiety) ? 0 : anxiety,
          pos_num: pos_num_anxiety + " / 10",
          comment: comment_anxiety
        };
        this.resultData.push(obj_anxiety);

        // hostility 敌对
        let hostility = parseInt(this.scl90paper.answer11) + parseInt(this.scl90paper.answer24) + parseInt(this.scl90paper.answer63) + parseInt(this.scl90paper.answer67) + parseInt(this.scl90paper.answer74) + parseInt(this.scl90paper.answer81);
        let pos_num_hostility = (parseInt(this.scl90paper.answer11) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer24) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer63) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer67) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer74) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer81) >= 2 ? 1 : 0);
        let comment_hostility = '(主要从三方面来反映敌对的表现：思想、感情及行为。其项目包括厌烦的感觉，摔物，争论直到不可控制的脾气暴发等各方面。) ';
        if (hostility < 12) {
          comment_hostility += '您容易表现出友好的思想、情感和行为。';
        } else if (hostility >= 12 && hostility < 18) {
          comment_hostility += '您有时表现出敌对的思想，但多数时是友好的态度。';
        } else if (hostility >= 18) {
          comment_hostility += '您易表现出敌对的思想、情感和行为。'
        }
        let obj_hostility = {
          factor: '敌对',
          score: isNaN(hostility) ? 0 : hostility,
          pos_num: pos_num_hostility + " / 6",
          comment: comment_hostility
        };
        this.resultData.push(obj_hostility);

        // phobic 恐怖
        let phobic = parseInt(this.scl90paper.answer13) + parseInt(this.scl90paper.answer25) + parseInt(this.scl90paper.answer47) + parseInt(this.scl90paper.answer50) + parseInt(this.scl90paper.answer70) + parseInt(this.scl90paper.answer75) + parseInt(this.scl90paper.answer82);
        let pos_num_phobic = (parseInt(this.scl90paper.answer13) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer25) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer47) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer50) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer70) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer75) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer82) >= 2 ? 1 : 0);
        let comment_phobic = '(恐惧的对象包括出门旅行，空旷场地，人群或公共场所和交通工具。此外，还有社交恐怖。) ';
        if (phobic < 14) {
          comment_phobic += '您的恐怖症状不明显。';
        } else if (phobic >= 14 && phobic < 21) {
          comment_phobic += '您的恐怖症状不是很明显，但有时会表现出对社交、广场和人群恐惧。';
        } else if (phobic >= 21) {
          comment_phobic += '您的恐怖症状较为明显，常表现出社交、广场和人群恐惧。'
        }
        let obj_phobic = {
          factor: '恐怖',
          score: isNaN(phobic) ? 0 : phobic,
          pos_num: pos_num_phobic + " / 7",
          comment: comment_phobic
        };
        this.resultData.push(obj_phobic);
        // paranoid 偏执
        let paranoid = parseInt(this.scl90paper.answer8) + parseInt(this.scl90paper.answer18) + parseInt(this.scl90paper.answer43) + parseInt(this.scl90paper.answer68) + parseInt(this.scl90paper.answer76) + parseInt(this.scl90paper.answer83);
        let pos_num_paranoid = (parseInt(this.scl90paper.answer8) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer18) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer43) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer68) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer76) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer83) >= 2 ? 1 : 0);
        let comment_paranoid = '(主要指投射性思维，敌对，猜疑，妄想，被动体验和夸大等。) ';
        if (paranoid < 12) {
          comment_paranoid += '您的偏执症状不明显。';
        } else if (paranoid >= 12 && paranoid < 18) {
          comment_paranoid += '您有偏执倾向，有时会猜疑和敌对。';
        } else if (paranoid >= 18) {
          comment_paranoid += '您的偏执症状明显，较易猜疑和敌对。'
        }
        let obj_paranoid = {
          factor: '偏执',
          score: isNaN(paranoid) ? 0 : paranoid,
          pos_num: pos_num_paranoid + " / 6",
          comment: comment_paranoid
        };
        this.resultData.push(obj_paranoid);

        // psychoticism 精神病性
        let psychoticism = parseInt(this.scl90paper.answer7) + parseInt(this.scl90paper.answer16) + parseInt(this.scl90paper.answer35) + parseInt(this.scl90paper.answer62) + parseInt(this.scl90paper.answer77) + parseInt(this.scl90paper.answer84) + parseInt(this.scl90paper.answer85) + parseInt(this.scl90paper.answer87) + parseInt(this.scl90paper.answer88) + parseInt(this.scl90paper.answer90);
        let pos_num_psychoticism = (parseInt(this.scl90paper.answer7) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer16) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer35) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer62) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer77) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer84) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer85) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer87) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer88) >= 2 ? 1 : 0) + (parseInt(this.scl90paper.answer90) >= 2 ? 1 : 0);
        let comment_psychoticism = '(反映各式各样的急性症状和行为，即限定不严的精神病性过程的症状表现。) ';
        if (psychoticism < 20) {
          comment_psychoticism += '您的精神病性症状不明显。';
        } else if (psychoticism >= 20 && psychoticism < 30) {
          comment_psychoticism += '您有精神病性症状倾向。';
        } else if (psychoticism >= 30) {
          comment_psychoticism += '您的的精神病性症状较为明显。'
        }
        let obj_psychoticism = {
          factor: '精神病性',
          score: isNaN(psychoticism) ? 0 : psychoticism,
          pos_num: pos_num_psychoticism + " / 10",
          comment: comment_psychoticism
        };
        this.resultData.push(obj_psychoticism);
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
          answer1: this.scl90paper.answer1,
          answer2: this.scl90paper.answer2,
          answer3: this.scl90paper.answer3,
          answer4: this.scl90paper.answer4,
          answer5: this.scl90paper.answer5,
          answer6: this.scl90paper.answer6,
          answer7: this.scl90paper.answer7,
          answer8: this.scl90paper.answer8,
          answer9: this.scl90paper.answer9,
          answer10: this.scl90paper.answer10,
          answer11: this.scl90paper.answer11,
          answer12: this.scl90paper.answer12,
          answer13: this.scl90paper.answer13,
          answer14: this.scl90paper.answer14,
          answer15: this.scl90paper.answer15,
          answer16: this.scl90paper.answer16,
          answer17: this.scl90paper.answer17,
          answer18: this.scl90paper.answer18,
          answer19: this.scl90paper.answer19,
          answer20: this.scl90paper.answer20,
          answer21: this.scl90paper.answer21,
          answer22: this.scl90paper.answer22,
          answer23: this.scl90paper.answer23,
          answer24: this.scl90paper.answer24,
          answer25: this.scl90paper.answer25,
          answer26: this.scl90paper.answer26,
          answer27: this.scl90paper.answer27,
          answer28: this.scl90paper.answer28,
          answer29: this.scl90paper.answer29,
          answer30: this.scl90paper.answer30,
          answer31: this.scl90paper.answer31,
          answer32: this.scl90paper.answer32,
          answer33: this.scl90paper.answer33,
          answer34: this.scl90paper.answer34,
          answer35: this.scl90paper.answer35,
          answer36: this.scl90paper.answer36,
          answer37: this.scl90paper.answer37,
          answer38: this.scl90paper.answer38,
          answer39: this.scl90paper.answer39,
          answer40: this.scl90paper.answer40,
          answer41: this.scl90paper.answer41,
          answer42: this.scl90paper.answer42,
          answer43: this.scl90paper.answer43,
          answer44: this.scl90paper.answer44,
          answer45: this.scl90paper.answer45,
          answer46: this.scl90paper.answer46,
          answer47: this.scl90paper.answer47,
          answer48: this.scl90paper.answer48,
          answer49: this.scl90paper.answer49,
          answer50: this.scl90paper.answer50,
          answer51: this.scl90paper.answer51,
          answer52: this.scl90paper.answer52,
          answer53: this.scl90paper.answer53,
          answer54: this.scl90paper.answer54,
          answer55: this.scl90paper.answer55,
          answer56: this.scl90paper.answer56,
          answer57: this.scl90paper.answer57,
          answer58: this.scl90paper.answer58,
          answer59: this.scl90paper.answer59,
          answer60: this.scl90paper.answer60,
          answer61: this.scl90paper.answer61,
          answer62: this.scl90paper.answer62,
          answer63: this.scl90paper.answer63,
          answer64: this.scl90paper.answer64,
          answer65: this.scl90paper.answer65,
          answer66: this.scl90paper.answer66,
          answer67: this.scl90paper.answer67,
          answer68: this.scl90paper.answer68,
          answer69: this.scl90paper.answer69,
          answer70: this.scl90paper.answer70,
          answer71: this.scl90paper.answer71,
          answer72: this.scl90paper.answer72,
          answer73: this.scl90paper.answer73,
          answer74: this.scl90paper.answer74,
          answer75: this.scl90paper.answer75,
          answer76: this.scl90paper.answer76,
          answer77: this.scl90paper.answer77,
          answer78: this.scl90paper.answer78,
          answer79: this.scl90paper.answer79,
          answer80: this.scl90paper.answer80,
          answer81: this.scl90paper.answer81,
          answer82: this.scl90paper.answer82,
          answer83: this.scl90paper.answer83,
          answer84: this.scl90paper.answer84,
          answer85: this.scl90paper.answer85,
          answer86: this.scl90paper.answer86,
          answer87: this.scl90paper.answer87,
          answer88: this.scl90paper.answer88,
          answer89: this.scl90paper.answer89,
          answer90: this.scl90paper.answer90,
        };


        // 表单验证
        this.$refs[formName].validate((valid) => {
          if (valid) {

            // 校验成功之后可以查看结果,且不可重复提交
            this.isAbledtoShowResult = false;
            this.isAbledtoCommit = true;
            // 发送数据
            commitScl90Paper(data).then((res) => {

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

  .extreme {
    color: red;
  }

</style>
<style>
  .el-dialog span, p {
    font-size: 16px;
    margin: 10px 0px;
  }
</style>
