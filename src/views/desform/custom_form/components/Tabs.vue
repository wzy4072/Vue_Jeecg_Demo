<template>
  <a-tabs @change="tabChange">
    <a-tab-pane v-for="(tab) in conf.panes" :key="tab.name" :tab="tab.label">
      <renders
        v-for="(element,index) in tab.list"
        :key="element.type + index"
        :index="index"
        :conf="element"
        :initialValue="initialValue"
        @change="val => handleChangeVal(val,element)"
        :sortableItem="tab.list"
        :params="params"
      ></renders>
    </a-tab-pane>
  </a-tabs>
</template>

<script>
export default {
  props: ["conf", "initialValue", "params"],
  data() {
    return {};
  },
  mounted() {},
  methods: {
    handleChangeVal(v, e) {
      this.$emit("change", v);
    },
    tabChange(key) {
      // console.log(key);
    }
  }
};
</script>
<style scoped>
</style>