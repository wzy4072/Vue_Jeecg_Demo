<template>
  <div id="page-mycom">
    <h1>1级难度</h1>

    <cld-com1></cld-com1>
    <cld-com1></cld-com1>
    <cld-com1></cld-com1>

    <div>一处开发多处使用 一处修改全局生效</div>
    <br />

    <h1>2级难度</h1>
    <c3 :title="title"></c3>
    <c3 title="大大大"></c3>
    <c3 :title="1+1"></c3>

    this is parent title:{{title}}
    // 不要求会封装，但是必须能看懂
    // 演示各种props类型 https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81
    <h1>3级难度 抛事件</h1>
// 比如详情展示功能，传入id 查询详情并展示
    <c4 :id="666" @getData666="getChildData"></c4>

    <h1>4级难度 插槽</h1>

    <c5>在这里不要客气</c5>
    <c5>做你想做的 任何事</c5>
    <!-- 父级模板里的所有内容都是在父级作用域中编译的；子模板里的所有内容都是在子作用域中编译的。 -->
    <c5>
      <cld-com1></cld-com1>
    </c5>

    <h1>5级难度 带值插槽</h1>
    <div v-for="(info,idx) in userList" :key="idx">
      <c6 :info="info">
        <template v-slot:default="{userName}">{{userName}}</template>
      </c6>
    </div>

  </div>
</template>

<script>
import cldCom1 from "./componets/child1";
import cldCom3 from "./componets/child3";
import c4 from "./componets/child4";
import c5 from "./componets/child5";
import c6 from "./componets/child6";

export default {
  components: {
    cldCom1: cldCom1,
    c3: cldCom3,
    c4,
    c5,
    c6
  },
  data() {
    return {
      name: "demo3",
      title: "hello",
      userList: [
        { name: "tom", age: 12 },
        { name: "lilei", age: 8 },
        { name: "gerry", age: 6 },
        { name: "stephon", age: 7 }
      ]
    };
  },
  methods: {
    getChildData(info) {
      console.log("parent page log:", JSON.stringify(info));
    }
  }
};
</script>
<style scoped>
#page-mycom {
  background-color: #fff;
  padding: 30px;
}
</style>