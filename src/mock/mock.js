import Mock from 'mockjs' // es6语法引入mock模块

export default Mock.mock('http://localhost/user', { // 输出数据

  'name': '@name', // 随机生成姓名

  'age|1-10': 5

  // 其他数据
})
