<template>
  <a-row class="cell-item">
    <a-col
      :span="itemConf.labelCol.span || 6"
      class="t-align-r label-mock"
    >{{ itemConf.label }}:</a-col
    >
    <a-col :span="itemConf.wrapperCol.span || 12" class="prop-mock">
      {{ itemConf.type }}&nbsp;{{ itemConf.key }}
    </a-col>
  </a-row>
</template>

<script>
export default {
  props: {
    itemConf: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
}
</script>
<style scoped>
.t-align-r {
  text-align: right;
  padding-right: 6px;
  height: 32px;
  overflow: hidden;
  line-height: 32px;
}
.prop-mock {
  height: 32px;
  overflow: hidden;
  line-height: 32px;
}
</style>
