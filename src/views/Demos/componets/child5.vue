<template>
  <div class="c-wrap">
    <p class="card-name">假装这里是一个规矩的银行卡</p>
    <p class="card-cardno">6666 666 66666 6666 66</p>
    <div class="slot-wrap">
      <slot>

      </slot>
    </div>
  </div>
</template>
<script>
// 演示 一般的编辑封装
export default {
  data() {
    return {
    };
  },
  created() {},
  methods: {}
};
</script>
<style scoped>
.c-wrap {
  width: 600px;
  height: 200px;
  border-radius: 20px;
  padding: 40px;
  border: 2px solid yellowgreen;
  margin: 20px;
  text-align: center;
}
p.card-name {
  color: #ccc;
  font-size: 30px;
}
p.card-cardno {
  font-size: 22px;
  text-align: left;
  letter-spacing: 2px;
  padding-left: 20px;
  margin: 16px;
}
.slot-wrap {
  width: 200px;
  background-color: #fc1;
  height: 38px;
  float: right;
}
</style>