# 本项目毕设自用。

> A Vue.js project

##### 调试注意

Chrome中`localhost:8081/api`报错404、500实际是8080端口错误信息。因为proxy已经全局代理了接口跨域。

LocalStorage取出的是字符串，需要手动转换为json使用。

#### 页面逻辑

进入之后router自动替换路由到login。login登录成功后替换为Home组件，进行container分栏布局。

continer分为header,asider,main部分。

header为登录信息栏，asider为菜单栏，main为数据显示部分。

main 在答卷模块渲染data中题目名，v-for生成table的td列。

main 在数据分析模块渲染为echarts模块。

#### 复用性

登录之后修改个人信息与注册页面是一样的

#### 登录信息存储

采用localstorage存储用户信息，id, username, password, authority
