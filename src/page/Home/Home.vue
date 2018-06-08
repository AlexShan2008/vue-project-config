<template>
 <div>
   <h1>{{t}}</h1>
   <p>{{content}}</p>
   <router-link to="/profile">To Profile</router-link>
 </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  name: "Home",
  data() {
    return {};
  },
  methods: {
    ...mapMutations([
      'increment', // 将 `this.increment()` 映射为 `this.$store.commit('increment')`
    ]),
  },
  components: {

  },
  computed: mapState({
    t: state => state.title,
    content: state => state.content,
  })
};
</script>

<style lang='scss' scoped>
</style>
