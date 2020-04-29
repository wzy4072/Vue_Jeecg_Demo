<template>
  <a-row class="conf-cell cell-row">
    <draggable :list="itemConf.list" :group="{ name: 'form-design' }">
      <Dragcell v-for="(item, i) in itemConf.list" :key="i" :itemConf="item"></Dragcell>
    </draggable>
  </a-row>
</template>

<script>
import draggable from "vuedraggable";
export default {
    name:'Dsrow',
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
