<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 用户</el-breadcrumb-item>
        <el-breadcrumb-item>分析人员管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <el-row>
      <el-col :span="22">
        <div style="text-align: left;margin: 20px 0">
          <el-button size="small" type="primary" @click="RegisterDialog = true">注册分析员账号</el-button>
        </div>
      </el-col>
    </el-row>

    <el-dialog title="注册分析人员账号" :visible.sync="RegisterDialog" width="30%">

      <el-form label-width="80px" :model="registerAdminForm" :rules="rules" ref="registerAdminForm">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="registerAdminForm.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="registerAdminForm.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword">
          <el-input type="password" v-model="registerAdminForm.confirmPassword" placeholder="请再次输入密码"></el-input>
        </el-form-item>
      </el-form>

      <span slot="footer" class="dialog-footer">
        <el-button @click="RegisterDialog = false">取 消</el-button>
        <el-button type="primary" @click="onSubmit('registerAdminForm')">注 册</el-button>
      </span>
    </el-dialog>

    <el-row>
      <el-col :span="22">
        <div class="adminTable">
          <el-table :data="adminList" v-loading="listLoading" max-height="500" highlight-current-row border
                    style="width: 100%;overflow-y: hidden;">
            <el-table-column prop="id" label="序号" width="90"></el-table-column>
            <el-table-column prop="username" label="姓名"></el-table-column>
            <el-table-column prop="authority" label="权限等级" :formatter="authorityFormatter"></el-table-column>
            <el-table-column label="操作" width="80" fixed="right">
              <template slot-scope="scope">
                <el-button size="small" type="danger" plain @click="deleteAdmin(scope.$index, scope.row)"
                           :disabled="isDisabled(scope.$index, scope.row)">删除
                </el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

  </section>
</template>

<script>
  import {getAdminList, deleteAdminAccount, isRepeatedAdminName, adminRegister} from "../../api/api";

  export default {
    name: "adminTable",
    data() {
      let checkPassword = (rule, value, callback) => {
        if (value !== this.registerAdminForm.password) {
          callback(new Error('两次输入密码不一致!'));
        } else {
          callback();
        }
      };
      let checkRepeatedAdminName = (rule, value, callback) => {
        let para = {'username': value};
        isRepeatedAdminName(para).then((res) => {
          if (res.data === false) {
            callback(new Error('该用户名用户已存在'));
          } else {
            callback();
          }
        });
      };
      return {
        // table
        listLoading: true,
        adminList: [],
        // dialogs
        RegisterDialog: false,
        registerAdminForm: {
          username: '',
          password: '',
        },
        rules: {
          username: [{
            required: true, message: '请输入用户名', trigger: 'blur'
          }, {
            validator: checkRepeatedAdminName, trigger: 'blur'
          }],
          password: [
            {required: true, message: '请输入密码', trigger: 'blur'}
          ],
          confirmPassword: [
            {validator: checkPassword, trigger: 'blur'}
          ],
        }
      }
    },
    methods: {
      getData: function () {
        new Promise((resolve, reject) => {
          let data = getAdminList().then(res => {
            return res.data;
          });
          resolve(data);
        }).then((res) => {
          this.adminList = res;
          this.listLoading = false;
        })
      },

      authorityFormatter: function (row) {
        switch (parseInt(row.authority)) {
          case 0:
            return '系统管理员';
          case 1:
            return '数据分析员';
        }
      },
      isDisabled: function (index, row) {
        switch (parseInt(row.authority)) {
          case 0:
            return true;
          default:
            return false;
        }
      },
      deleteAdmin: function (index, row) {
        let deleteUser = {'id': parseInt(row.id)};
        deleteAdminAccount(deleteUser).then((res) => {
          if (res.data == 1) {
            this.adminList.splice(index, 1);
            this.$message({
              type: 'success',
              message: '删除成功'
            });
          }
        });
      },

      onSubmit(formName) {
        const self = this;
        self.$refs[formName].validate((valid) => {
          if (valid) {
            this.$message({message: '验证通过', type: 'success'});
            let admindata = {
              username: this.registerAdminForm.username,
              password: this.registerAdminForm.password,
            };
            adminRegister(admindata).then((res) => {
              if (res.data === 1) {
                this.$message({
                  message: '注册成功',
                  type: 'success'
                });
                this.getData();
              } else {
                this.$message.error('注册失败');
              }
            });
            this.RegisterDialog = false;
            return true;
          } else {
            this.$message.error('表单填写不完整');
            return false;
          }
        })
      }
    },
    mounted() {
      this.getData();
    },
  }
</script>

<style scoped>

</style>
