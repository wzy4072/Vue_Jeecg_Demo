<template>
  <a-cascader
    :options="cascaderOptions"
    :loadData="loadCascaderData"
    :placeholder="conf.placeholder"
    v-model="cascaderValue"
    changeOnSelect
    @change="handleChange"
  >
    <a-icon type="loading" v-show="loading" slot="suffixIcon" size="small" />
  </a-cascader>
</template>

<script>
import { getAction } from '@/api/manage'

function getParentCode(code) {
  // 省级
  if (/0{10}$/.test(code)) {
    return code.slice(0, 2)
  }
  // 市级
  if (/0{8}$/.test(code)) {
    return code.slice(0, 4)
  }
  // 县区级
  if (/0{6}$/.test(code)) {
    return code.slice(0, 6)
  }
  // 乡镇街道级
  if (/0{3}$/.test(code)) {
    return code.slice(0, 9)
  }
}
function isLeaf(list) {
  list.map(item => {
    item.isLeaf = false
    if (!/0{6}$/.test(item.value)) {
      item.isLeaf = true
    }
  })
  return list
}
export default {
  props: {
    conf: {
      type: Object,
      required: true
    },
    value: {
      type: Array,
      required: false,
      default: () => []
    },
    params: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      cascaderValue: JSON.parse(JSON.stringify(this.value)),
      cascaderOptions: [],
      loading: false,
      url: {
        getRegion: '/accountCenter/conductFinanceOpening/getRegion'
      }
    }
  },
  watch: {
    value(nv, ov) {
      console.log('nv', nv)
      if (nv.length > 0) {
        this.checkCascaderShow(this.value)
        // this.$emit("change", nv);
      }
    }
  },
  mounted() {
    this.initRegion()
  },
  methods: {
    // 初始化省份列表
    async initRegion(financeCode) {
      getAction(this.url.getRegion, {
        financeNo: this.params.fundSaleCertificateNo,
        parentCode: ''
      })
        .then(res => {
          if (res.code == 200) {
            this.cascaderOptions = isLeaf(res.data)
            // 初始值渲染
            this.checkCascaderShow(this.value)
            console.log('checkCascaderShow', this.value)
          }
        })
        .catch(err => {})
    },
    // 联动异步查询
    async loadCascaderData(selectedOptions) {
      // 如果有就跳过查询
      const targetOption = selectedOptions[selectedOptions.length - 1]
      if (targetOption.children) return targetOption.children
      targetOption.loading = true

      return await getAction(this.url.getRegion, {
        financeNo: this.params.fundSaleCertificateNo,
        parentCode: getParentCode(targetOption.value)
      }).then(res => {
        if (res.code == 200) {
          // 如果有就用旧值
          targetOption.loading = false
          if (targetOption.children) return targetOption.children
          let childList = res.data.filter(item => item.value != targetOption.value)
          targetOption.children = isLeaf(childList)
          this.cascaderOptions = [...this.cascaderOptions]
          return targetOption.children
        }
      })
    },
    async checkCascaderShow(arr) {
      this.loading = true
      // 这里是递归 从数组第一项开始 直到最后一级
      let childOptions = this.cascaderOptions
      for (let i = 0; i < arr.length; i++) {
        const val = arr[i]
        let selectOptions = childOptions.filter(opt => opt.value === val)
        if (selectOptions[0].children) {
          childOptions = selectOptions[0].children
        } else {
          childOptions = await this.loadCascaderData(selectOptions)
        }
      }
      this.loading = false
    },
    handleChange(v) {
      this.$emit('change', v)
    }
  }
}
</script>
<style scoped>
</style>