<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" theme="dark" unique-opened router>
      <template v-for="item in items">
        <template v-if="item.subs">
          <el-submenu :index="item.index">
            <template slot="title"><i :class="item.icon"></i>{{ item.title }}</template>
            <el-menu-item v-for="(subItem,i) in item.subs" :key="i" :index="subItem.index">{{ subItem.title }}
            </el-menu-item>
          </el-submenu>
        </template>
        <template v-else>
          <el-menu-item :index="item.index">
            <i :class="item.icon"></i>{{ item.title }}
          </el-menu-item>
        </template>
      </template>
    </el-menu>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        items: [
          {
            icon: 'el-icon-tickets',
            index: 'user-manage',
            title: '用户管理',
            subs: [{
              index: 'user-register',
              title: '用户注册'
            }, {
              index: 'user-info',
              title: '用户信息管理'
            }]
          },
          {
            icon: 'el-icon-edit-outline',
            index: '2',
            title: '心理测试问卷',
            subs: [
              {
                index: 'scl90-paper',
                title: 'SCL90症状测试'
              },
              {
                index: 'sas-paper',
                title: 'SAS焦虑测试'
              }, {
                index: 'novack-paper',
                title: 'Novack愤怒测试'

              }, {
                index: 'dass21-paper',
                title: 'DASS21负面情绪测试'
              }
            ]
          },{
            icon: 'el-icon-time',
            index: '3',
            title: '历史测试记录',
            subs: [
              {
                index: 'personal-scl90-paper',
                title: 'SCL90症状测试记录'
              },
              {
                index: 'personal-sas-paper',
                title: 'SAS焦虑测试记录'
              }, {
                index: 'personal-novack-paper',
                title: 'Novack愤怒测试记录'

              }, {
                index: 'personal-dass21-paper',
                title: 'DASS21负面测试记录'
              }
            ]
          },
          {
            icon: 'el-icon-date',
            index: '4',
            title: '心理测试数据分析',
            subs: [
              {
                index: 'scl90-history',
                title: 'SCL90量表记录'
              },
              {
                index: 'sas-history',
                title: 'SAS量表记录'
              }, {
                index: 'novack-history',
                title: 'Novack量表记录'

              }, {
                index: 'dass21-history',
                title: 'DASS21量表记录'
              },{
                index: 'data',
                title:'没想好怎么统计'
              }
            ]
          },
        ]
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    }
  }
</script>

<style scoped>
  .sidebar {
    display: block;
    position: absolute;
    width: 250px;
    left: 0;
    top: 70px;
    bottom: 0;
    background: #2E363F;
  }

  .sidebar > ul {
    height: 100%;
  }
</style>
