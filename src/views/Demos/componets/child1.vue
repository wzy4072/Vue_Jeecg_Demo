<template>
  <div class="logo-wrap">
    <a-icon type="github" class="logo-icon" />
    <span class="logo-name">github</span>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
<style scoped>
/* @import "./demo.css"; */
.logo-wrap {
  width: 150px;
  height: 80px;
  line-height: 80px;
  border-radius: 8px;
  text-align: center;
  box-shadow: 1px 1px 6px 3px #ddd;
  display: inline-block;
  margin: 20px;
}
.logo-icon {
  font-size: 20px;
  margin-right: 8px;
}
.logo-name {
  font-size: 20px;
}
</style>