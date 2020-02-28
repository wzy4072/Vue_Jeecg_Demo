<template>
  <div class="c-wrap">
    i am child 6 
    {{info.age}}----------------
    <slot v-bind:userName="info.name"></slot>
  </div>
</template>
<script>
// 演示 一般的编辑封装
export default {
  props: ['info'],
  data() {
    return {}
  },
  created() {},
  methods: {}
}
</script>
<style scoped>
.c-wrap {
  width: 300px;
  border: 2px solid limegreen;
  margin: 20px;
  text-align: center;
}
</style>