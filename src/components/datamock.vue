<template>

</template>

<script>

  export default {
    name: "datamock",

    computed() {
      created()
      {
        Vue.prototype.$http.get('http://localhost/user')
          .then(res => {
            console.log(res.data);
            this.msg = res.data.name;
            console.log(this.msg)
          })
      }
    }

  }


  // 输出结果
  // console.log(JSON.stringify(data, null, 4))
</script>

<style scoped>

</style>
