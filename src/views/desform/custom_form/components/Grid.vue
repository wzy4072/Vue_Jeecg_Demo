<template>
  <a-row>
    <a-col v-for="(col,index) in conf.list" :key="index" :span="col.span">
      <renders
        v-for="(element,index) in col.list"
        :key="element.type + index"
        :index="index"
        :conf="element"
        :initialValue="initialValue"
        @change="val => handleChangeVal(val,element)"
        :sortableItem="col.list"
        :params="params"
      ></renders>
    </a-col>
  </a-row>
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
      // console.log('Grid', v, e);
      this.$emit('change', v)
    }
  }
};
</script>
<style scoped>
</style>