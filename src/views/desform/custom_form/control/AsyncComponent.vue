<template>
  <component :is="conf.type" :conf="conf" :value="value" @change="handleChange"></component>
</template>

<script>
import AsyncSelect from "./AsyncSelect";
export default {
  props: {
    conf: {
      type: Object,
      required: true
    },
    value: {
      type: String,
      required: false,
      default: null
    }
  },
  components: {
    AsyncSelect
  },
  data() {
    return {};
  },
  created() {},
  methods: {
    handleChange(v) {
      this.$emit("change", v);
    }
  }
};
</script>
<style scoped>
</style>