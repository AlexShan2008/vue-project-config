<template>
 <div>
  <h1>{{msg}}</h1>
   <router-link to="/home">To Home</router-link>
   <button @click="show">notify</button>
 </div>
</template>

<script>
export default {
  data() {
    return {
      msg: 'Profile'
    };
  },
  methods: {
    show(){
      this.$notify('我是弹窗',{delay:1000});
    }
  },
  components: {}
};
</script>

<style lang='scss' scoped>
</style>
