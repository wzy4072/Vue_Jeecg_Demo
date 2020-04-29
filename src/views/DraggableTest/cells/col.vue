<template>
  <a-col class="conf-cell cell-col" :style="{width:getWidth()}">
    <div class="cell-subtitle">{{ itemConf.label }}</div>
    <draggable :list="itemConf.list" :group="{ name: 'form-design' }">
      <Dragcell v-for="(item, i) in itemConf.list" :key="i" :itemConf="item"></Dragcell>
    </draggable>
  </a-col>
</template>

<script>
import draggable from "vuedraggable";
export default {
  props: {
    itemConf: {
      type: Object,
      required: true
    }
  },
  components: {
    draggable,
  },
  data() {
    return {};
  },
  methods: {
    getWidth() {
      return (this.itemConf.span / 24) * 100 + "%";
    }
  }
};
</script>
