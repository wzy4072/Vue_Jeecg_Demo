<template>
  <a-select
    :showSearch="conf.showSearch"
    :defaultValue="value"
    :showArrow="conf.showArrow"
    :filterOption="false"
    @search="handleSearch"
    @change="handleChange"
  >
    <a-spin v-if="fetching" slot="notFoundContent" size="small" />
    <!-- <div slot="notFoundContent">{{options}}</div> -->
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
      options: [],
      backUpOptions: [],
      fetching: false
    };
  },
  mounted() {
    ajaxGetEnumItems({ code: this.conf.selectOptionEnumCode }).then(res => {
      if (this.conf.showSearch) {
        this.backUpOptions = res.data;
        if (this.value) {
          for (let i = 0; i < this.backUpOptions.length; i++) {
            if (this.backUpOptions[i].evalue === this.value) {
              this.options = [this.backUpOptions[i]];
              break;
            }
          }
        }
      } else {
        this.options = res.data;
      }
    });
  },
  methods: {
    handleChange(v) {
      // console.log("AsyncSelect change ->",v);
      this.$emit("change", v);
    },
    handleSearch(v) {
      // filterOption:false 不能少
      this.options = [];
      this.fetching = true;
      let filterResult = [];
      for (let i = 0; i < this.backUpOptions.length; i++) {
        let option = this.backUpOptions[i];
        if (option.ename.indexOf(v) > -1) {
          filterResult.push(option);
          if (filterResult.length > 15) break;
        }
      }
      setTimeout(() => {
        this.fetching = false;
        this.options = filterResult;
      }, 100);
    }
  }
};
</script>
<style scoped>
</style>