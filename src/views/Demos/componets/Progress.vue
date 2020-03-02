<template>
  <div class="ant-progress-outer">
    <div class="ant-progress-inner">
      <div class="ant-progress-bg" :style="{width:`${num}%`}"></div>
    </div>
    {{ num }}%
  </div>
</template>
<script>
export default {
  props: ["num"],
  data() {
    return {};
  }
};
</script>

<style scoped>
.ant-progress-inner {
  position: relative;
  display: inline-block;
  width: 100%;
  vertical-align: middle;
  background-color: #efefef;
  border-radius: 100px;
  overflow: hidden;
}
.ant-progress-bg {
  position: relative;
  background-color: #1890ff;
  transition: all 0.4s cubic-bezier(0.08, 0.82, 0.17, 1) 0s;
  height: 8px;
  border-radius: 100px;
}
</style>