<template>
  <div class="continer">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="6">
        <el-card class="box-card">
          <el-form :model="loginForm">
            <el-form-item>
              <el-input placeholder="请输入用户名" v-model="loginForm.username" clearable>
                <template slot="prepend" class="prependDiv">用户名</template>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input placeholder="请输入密码" v-model="loginForm.password" show-password>
                <template slot="prepend" class="prependDiv">密&nbsp;&nbsp;&nbsp;码</template>
              </el-input>
            </el-form-item>
          </el-form>
          <el-row>
            <el-col :span="8">
              <el-button class="btn login_btn" type="primary" icon="el-icon-circle-check-outline" @click.native="login"
                         plain>登录
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="btn login_btn" type="primary" icon="el-icon-setting" @click.native="adminlogin"
                         plain>管理
              </el-button>
            </el-col>
            <el-col :span="8">
              <el-button class="btn register_btn" type="info" icon="el-icon-circle-plus-outline"
                         @click.native="register" plain>注册
              </el-button>
            </el-col>
          </el-row>

        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import {userLogin,adminLogin} from "../api/api";
  import qs from 'qs';

  const axios = require('axios');

  export default {
    name: "login",
    data() {
      return {
        labelPosition: 'right',
        loginForm: {
          username: '',
          password: '',
        }
      }
    },

    created() {
      if (JSON.parse(localStorage.getItem('user'))) {
        this.loginForm.username = JSON.parse(localStorage.getItem('user')).username;
        this.loginForm.password = JSON.parse(localStorage.getItem('user')).password;
      }
      // console.log("here")
    },

    methods: {
      // 普通用户登录
      login: function () {

        if (!this.loginForm.username || !this.loginForm.password) {
          this.$message({message: "用户名或密码不能为空", type: 'warning'});
          return false;
        } else {

          let postData = {
            'username': this.loginForm.username,
            'password': this.loginForm.password
          };

          userLogin(postData).then((response) => {
            // console.log(response)
            if (response.data !== "") {
              // console.log(response.data);
              this.$message({
                message: '登录成功',
                type: 'success'
              });
              // console.log(response.data.id);
              localStorage.setItem('user', JSON.stringify({
                'userid': response.data.id,
                'username': response.data.username,
                'password': response.data.password,
                'authority': response.data.authority
              }));

              this.$router.push('/home') // 登录成功 跳转用户页面

            } else {
              this.$message.error('用户名或密码错误');
              this.loginForm.username = '';
              this.loginForm.password = '';
            }
          }).catch(function (error) {
            this.$message.error("网络错误，稍后再试")
          });

          //localStorage.setItem('admin', JSON.stringify(res.msg));
          // this.$router.push('/home')
          // 页面跳转

        }
      },
      // 管理员登录
      adminlogin: function () {
        if (!this.loginForm.username || !this.loginForm.password) {
          this.$message({message: "用户名或密码不能为空", type: 'warning'});
          return false
        } else {
          let postData = {
            'username': this.loginForm.username,
            'password': this.loginForm.password
          };

          adminLogin(postData).then((response) => {

            if (response.data !== "") {

              this.$message({
                message: '登录成功',
                type: 'success'
              });
              localStorage.setItem('user', JSON.stringify({
                'userid': response.data.id,
                'username': response.data.username,
                'password': response.data.password,
                'authority': response.data.authority
              }));

              this.$router.push('/home') // 登录成功 跳转管理员页面

            } else {
              this.$message.error("用户名或密码错误！");
              this.loginForm.username = '';
              this.loginForm.password = '';
            }
          }).catch(function (error) {
            this.$message.error("网络错误，稍后再试")
          });
          //localStorage.setItem('admin', JSON.stringify(res.msg));
          // this.$router.push('/home')
          // 页面跳转
        }
      },
      register() {
        console.log("click register")
      }
    }


  }
</script>

<style scoped>
  .row-bg {
    margin-bottom: 20px;
  }

  .continer {
    padding-top: 15%;
  }

  .box-card {
    padding-top: 20px;
    border-radius: 5px;
  }

  .btn {
    width: 96%;
  }


</style>
