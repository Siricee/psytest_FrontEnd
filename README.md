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

---

#### 统计

graph library: v-charts

##### 历史记录（管理）

4套卷:

- 表格：具体数据：详情为该测试者的详细信息,点击查看该用户信息+历史测试记录
- 雷达图：显示平均-常模-正常线的分布
  - dass21: 3个指标的雷达图
- 同心饼图：性别、是否已婚对测试指标的影响
- 柱状图:各年龄段的指标分层
- 环图: 收入对指标的影响
- 热力图：地区分布。

##### 历史记录（个人），与管理人员的组件可复用，api不一样。

- 历史数据表，标注危险值。
- 折线图
