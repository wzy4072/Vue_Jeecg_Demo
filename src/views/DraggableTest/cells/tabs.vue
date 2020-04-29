<template>
  <a-tabs class="conf-cell cell-tabs">
    {{ itemConf.label }}
    <draggable :list="itemConf.list" :group="{ name: 'form-design' }">
      <Dragcell v-for="(item, i) in itemConf.list" :key="i" :itemConf="item"></Dragcell>
    </draggable>
  </a-tabs>
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
  }
};
</script>
