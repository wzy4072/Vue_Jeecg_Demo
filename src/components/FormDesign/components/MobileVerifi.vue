<template>
  <a-row>
    <a-col :span="12">
      <a-input
        v-model="phoneNumber"
        :placeholder="conf.placeholder === undefined ? ('请输入' + conf.label) : conf.placeholder"
        :disabled="conf.disabled"
        :allowClear="conf.allowClear"
      ></a-input>
    </a-col>
    <a-col :span="10">
      <a-button
        type="primery"
        @click="countDown"
        :disabled="!canClick"
        style="float: right;margin-top: 4px;"
      >
        <span>{{ canClick ? '发送验证码' : `(${totalTime})秒后重发` }}</span>
      </a-button>
    </a-col>
  </a-row>
</template>

<script>
import { getAction } from "@/api/manage";
import designUtil from "@/components/FormDesign/util";

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
    },
    params: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      phoneNumber: this.value,
      canClick: true,
      totalTime: this.conf.countOption.time
    };
  },
  mounted() {},
  methods: {
    countDown() {
      if (!this.canClick) return;
      //   if (!this.phoneNumber) {
      //     console.error("请填写手机号！");
      //     return;
      //   }
      //   if (!/^[1][3,4,5,7,8][0-9]{9}$/.test(this.phoneNumber)) {
      //     console.error("手机号有误！");
      //     return;
      //   }
      let callBacks = designUtil.parseFunJson(this.conf.countOption.callBack);

      // JSON.parse(this.conf.countOption.callBack, function(
      //   k,
      //   v
      // ) {
      //   if (v.indexOf && v.indexOf("function") > -1) {
      //     return eval("(function(){return " + v + " })()");
      //   }
      //   return v;
      // });

      let param = callBacks.getParams(this.phoneNumber, this.params);
      getAction(this.conf.countOption.url, param).then(res => {
        if (res.code != 200) {
          this.$message.error(res.message);
        } else {
          this.$message.success("发送验证码成功！");
        }
      });
      this.canClick = false;
      let clock = window.setInterval(() => {
        this.totalTime--;
        if (this.totalTime == 0) {
          window.clearInterval(clock);
          this.totalTime = this.conf.countOption.time;
          this.canClick = true; //这里重新开启
        }
      }, 1000);
    }
  }
};
</script>
<style scoped>
</style>