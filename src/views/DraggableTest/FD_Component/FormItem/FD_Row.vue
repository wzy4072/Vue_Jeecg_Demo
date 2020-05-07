<template>
  <a-row>
    <a-col
      v-for="(item, i) in itemConf.list"
      :key="item.key"
      :span="item.span"
      :style="{ width: getWidth(item) }"
      class="conf-cell cell-col"
      @click.stop="activeCell(item)"

    >
      <draggable :list="item.list" :group="{ name: 'form-design' }">
        <DesignCell
          v-for="(ChildItem) in item.list"
          :key="ChildItem.key"
          :itemConf="ChildItem"
        ></DesignCell>
      </draggable>
    </a-col>
  </a-row>
</template>

<script>
import common from '@/utils/common'

export default {
  props: {
    itemConf: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {}
  },
  methods: {
    getWidth(conf) {
      let wValue = (conf.span / 24) * 100 + '%'
      return wValue
    },
     activeCell(itemConf) {
      //   bus.$emit('update.activeName', '1')
      this.$store.commit('formDesign/updateActiveKey', itemConf.key)
      this.$store.commit('formDesign/updateShowType', itemConf.type)
      this.$store.commit(
        'formDesign/updateActiveForm',
        common.deepClone(itemConf)
      )
    //   console.log('activeCell:key', itemConf.key)
    }
  },
}
</script>
