<template>
  <section>
    <div class="crumbs">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item><i class="el-icon-document"></i> 用户</el-breadcrumb-item>
        <el-breadcrumb-item>用户信息管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <template>
      <el-table :data="userList" v-loading="listLoading" height="500" highlight-current-row border
                style="width: 100%;overflow-y: hidden;">
        <el-table-column prop="id" label="序号" width="90" sortable></el-table-column>
        <el-table-column prop="username" label="姓名" width="150"></el-table-column>
        <el-table-column prop="age" label="年龄" width="90" sortable></el-table-column>
        <el-table-column prop="sex" label="性别" width="90" :formatter="formatSex" sortable></el-table-column>
        <el-table-column prop="work" label="工作" :formatter="formatWork" sortable></el-table-column>
        <el-table-column prop="location" label="地点" width="160"></el-table-column>
        <el-table-column prop="salary" label="薪资" width="120" :formatter="formatSalary" sortable></el-table-column>
        <el-table-column prop="marriage" label="婚姻状况" width="120" :formatter="formatMarriage"
                         sortable></el-table-column>
      </el-table>
    </template>
  </section>
</template>

<script>
  import {getUserList} from '../../api/api';
  import {formatWorkUtil,formatSexUtil,formatMarriageUtil,formatSalaryUtil} from "../../common/js/formatUtils";

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
        return formatWorkUtil(row, column);
      },
      formatSex: function (row, column) {
        return formatSexUtil(row,column);
      },
      formatMarriage: function (row, column) {
        return formatMarriageUtil(row,column);
      },
      formatSalary: function (row, column) {
        return formatSalaryUtil(row,column);
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
