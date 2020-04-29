<template>
  <div>
    <draggable :list="list" :group="{ name: 'form-design'}" @change="log">
      <div class="cell" v-for="(item, i) in list" :key="i">
        {{item.key}}{{item.title}}
        <draItem2 v-if="item.children" :list="item.children"></draItem2>
      </div>
    </draggable>
  </div>
</template>

<script>
import draggable from "vuedraggable";

export default {
  name: "draItem2",
  props: ["list"],
  components: {
    draggable
  },
  data() {
    return {};
  },
  methods: {
    log(evt) {
      console.log(evt);
    }
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