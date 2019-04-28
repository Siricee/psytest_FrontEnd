<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 用户</el-breadcrumb-item>
        <el-breadcrumb-item>用户信息登记</el-breadcrumb-item>
      </el-breadcrumb>
    </div>


    <div class="form-box">
      <el-form ref="userInfoForm" :model="userInfoForm" :rules="rules" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-col :span="12">
            <el-input v-model="userInfoForm.username" placeholder="请输入用户名"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-col :span="12">
            <el-input type="password" v-model="userInfoForm.password" placeholder="请输入密码"></el-input>
          </el-col>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-col :span="12">
            <el-input type="password" v-model="userInfoForm.confirmPassword" placeholder="再次输入密码"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="性别" prop="sex">
          <el-col :span="12">
            <el-select v-model="userInfoForm.sex" placeholder="请选择" style="width: 100%">
              <el-option key="男" label="男" :value="1"></el-option>
              <el-option key="女" label="女" :value="2"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="年龄" prop="age">
          <el-col :span="12">
            <el-input type="text" v-model="userInfoForm.age" placeholder="请输入年龄"></el-input>
          </el-col>
        </el-form-item>

        <el-form-item label="从事行业" prop="work">
          <el-col :span="12">
            <el-select v-model="userInfoForm.work" placeholder="请选择" style="width: 100%">
              <el-option v-for="item in workOptions" :key="item.value" :label="item.label" :value="item.value"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="地区" prop="location">
          <el-col :span="12">
            <el-cascader :options="locationOptions" v-model="userInfoForm.location" @change="handleChange"
                         style="width: 100%" placeholder="请选择"></el-cascader>
          </el-col>
        </el-form-item>

        <el-form-item label="工资水平" prop="salary">
          <el-col :span="12">
            <el-select v-model="userInfoForm.salary" placeholder="请选择" style="width: 100%">
              <el-option key="1" label="1000元以下" :value="1"></el-option>
              <el-option key="2" label="1000-1999元" :value="2"></el-option>
              <el-option key="3" label="2000-3999元" :value="3"></el-option>
              <el-option key="4" label="4000-5999元" :value="4"></el-option>
              <el-option key="5" label="6000-9999元" :value="5"></el-option>
              <el-option key="6" label="10000-19999元" :value="6"></el-option>
              <el-option key="7" label="20000元以上" :value="7"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item label="是否已婚" prop="marriage">
          <el-col :span="12">
            <el-select v-model="userInfoForm.marriage" placeholder="请选择" style="width: 100%">
              <el-option key="0" label="未婚" :value="0"></el-option>
              <el-option key="1" label="已婚" :value="1"></el-option>
            </el-select>
          </el-col>
        </el-form-item>

        <el-form-item>
          <el-col :span="12">
            <el-button type="primary" @click="onSubmit('userInfoForm')" style="width: 40%">注册</el-button>
            <el-button @click="onCancel" style="width: 40%">取消</el-button>
          </el-col>
        </el-form-item>
      </el-form>
    </div>

  </section>
</template>

<script>
  import {provinceAndCityData, CodeToText} from 'element-china-area-data'
  import {isRepeatedName,userRegister} from '../../api/api'

  const axios = require('axios');

  export default {
    name: "register",
    data() {

      let checkPassword = (rule, value, callback) => {
        if (value !== this.userInfoForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      let checkRepeatedUsername = (rule, value, callback) => {
        let para = {'username': value};
        isRepeatedName(para).then((res) => {
          if (res.data === false) {
            callback(new Error('该用户名用户已存在'));
          } else {
            callback();
          }
        });
      };
      return {
        locationOptions: provinceAndCityData,

        workOptions: [{value: 'A', label: '农、林、牧、渔业'},
          {value: 'B', label: '采矿业'},
          {value: 'C', label: '制造业'},
          {value: 'D', label: '电力、热力、燃气及水生产和供应业'},
          {value: 'E', label: '建筑业'},
          {value: 'F', label: '批发和零售业'},
          {value: 'G', label: '交通运输、仓储和邮政业'},
          {value: 'H', label: '住宿和餐饮业'},
          {value: 'I', label: '信息传输、软件和信息技术服务业'},
          {value: 'J', label: '金融业'},
          {value: 'K', label: '房地产业；'},
          {value: 'L', label: '租赁和商务服务业'},
          {value: 'M', label: '科学研究和技术服务业'},
          {value: 'N', label: '水利、环境和公共设施管理业'},
          {value: 'O', label: '居民服务、修理和其他服务业'},
          {value: 'P', label: '教育'},
          {value: 'Q', label: '卫生和社会工作'},
          {value: 'R', label: '文化、体育和娱乐业'},
          {value: 'S', label: '公共管理、社会保障和社会组织'},
          {value: 'T', label: '国际组织'},
          {value: 'Y', label: '无业'},
          {value: 'Z', label: '其他'}],
        // 数据初始化
        userInfoForm: {
          username: '',
          password: '',
          age: '',
          sex: [],
          work: [],
          location: [],
          salary: [],
          marriage: []
        },
        // 表单验证
        rules: {
          username: [{
            required: true, message: '请输入用户名', trigger: 'blur'
          }, {
            validator: checkRepeatedUsername, trigger: 'blur'
          }],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          confirmPassword: [
            {validator: checkPassword, trigger: 'blur'}
          ],
          age: [{
            required: true, message: '请输入年龄', trigger: 'blur'
          }],
          sex: [{
            required: true, message: '请输入性别', trigger: 'blur'
          }],
          work: [{
            required: true, message: '请选择行业', trigger: 'blur'
          }],
          location: [{
            required: true, message: '请选择地区', trigger: 'blur'
          }],
          salary: [{
            required: true, message: '请选择薪资范围', trigger: 'blur'
          }],
          marriage: [{
            required: true, message: '请选择是否已婚', trigger: 'blur'
          }],

        },
      }

    },
    created() {

    },
    methods: {
      handleChange(value) {
        // change 事件触发赋值
        this.userInfoForm.location = value;
      },
      onSubmit(formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({message: '验证通过', type: 'success'});
            // 发送数据
            let userInfoData = {
              username: this.userInfoForm.username,
              password: this.userInfoForm.password,
              age: this.userInfoForm.age,
              sex: this.userInfoForm.sex,
              work: this.userInfoForm.work,
              location: CodeToText[this.userInfoForm.location[0]]+CodeToText[this.userInfoForm.location[1]],
              salary: this.userInfoForm.salary,
              marriage: this.userInfoForm.marriage
            };
            console.log(userInfoData);

            userRegister(userInfoData).then((res)=>{
              if(res.data===1){
                this.$message({
                  message:'注册成功',
                  type:'success'
                })
              }else{
                this.$message.error('注册失败');
              }
            });

            return true;
          } else {
            this.$message.error('表单填写不完整');
            return false;
          }
        });
      },
      onCancel() {
        localStorage.removeItem('user');
        this.$router.replace('/login');
      },


    },
  }
</script>

<style scoped>

</style>
