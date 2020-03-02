<template>
  <div class="date-1">
    <table cellspacing="0" role="grid" class="ant-calendar-table">
      <thead>
        <tr role="row">
          <th role="columnheader" title="周一" class="ant-calendar-column-header">
            <span class="ant-calendar-column-header-inner">一</span>
          </th>
          <th role="columnheader" title="周二" class="ant-calendar-column-header">
            <span class="ant-calendar-column-header-inner">二</span>
          </th>
          <th role="columnheader" title="周三" class="ant-calendar-column-header">
            <span class="ant-calendar-column-header-inner">三</span>
          </th>
          <th role="columnheader" title="周四" class="ant-calendar-column-header">
            <span class="ant-calendar-column-header-inner">四</span>
          </th>
          <th role="columnheader" title="周五" class="ant-calendar-column-header">
            <span class="ant-calendar-column-header-inner">五</span>
          </th>
          <th role="columnheader" title="周六" class="ant-calendar-column-header">
            <span class="ant-calendar-column-header-inner">六</span>
          </th>
          <th role="columnheader" title="周日" class="ant-calendar-column-header">
            <span class="ant-calendar-column-header-inner">日</span>
          </th>
        </tr>
      </thead>
      <tbody class="ant-calendar-tbody">
        <tr role="row" v-for="i in 6" :key="i">
          <td
            role="gridcell"
            v-for="j in 7"
            :key="j"
            :title="`2020年3月${i*7+j}日`"
            class="ant-calendar-cell"
            :class="{'ant-calendar-today':i*7-7+j == todayNum}"
            @click="getClickDate(i*7-7+j)"
          >
            <div class="ant-calendar-date">{{i*7-7+j}}</div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
// 演示 单向数据流
//父级 prop 的更新会向下流动到子组件中，但是反过来则不行
// 对象类型稍特殊 应该子组件内部复制之后进行调用（仅仅作为展示则不需要复制）
// https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81
export default {
  props: ["title"],
  data() {
    return {
      value: "child Value",
      todayNum: 15
    };
  },
  methods: {
    getClickDate(d) {
      // console.log("日期组件获取日期：", d);
      this.$emit("getDate", d);
    },
    changeToday(v) {
      this.todayNum = v;
    }
  }
};
</script>
<style scoped>
</style>