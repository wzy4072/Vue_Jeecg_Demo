<template>
  <div class="ant-card ant-card-bordered" style="width: 400px; display:inline-block;margin:30px;vertical-align: top;" >
    <div class="ant-card-head">
      <div class="ant-card-head-wrapper">
        <div class="ant-card-head-title">{{title}}</div>
      </div>
    </div>
    <div class="ant-card-body">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: "卡片标题"
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {}
};
</script>
<style scoped>
</style>