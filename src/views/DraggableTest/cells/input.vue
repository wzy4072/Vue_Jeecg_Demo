<template>
  <a-row class="cell-item">
    <a-col :span="6" class="t-align-r">{{ itemConf.label }}</a-col>
    <a-col :span="12"><a-input :placeholder="itemConf.placeholder"></a-input></a-col>
  </a-row>
</template>

<script>
export default {
  props: {
    itemConf: {
      type: Object,
      required: true
    }
  },
  data() {
    return {};
  }
};
</script>
