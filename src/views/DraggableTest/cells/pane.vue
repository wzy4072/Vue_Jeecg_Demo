<template>
  <a-tab-pane class="conf-cell cell-tab-pane">
    {{ itemConf.label }}
    <draggable :list="itemConf.list" :group="{ name: 'form-design' }">
      <Dragcell v-for="(item, i) in itemConf.list" :key="i" :itemConf="item"></Dragcell>
    </draggable>
  </a-tab-pane>
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
    draggable
  },
  data() {
    return {};
  }
};
</script>
