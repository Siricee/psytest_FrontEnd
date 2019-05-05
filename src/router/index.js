import Vue from 'vue'
import Router from 'vue-router'
// 主模块
import Login from '../components/login'
import Home from '../components/Home'
// 占位示例模块
import defaultModule from '../components/default'


// 组件注册
Vue.use(Router);

// 懒加载

// 用户管理模块
const Register = resolve => require(['../components/user-manage/register'],resolve);
const userTable = resolve => require(['../components/user-manage/userTable'],resolve);
const adminTable = resolve => require(['../components/user-manage/adminTable'],resolve);
// 问卷模块
const scl90paper = resolve => require(['../components/papers/scl90paper'],resolve);
const saspaper = resolve => require(['../components/papers/saspaper'],resolve);
const novackpaper = resolve => require(['../components/papers/novackpaper'],resolve);
const dass21paper = resolve => require(['../components/papers/dass21paper'],resolve);
// 历史记录模块
const scl90history = resolve => require(['../components/data-analyze/scl90history.vue'],resolve);
const sashistory = resolve => require(['../components/data-analyze/sashistory.vue'],resolve);
const dass21history = resolve => require(['../components/data-analyze/dass21history.vue'],resolve);
const novackhistory = resolve => require(['../components/data-analyze/novackhistory.vue'],resolve);
// 个人情况分析
const personalscl90history = resolve => require(['../components/personalresult/personalscl90history.vue'],resolve);
const personalsashistory = resolve => require(['../components/personalresult/personalsashistory.vue'],resolve);
const personaldass21history = resolve => require(['../components/personalresult/personaldass21history.vue'],resolve);
const personalnovackhistory = resolve => require(['../components/personalresult/personalnovackhistory.vue'],resolve);
// 错误url的默认路由
const Error = resolve => require(['../components/Error'],resolve);


// 路由地址配置
export default new Router({
  routes: [
    { // 根目录自动跳转login视图
      path: '/',
      redirect: '/login'
    }, {
      path: '/home',
      component: Home,
      children: [{
        path:'/',
        component: defaultModule
      },{
        path: '/user-register',
        component: Register
      },{
        path:'/admin-info',
        component: adminTable
      },{
        path:'/user-info',
        component: userTable
      },{
        path: '/scl90-paper',
        component: scl90paper
      },{
        path: '/sas-paper',
        component: saspaper
      },{
        path: '/novack-paper',
        component: novackpaper
      },{
        path: '/dass21-paper',
        component: dass21paper
      },{
        path: '/scl90-history',
        name: "scl90历史记录",
        component: scl90history
      },{
        path: '/sas-history',
        name: "sas历史记录",
        component: sashistory
      },{
        path: '/novack-history',
        name: "novack历史记录",
        component: novackhistory
      },{
        path: '/dass21-history',
        name: "dass21历史记录",
        component: dass21history
      },{
        path: '/personal-scl90-paper',
        name: "SCL90症状测试记录",
        component: personalscl90history
      },{
        path: '/personal-sas-paper',
        name: "SAS焦虑测试记录",
        component: personalsashistory
      },{
        path: '/personal-novack-paper',
        name: "Novack愤怒测试记录",
        component: personalnovackhistory
      },{
        path: '/personal-dass21-paper',
        name: "DASS21情绪测试记录",
        component: personaldass21history
      },
      ]
    },
    {
      path: '/login',
      component: Login
    }, {
      path: '*',
      component: Error
    },
  ]
})
