
- 学习本课程前，需要您对HTML CSS JS 浏览器有一定了解。
- 课程着重讲解常用部分，可自行查阅官方文档拓展。
- 教程提供练习指南，可参照教程一步步实操，加深理解和应用。
- 学习目标 1 vue基础  2 使用组件。
=================================================

 # page1 why vue?
- 1 体积小
- 2 数据驱动更友好
- 3 虚拟dom性能更高
- 4 上手更容易
- 5 组件化思想 开发更高效

[中文文档](https://cn.vuejs.org/v2/guide/)
[vue介绍（视频）](https://player.youku.com/embed/XMzMwMTYyODMyNA==?autoplay=true&client_id=37ae6144009e277d)
[官方教程（视频）](https://learning.dcloud.io/#/?vid=0)

# page2 基础部分

> 第一个vue应用 

HelloVue.html
```
<!--html-->
<div id="app">
  {{ message }}
</div>
```
```
// js
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
 -  **先声明再使用**
> v-model

vModel.html
在表单 <input>、<textarea> 及 <select> 元素上创建双向数据绑定。它会根据控件类型自动选取正确的方法来更新元素。


> 模版语法

template.html
```
        <!-- 表达式 -->
        <span> Message: {{ msg }}</span>
        <!-- html -->
        <span v-html="rawHtml"></span>
        <!-- 属性绑定 -->
        <div v-bind:id="dynamicId"></div>
        <!-- 表达式 -->
        <h4>{{ number + 1 }}</h4>
        <h4> {{ ok ? 'YES' : 'NO' }}</h4>
        <h4>{{ message.split('').reverse().join('') }}</h4>
```
>指令

vCommand.html
```
     <h2> v-if </h2>
<div v-if="isTrue">v-if isTrue :{{isTrue}}</div>
<h4 v-if="num == 1">step one!</h4>
<h4 v-else-if="num == 2">step two!</h4>
<h4 v-else>step three!</h4>

     <h2> v-show </h2>
<div v-show="isShow">v-show isShow :{{isShow}}</div>
       
     <h2> v-for </h2>
<ul>
   <li v-for="v in 3">{{ v }} </li>
</ul>
<ul>
   <li v-for="(item,index) in items">{{index}}:{{ item.message }}</li>
</ul>
<ul>
   <li v-for="(value,key) in userInfo">{{ key }}:{{value}}</li>
 </ul>

        <h2>v-bind</h2>
        <!-- 含参指令 -->
<div v-bind:id="bindInfo.id">class text ID</div>
<div v-bind:title="'这是一句提示语'">class text title2</div>
<a :href="bdHref">百度一下</a>
<div v-bind:class="['red','weight',fSize]">class text</div>
<div v-bind:class="{ active: isActive ,fSize:true}">class text</div>


        <h2>v-on</h2>
<button v-on:click="btnValue--"> -- </button>
<button v-on:click="say('hi')">Say hi</button>
<button v-on:click="warn('Form', $event)">Submit</button>
```
缩写
```
<!-- 完整语法 -->
<a v-bind:href="url">...</a>
<!-- 缩写 -->
<a :href="url">...</a>

<!-- 完整语法 -->
<a v-on:click="doSomething">...</a>
<!-- 缩写 -->
<a @click="doSomething">...</a>

```
> computed & watch & method

computedAndWatch

- computed: 运算复杂 多次调用 多个依赖
- watch: 单一依赖
- method: 针对性
- 表达式：简单计算
- 自定义修饰符：特定常用事件（了解）
// 这里做演示 比较

> this.$set() 

*不常用 需要避免*
1 当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue
2 当你修改数组的长度时，例如：vm.items.length = newLength
3 **Vue 不能检测对象属性的添加或删除** 
演示

> v-on

1 行内表达式
2 行内箭头函数
3 一般调用
4 传参调用
5 event //输出按键码


# page3 组件部分











1 前端


