<template>
  <div
    class="cell"
    :class="{
      'cell-active': itemConf.key === $store.state.formDesign.activeKey,
    }"
    @click.stop="activeCell"
  >
    <!-- <div>
       <a-form-item :label="itemConf.title">
        <a-input
          :placeholder="itemConf.options.placeholder"
          :disabled="itemConf.options.disabled"
          :readonly="true"
          :style="{ width: itemConf.options.width }"
          v-decorator="[
            itemConf.key,
            { rules: [{ required: true, message: 'Please input your note!' }] },
          ]"
        />
      </a-form-item> 
    </div>-->
    <component :is="'fd' + itemConf.type" :itemConf="itemConf"></component>
    <!-- {{ itemConf }} -->
    <i
      class="action-copy"
      title="复制"
      v-show="itemConf.key === $store.state.formDesign.activeKey"
      @click="copyForm"
    ></i>
    <i
      class="action-delete"
      title="删除"
      v-show="itemConf.key === $store.state.formDesign.activeKey"
      @click="deleteForm"
    ></i>
  </div>
</template>

<script>
import common from '@/utils/common'
// import FDGridPanel from '@/components/form-design/FDGridPanel'
// import bus from '@/utils/bus'
import fdinput from './FormItem/FD_Input'
import fdtitle from './FormItem/FD_Title'
import fdselect from './FormItem/FD_Select'
import fdrow from './FormItem/FD_Row'
function recurrence(list, key) {
  if (!list || list.length === 0) return []
  let nList = []
  list.map((item) => {
    item.list = recurrence(item.list, key)
    if (item.key !== key) nList.push(item)
  })
  return nList
}
export default {
  name: 'DesignCell',
  components: {
    fdgrid: fdrow,
    fdtitle: fdtitle,
    fdinput: fdtitle,
    fdselect: fdtitle,
  },
  props: {
    formAttr: {
      type: Object,
      default: function() {
        return {
          align: 'top',
          size: 'medium',
          labelWidth: 80,
        }
      },
    },
    itemConf: {
      type: Object,
      default: function() {
        return {
          type: '',
          name: '',
          code: '',
          options: {
            width: '100%',
            defaultValue: '',
            required: false,
            dataType: 'string',
            placeholder: '',
          },
          key: '1556775967000_4898',
        }
      },
    },
  },
  methods: {
    copyForm() {
      let formList = common.deepClone(this.$store.state.formDesign.formList)

      let newIndex
      for (let i = 0; i < formList.length; i++) {
        const element = formList[i]
        if (element.key === this.itemConf.key) {
          newIndex = i
          break
        }
      }
      let copyForm = common.deepClone(formList[newIndex])
      copyForm.key = common.getGuid()
      copyForm.name = `code_${common.getGuid2()}`
      formList.splice(newIndex + 1, 0, copyForm)
      this.$store.commit(
        'formDesign/updateActiveForm',
        common.deepClone(copyForm)
      )
      this.$store.commit('formDesign/updateActiveKey', copyForm.key)
      this.$emit('syncList', formList)
      this.$store.dispatch('formDesign/setFormList', formList)
    },
    deleteForm() {
      let formList = common.deepClone(this.$store.state.formDesign.formList)
      //   let newIndex
      formList = recurrence(formList, this.itemConf.key)
      //   for (let i = 0; i < formList.length; i++) {
      //     const element = formList[i]
      //     if (element.key === this.itemConf.key) {
      //       newIndex = i
      //       break
      //     }
      //   }
      //   formList.splice(newIndex, 1)

      this.$emit('syncList', formList)
      this.$store.dispatch('formDesign/setFormList', common.deepClone(formList))

      //   if (newIndex !== 0) {
      //     this.$store.commit(
      //       'formDesign/updateActiveKey',
      //       formList[newIndex - 1].key
      //     )
      //     this.$store.commit(
      //       'formDesign/updateActiveForm',
      //       common.deepClone(formList[newIndex - 1])
      //     )
      //   } else {
      //     if (formList.length > 0) {
      //       this.$store.commit('formDesign/updateActiveKey', formList[0].key)
      //       this.$store.commit(
      //         'formDesign/updateActiveForm',
      //         common.deepClone(formList[0])
      //       )
      //     }
      //   }
    },
    activeCell() {
      //   bus.$emit('update.activeName', '1')
      this.$store.commit('formDesign/updateActiveKey', this.itemConf.key)
      this.$store.commit('formDesign/updateShowType', this.itemConf.type)
      this.$store.commit(
        'formDesign/updateActiveForm',
        common.deepClone(this.itemConf)
      )
      console.log('activeCell:key', this.itemConf.key)
    },
    syncList(value) {
      this.$emit('syncList', value)
    },
    markIdeaKey(ideaKey) {
      sessionStorage.ideaKey = ideaKey
    },
    appendNote(note) {
      const realname = '管理员'
      const nowDate = common.formatDateCN(new Date().getTime())
      const result = `${note}\n\n                                                  ${realname}\n                                                  ${nowDate}`
      // let newFormList = common.deepClone(this.$store.state.formDesign.formList)
      // newFormList.forEach((el) => {
      //   if (el.type === 'idea' && el.key === sessionStorage.ideaKey) {
      //     el.options.defaultValue = result
      //     this.$emit('syncList', newFormList)
      //     this.$store.dispatch(
      //       'formDesign/setFormList',
      //       common.deepClone(newFormList)
      //     )
      //   }
      // })

      this.ideaDialogVisible = false
      window.document.getElementById(sessionStorage.ideaKey).value = result
    },
  },
  data() {
    return {
      ideaDialogVisible: false,
      ideaTabIndex: '1',
    }
  },
}
</script>

<style lang="css" scoped>
.cell {
  background-color: #eee;
  padding: 10px 10px 20px 10px;
  position: relative;
  cursor: move;
}
.cell-active {
  background-color: #b3d8ff;
  border-left: 5px solid #409eff;
}
.el-form-item {
  margin-bottom: 0;
}
.action-copy {
  position: absolute;
  bottom: -15px;
  right: 60px;
  height: 30px;
  width: 30px;
  background: url("../../../assets/img/copy.png") no-repeat center;
  background-size: 18px 18px;
  background-color: #ecf5ff;
  border-color: #409eff;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #409eff;
  z-index: 1;
}
.action-copy:hover {
  background: url("../../../assets/img/copy-active.png") no-repeat center;
  background-color: #409eff;
}
.action-delete {
  position: absolute;
  bottom: -15px;
  right: 15px;
  height: 30px;
  width: 30px;
  background: url("../../../assets/img/delete.png") no-repeat center;
  background-size: 15px 15px;
  background-color: #fef0f0;
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid #f56c6c;
  z-index: 1;
}
.action-delete:hover {
  background: url("../../../assets/img/delete-active.png") no-repeat center;
  background-color: #f56c6c;
}
</style>
