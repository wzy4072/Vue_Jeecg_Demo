<script>
import row from './row'
import col from './col'
import tabs from './tabs'
import pane from './pane'
import input from './input'

// let list1 = [
//   {
//     title: "单行文本",
//     type: "input",
//     icon: "danhangwenben",
//     value: "",
//     code: "",
//     key: ""
//   },
//   {
//     title: "多行文本",
//     type: "textarea",
//     icon: "duohangwenben",
//     value: "",
//     code: "",
//     key: ""
//   },
//   {
//     title: "数字文本框",
//     type: "number",
//     icon: "jishubiaoqian",
//     value: "",
//     code: "",
//     key: ""
//   },
//   {
//     title: "单选框组",
//     type: "radio",
//     icon: "danxuankuang",
//     value: "",
//     code: "",

//     key: ""
//   },
//   {
//     title: "多选框组",
//     type: "checkbox",
//     icon: "xialaxuanze",
//     value: "",
//     code: "",
//     key: ""
//   },
//   {
//     title: "时间选择器",
//     type: "datetime",
//     icon: "shijianxuanzeqi",
//     value: "",
//     code: "",
//     key: ""
//   },
//   {
//     title: "下拉选择框",
//     type: "select",
//     icon: "xialaxuanze",
//     value: "",
//     code: "",
//     key: ""
//   },
//   {
//     title: "开关",
//     type: "switch",
//     icon: "kaiguan",
//     value: false,
//     code: "",
//     key: ""
//   }
// ];

export default {
  name: 'Dragcell',
  props: {
    itemConf: {
      type: Object,
      required: true,
    },
  },
  components: {
    dsrow: row,
    dscol: col,
    dstabs: tabs,
    dspane: pane,
    dsinput: input,
  },
  data() {
    return {}
  },
  methods: {
    clickHandler() {
      console.log('select')
    },
    dbclickHandler() {
      console.log('openDialog')
    },
  },
  render(r) {
    // return <div>{this.itemConf.type}</div>;
    // console.log("this.itemConf.type", this.itemConf.type);
    return r(this.itemConf.type, {
      props: {
        itemConf: this.itemConf,
      },
      on: {
        click: this.clickHandler,
        dbclick: this.dbclickHandler,
      },
    })
  },
}
</script>

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
