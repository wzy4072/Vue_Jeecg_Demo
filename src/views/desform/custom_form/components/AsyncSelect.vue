<template>
  <a-select @change="handleChange" :defaultValue="value">
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
    value: {
      type: String,
      required: false,
      default: null
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
  methods: {
    handleChange(v) {
      this.$emit("change", v);
    }
  }
};
</script>
<style scoped>
</style>