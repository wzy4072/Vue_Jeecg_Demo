<template>
  <div class="demo-child">
    {{title}}
  </div>
</template>
<script>
// 演示 单向数据流
//父级 prop 的更新会向下流动到子组件中，但是反过来则不行
// 对象类型稍特殊 应该子组件内部复制之后进行调用（仅仅作为展示则不需要复制）
// https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81
export default {
  props: ["title"],
  data() {
    return {
      value: "child Value"
    };
  },
  methods: {
  
  }
};
</script>
<style scoped>
@import "./demo.css";
</style>