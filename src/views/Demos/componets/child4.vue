<template>
  <div style="border:1px solid #ccc;">
    <a-input v-model="baseInfo.name" style="width:200px;"></a-input>
    <a-button @click="emitResult()">emit to parent</a-button>
  </div>
</template>
<script>
export default {
  props: {
    id: {
      type: [String, Number],
      required: true
    }
  },
  data() {
    return {
      baseInfo: {
        name: null
      }
    };
  },
  created() {
    this.baseInfo = this.getBaseInfoById();
  },
  methods: {
    // 模拟后台请求返回值
    getBaseInfoById() {
      return {
        name: "tom"
      };
    },
    emitResult() {
      this.$emit("getData666", this.baseInfo);
    }
  }
};
</script>

<style scoped>
@import "./demo.css";
</style>