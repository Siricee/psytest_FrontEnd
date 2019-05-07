<template>
  <div class="sidebar">
    <el-menu :default-active="onRoutes" class="el-menu-vertical-demo" background-color="#4082c4e8"
             text-color="#fff"
             active-text-color="#ffcc33" unique-opened router>
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
        items: []
      }
    },
    computed: {
      onRoutes() {
        return this.$route.path.replace('/', '');
      }
    },
    mounted() {
      this.initUserData();
    },
    methods: {
      // 根据权限装载菜单
      initUserData() {
        let login_user = JSON.parse(localStorage.getItem('user'));
        if (login_user != null) {
          let authority = login_user.authority;
          console.log(authority);
          if (authority === 0) {
            // 0: admin账户
            let menu_items = [
              {
                icon: 'el-icon-tickets',
                index: 'user-manage',
                title: '用户管理',
                subs: [{
                  index: 'user-register',
                  title: '用户注册'
                }, {
                  index: 'admin-info',
                  title: '分析人员信息管理'
                }, {
                  index: 'user-info',
                  title: '用户信息查看'
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
              }, {
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
                  },
                ]
              },];
            this.items = menu_items;

          } else if (authority === 1) {
            // 1: 分析人员
            let menu_items = [
              {
                icon: 'el-icon-tickets',
                index: 'user-manage',
                title: '用户管理',
                subs: [{
                  index: 'user-info',
                  title: '用户信息查看'
                }]
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
                  },]
              }
            ];
            this.items = menu_items;

          } else if (authority === 2) {
            // 2: 测试用户
            let menu_items = [
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
              },
              {
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
              },];
            this.items = menu_items;

          }
        } else {
          let menu_items = [
            {
              icon: 'el-icon-tickets',
              index: 'user-manage',
              title: '用户管理',
              subs: [{
                index: 'user-register',
                title: '用户注册'
              }]
            }
          ];
          this.items = menu_items;
        }


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
  }

  .sidebar > ul {
    height: 100%;
  }

  .sidebar ul li i {
    color: #fff;
  }

</style>
