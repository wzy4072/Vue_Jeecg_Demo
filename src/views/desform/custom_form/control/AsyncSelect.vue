<template>
  <!-- <div>
    {{conf.rules}}
    {{conf.name}}
    {{initialValue[conf.name]}}
    <hr />conf.rules
    conf.name
    initialValue[conf.name]
  </div>-->
  <a-select
    :placeholder="conf.placeholder"
    v-decorator="[ conf.name, {rules: conf.rules ,initialValue: initialValue[conf.name]}]"
  >
    <a-select-option v-for="item in options" :key="item.evalue" :value="item.evalue">{{item.ename}}</a-select-option>
  </a-select>
</template>

<script>
import { ajaxGetEnumItems } from "@/api/api";

export default {
  props: {
    conf: {
      type: Object,
      required: true
    },
    initialValue: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      options: []
    };
  },
  mounted() {
    ajaxGetEnumItems({ code: "666" }).then(res => {
      this.options = res.data;
      console.log("this.options", this.options);
    });
  },
  methods: {}
};
</script>
<style scoped>
</style>