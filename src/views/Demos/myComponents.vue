<template>
  <div id="page-mycom">
    <h1>1级难度</h1>

    <child-one></child-one>
    <child-one></child-one>
    <child-one></child-one>

    <br />

    <h1>2级难度</h1>

    <div style="width:500px;">
      <Progress :num="30"></Progress>
      <Progress :num="40"></Progress>
      <Progress :num="80"></Progress>
    </div>
    <br />
    <br />
    <i>
      <a
        href="https://cn.vuejs.org/v2/guide/components-props.html#Prop-%E9%AA%8C%E8%AF%81"
      >各种props类型</a>
    </i>
    <br />
    <br />

    <h1>3级难度</h1>

    <child-three @getDate="getDateByChild3" ref="c3"></child-three>

    <br />
    <br />

    <i>
      <b>常用通信第二种方式</b>
    </i>
    <a-button @click="settoday">修改日历</a-button>
    <br />
    <br />

    <h1>4级难度 插槽</h1>

    <c4>
      <div>
        来 左边 跟我一起画个龙
        在你右边 画一道彩虹（走起）
        来 左边 跟我一起画彩虹
        在你右边 再画个龙（别停）
        在你胸口上比划一个郭富城
      </div>
      <img src="./staticVue/001.jpg" alt style="width:200px;" />
    </c4>
    <!-- <c4 title="刑部尚书">
      <img src="./staticVue/002.png" alt />
      <h2>一个友善的脑瓜崩~</h2>
    </c4>-->
    <c4 title="放一个组件">
      <child-one></child-one>
    </c4>

    <h1>5级难度 带值插槽</h1>

    <i>
      <b>
        有一个已经封装的公司人员表，只需要简简单单传入部门id即可展示，默认都是普通文本渲染，
        但是我现在有一个特殊的需求，每个年龄段都要特殊标记,但是父组件只知道部门id，具体信息在子组件内部。
      </b>
    </i>
    <c5 :id="2" style="width:700px;">
      <template v-slot:default="{record,index}">
        <a-tag :color="getColor(record.age)">{{record.age}}</a-tag>
      </template>
    </c5>

    <h1>生命周期</h1>

    <life-circle :id="randomNum" ref="lifeCircle" v-if="showCircle"></life-circle>
    <br />
    <a-button @click="showCircle = !showCircle">toogle lifeCircle</a-button>&nbsp;
    <a-button @click="$refs.lifeCircle.changeMessage(parseInt(Math.random()*100))">change message</a-button>
  </div>
</template>

<script>
import ChildOne from "./componets/child1";
import Progress from "./componets/Progress";
import childThree from "./componets/child3";
import c4 from "./componets/child4";
import c5 from "./componets/child5";

var obj ={}
import LifeCircle from "./componets/lifeCircle";
export default {
  components: {
    ChildOne: ChildOne,
    Progress,
    childThree,
    c4,
    c5,
    LifeCircle
  },
  data() {
    return {
      name: "demo3",
      title: "hello",
      today: 20,
      userList: [
        { name: "tom", age: 12 },
        { name: "lilei", age: 8 },
        { name: "gerry", age: 6 },
        { name: "stephon", age: 7 }
      ],
      randomNum: 3,
      showCircle: false
    };
  },
  methods: {
    getColor(age) {
      let colorVal = "";
      if (age > 40) {
        colorVal = "#108ee9";
      }
      if (age > 30 && age < 40) {
        colorVal = "#87d068";
      }
      if (18 < age && age < 30) {
        colorVal = "#2db7f5";
      }
      if (age <= 18) {
        colorVal = "#f50";
      }
      return colorVal;
    },
    settoday() {
      this.today = this.today > 30 ? 1 : this.today + 1;
      this.$refs.c3.changeToday(this.today);
    },
    getDateByChild3(v) {
      // getTableDataByDate(v)
      console.log("父组件活得子组件的信号，参数是：", v);
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