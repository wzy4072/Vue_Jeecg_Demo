<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-03 08:37:07
 * @LastEditTime: 2019-10-12 17:30:04
 * @LastEditors: Please set LastEditors
 -->
<template>

  <draggable
    class="dragArea dragArea-empty"
    @change="log"
    :list="list"
    :group="{ name: 'form-design'}"
  >
    <!-- {{ list }} -->
    <DesignCell
      v-for="(item, i) in $store.state.formDesign.formList"
      :key="i"
      :itemConf="item"
      @syncList="syncList"
      :formAttr="formAttr"
    />
  </draggable>

</template>

<script>
import draggable from 'vuedraggable'
import common from '@/utils/common'

export default {
  props: {
    formAttr: {
      type: Object,
      default: function () {
        return {
          align: 'top',
          size: 'medium',
          labelWidth: 80
        }
      }
    }
  },
  components: {
    // DesignCell,
    draggable
  },
  mounted () {
    window.localStorage.formList = []
    // bus.$on('formDesign.syncList', (list) => {
    //   console.log('list', list)
    //   this.syncList(list)
    // })
  },
  data () {
    return {
      'list': [
      ],
      rules: {
        e878f1c6_3c5c_b1b3_b785_9897b52a904f: [{ required: true, message: '必填项不能为空', trigger: 'blur' }]
      }
    }
  },
  methods: {
    log: function (evt) {
      let newFormList = common.deepClone(this.$store.state.formDesign.formList)
    //   for (let i = 0; i < this.$store.state.formDesign.formList.length; i++) {
    //     const element = this.$store.state.formDesign.formList[i]
    //     if (element.type === 'grid') {
    //       newFormList[i] = common.deepClone(this.$store.state.formDesign.grid[element.key])
    //       console.log('this.$store.state.formDesign.grid', this.$store.state.formDesign.grid)
    //     }
    //   }
    //   console.log('newFormList', common.deepClone(newFormList))

      let conf
      if (evt.added) {
        conf = evt.added.element
        let newIndex = evt.added.newIndex
        // conf.key = common.getGuid()
        conf.name = `code_${common.getGuid2()}`
        newFormList.splice(newIndex, 0, conf)
        this.$store.commit('formDesign/updateShowType', conf.type)
        this.$store.commit('formDesign/updateActiveKey', conf.key)
        // this.$store.commit('formDesign/updateActiveForm', common.deepClone(form))
        this.$store.dispatch('formDesign/setFormList', common.deepClone(newFormList))
        this.syncList(newFormList)
      }
    //   if (evt.moved) {
    //     form = evt.moved.element
    //     // eslint-disable-next-line no-unused-vars
    //     let newIndex = evt.moved.newIndex
    //     // eslint-disable-next-line no-unused-vars
    //     let oldIndex = evt.moved.oldIndex
    //     // 先直接在新位置插入表单，然后旧位置索引+1的位置表单直接减掉
    //     // newFormList.splice(newIndex, 0, form);
    //     // newFormList.splice(oldIndex, oldIndex + 1);
    //     this.$store.commit('formDesign/updateShowType', form.type)
    //     this.$store.commit('formDesign/updateActiveKey', form.key)
    //     this.$store.commit('formDesign/updateActiveForm', common.deepClone(form))
    //     this.$store.dispatch('formDesign/setFormList', common.deepClone(this.list))
    //     this.syncList(newFormList)
    //   }
      // let rules = {};
      // this.$store.state.formDesign.formList.forEach(element => {
      //   rules[element.key] = [{ required: element.options.required, message: '必填项不能为空', trigger: 'blur' }]
      // });
      // console.log("rules", rules);
      // this.$store.commit('formDesign/updateRules', common.deepClone(rules));

      // 处理从外部拖进栅格的表单元素,
    //   if (evt.removed && sessionStorage.outToIn) {
    //     newFormList = newFormList.filter(el => el.key !== evt.removed.element.key)
    //     this.$store.dispatch('formDesign/setFormList', common.deepClone(newFormList))
    //     this.syncList(newFormList)
    //     sessionStorage.removeItem('outToIn')
    //   }
    },
    syncList (value) {
      this.list = common.deepClone(value)
    //   bus.$emit('formMenu.init')
      this.$emit('callBack', value)
    },
    init (value) {
      this.list = value
    //   bus.$emit('formMenu.init')
      this.$store.dispatch('formDesign/setFormList', common.deepClone(value))
    }
  },
  watch: {
    list: {
      handler: function (value) {
        // console.log("watch list", value);
        // let newData = common.deepClone(value);
        // let haveEmptyKey = false;

        // for (let i = 0; i < newData.length; i++) {
        //   const element = newData[i];
        //   if (common.isEmpty(element.key)) {
        //     element.key = common.getGuid();
        //     this.$store.commit("formDesign/updateActiveKey", element.key);
        //     haveEmptyKey = true;
        //   }
        // }

        // if (haveEmptyKey) {
        //   this.list = newData;

        //   this.$store.dispatch('formDesign/setFormList', common.deepClone(newData));
        // }

      },
      deep: true
    }
  },
  filters: {
    labelWidth (value) {
      return `${value}px`
    }
  }
}
</script>

<style lang="css" scoped>
.main {
  width: 100%;
  height: 100%;
  min-height: 500px;
}
.dragArea-empty {
  min-height: 500px;
  margin-bottom: 100px;
}
</style>

