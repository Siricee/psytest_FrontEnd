<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 用户</el-breadcrumb-item>
        <el-breadcrumb-item>用户信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <template>
      <el-table :data="userList" v-loading="listLoading" height="500" highlight-current-row border style="width: 100%;overflow-y: hidden;">
        <el-table-column prop="id" label="序号" width="90" sortable></el-table-column>
        <el-table-column prop="username" label="姓名" width="150"></el-table-column>
        <el-table-column prop="age" label="年龄" width="90" sortable></el-table-column>
        <el-table-column prop="sex" label="性别" width="90" :formatter="formatSex" sortable></el-table-column>
        <el-table-column prop="work" label="工作"  :formatter="formatWork" sortable></el-table-column>
        <el-table-column prop="location" label="地点" width="160"></el-table-column>
        <el-table-column prop="salary" label="薪资" width="120" :formatter="formatSalary" sortable></el-table-column>
        <el-table-column prop="marriage" label="婚姻状况" width="120" :formatter="formatMarriage" sortable></el-table-column>
      </el-table>
    </template>
  </section>
</template>

<script>
  import {getUserList} from '../../api/api';

  export default {

    name: "userTable",
    data() {
      return {
        listLoading: false,
        userList: []
      }
    },
    methods: {
      formatWork: function (row, column) {
          switch(row.work){
            case 'A':return "农、林、牧、渔业";
            case 'B':return "采矿业";
            case 'C':return "制造业";
            case 'D':return "电力、热力、燃气及水生产和供应业";
            case 'E':return "建筑业";
            case 'F':return "批发和零售业";
            case 'G':return "交通运输、仓储和邮政业";
            case 'H':return "住宿和餐饮业";
            case 'I':return "信息传输、软件和信息技术服务业";
            case 'J':return "金融业";
            case 'K':return "房地产业";
            case 'L':return "租赁和商务服务业";
            case 'M':return "科学研究和技术服务业";
            case 'N':return "水利、环境和公共设施管理业";
            case 'O':return "居民服务、修理和其他服务业";
            case 'P':return "教育";
            case 'Q':return "卫生和社会工作";
            case 'R':return "文化、体育和娱乐业";
            case 'S':return "公共管理、社会保障和社会组织";
            case 'T':return "国际组织";
            case 'Y':return "无业";
            case 'Z':return " 其他";
            default:return;
          }
        },
      formatSex: function (row, column) {
        return row.sex == 1 ? '男' : row.sex == 2 ? '女' : '未知';
      },
      formatMarriage: function (row, column) {
        return row.marriage == 1 ? '已婚' : row.marriage == 0 ? '未婚' : '未知';
      },
      formatSalary:function(row,column){
        switch (row.salary) {
          case 1:return "1000元以下";
          case 2:return "1000-1999元";
          case 3:return "2000-3999元";
          case 4:return "4000-5999元";
          case 5:return "6000-9999元";
          case 6:return "10000-19999元";
          case 7:return "20000元以上";
          default:return;
        }
      },

      getUsers() {
        getUserList().then((res) => {
          this.userList = res.data;
        })
      }
    },
    mounted() {
      this.getUsers();
    }
  }
</script>

<style scoped>


</style>
