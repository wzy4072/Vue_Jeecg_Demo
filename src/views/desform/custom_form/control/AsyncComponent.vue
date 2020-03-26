<template>
  <component :is="conf.type" :conf="conf" :initialValue="initialValue"></component>
</template>

<script>
import AsyncSelect from "./AsyncSelect";
export default {
  props: {
    conf: {
      type: Object,
      required: true
    },
    initialValue: {
      type: Object,
      default: () => ({})
    }
  },
  components: {
    AsyncSelect
  },
  data() {
    return {};
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
</style>