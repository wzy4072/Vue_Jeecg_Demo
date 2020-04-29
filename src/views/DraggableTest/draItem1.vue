<template>
  <div>
    <draggable :list="list1" :group="{ name: 'form-design', pull: 'clone', put: false }">
      <div class="cell" v-for="(item, i) in list1" :key="i">{{item.key}}{{item.title}}</div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  components: {
    draggable
  },
  data() {
    return {
      list1: [
        {
          title: "单行文本",
          type: "input",
          icon: "danhangwenben",
          value: "",
          code: "",
          key: ""
        },
        {
          title: "多行文本",
          type: "textarea",
          icon: "duohangwenben",
          value: "",
          code: "",
          key: ""
        },
        {
          title: "数字文本框",
          type: "number",
          icon: "jishubiaoqian",
          value: "",
          code: "",
          key: ""
        },
        {
          title: "单选框组",
          type: "radio",
          icon: "danxuankuang",
          value: "",
          code: "",

          key: ""
        },
        {
          title: "多选框组",
          type: "checkbox",
          icon: "xialaxuanze",
          value: "",
          code: "",
          key: ""
        },
        {
          title: "时间选择器",
          type: "datetime",
          icon: "shijianxuanzeqi",
          value: "",
          code: "",
          key: ""
        },
        {
          title: "下拉选择框",
          type: "select",
          icon: "xialaxuanze",
          value: "",
          code: "",
          key: ""
        },
        {
          title: "开关",
          type: "switch",
          icon: "kaiguan",
          value: false,
          code: "",
          key: ""
        }
      ]
    };
  }
};
</script>

<style>
</style>
<style scoped>
.cell {
  cursor: move;
  float: left;
  height: 30px;
  line-height: 30px;
  width: 100px;
  background-color: #ecf5ff;
  margin: 0 10px 10px 0;
}
</style>