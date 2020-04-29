<!--
 * @Description: In User Settings Edit
 * @Author: your name
 * @Date: 2019-07-03 08:37:07
 * @LastEditTime: 2019-12-10 11:29:33
 * @LastEditors: Please set LastEditors
 -->
<template>
  <a-row>
    <a-divider>基础字段</a-divider>
    <a-row>
      <draggable
        :list="base.list"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
        :clone="clone"
      >
        <div class="cell" v-for="(item, i) in base.list" :key="i">
          <p class="left">
            <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{ item.label }}</p>
        </div>
      </draggable>
    </a-row>
    <br />

    <a-divider>布局字段</a-divider>
    <a-row>
      <draggable
        :list="layout.list"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
        :clone="clone"
      >
        <div class="cell" v-for="(item, i) in layout.list" :key="i">
          <p class="left">
            <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{ item.label }}</p>
        </div>
      </draggable>
    </a-row>
    <br />

    <a-divider>高级字段</a-divider>
    <a-row>
      <!-- <draggable
        :list="senior.list"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
      >
        <div class="cell" v-for="(item, i) in senior.list" :key="i">
          <p class="left">
            <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{ item.label }}</p>
        </div>
      </draggable> -->
    </a-row>
    <br />

    <a-divider>特殊类型</a-divider>
    <a-row>
      <draggable
        :list="elseItem.list"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
      >
        <div class="cell" v-for="(item, i) in elseItem.list" :key="i">
          <p class="left">
            <span :class="`iconfont icon-${item.icon}`"></span>
          </p>
          <p class="right">{{ item.label }}</p>
        </div>
      </draggable>
    </a-row>
    <br />
  </a-row>
</template>

<script>
import draggable from 'vuedraggable'
import common from '@/utils/common'
export default {
  components: {
    draggable,
  },
  data() {
    return {
      base: {
        label: '基础字段',
        list: [
          {
            type: 'input',
            name: '',
            label: 'Input',
            disabled: false,
            required: true,
            rules: [],
            labelCol: { span: 6 },
            wrapperCol: { span: 6 },
          },
          {
            type: 'number',
            label: '数字',
            name: '',
            min: 0,
            rules: [],
          },

          {
            type: 'select',
            // 三种下拉选择
            name: '',
            label: '下拉选择',
            labelCol: { span: 6 },
            wrapperCol: { span: 6 },
            options: [],
          },
          {
            type: 'datepicker',
            label: '日期选择',
            name: '',
            disabledDate: '',
            dateFormat: 'YYYY-MM-DD',
            dateValueFormat: 'YYYY-MM-DD',
            config: false,
            rules: [],
          },
          {
            type: 'title',
            name: '',
            label: '展示值',
            labelCol: { span: 6 },
            wrapperCol: { span: 6 },
          },
        ],
      },
      layout: {
        label: '布局字段',
        list: [
          {
            label: '栅格布局',
            type: 'grid',
            icon: 'ai211',
            name: '',
            key: '',
            list: [
              {
                span: 12,
                type: 'col',
                icon: 'ai211',
                name: '',
                key: '',
                list: [
                  {
                    type: 'input',
                    name: '',
                    label: 'Input',
                    disabled: false,
                    required: true,
                    rules: [],
                    labelCol: { span: 6 }, // FormItem 默认 { span: 6 },
                    wrapperCol: { span: 6 }, // FormItem 默认{ span: 6 },
                  },
                ],
              },
              {
                span: 12,
                type: 'col',
                icon: 'ai211',
                name: '',
                key: '',
                list: [
                  {
                    type: 'input',
                    name: '',
                    label: 'Input',
                    disabled: false,
                    required: true,
                    rules: [],
                    labelCol: { span: 6 }, // FormItem 默认 { span: 6 },
                    wrapperCol: { span: 6 }, // FormItem 默认{ span: 6 },
                  },
                ],
              },
            ],
          },
        ],
      },
      elseItem: {
        label: '特殊字段',
        list: [
          {
            type: 'AsyncSelect',
            name: '',
            label: '字典下拉类型',
            disabled: true, // 是否禁用
            rules: [],
            selectOptionType: 2, // 字典选项目
            selectOptionEnumCode: 'limbic_shbank_comDibilityLimit',
          },
          {
            type: 'AsyncSelect',
            name: 'bankId',
            label: '远程获取下拉',
            disabled: false, // 是否禁用
            rules: [],
            selectOptionType: 1,
            showSearch: true,
            options: {
              url: '/customer/bankAccount/getBankList',
              callBack: (res) => {
                return res.data
              },
              valueKey: 'id',
              labelKeys: ['bankAcco', 'bankAcconame'],
            },
          },
        ],
      },
    }
  },
  mounted() {
    // bus.$on('formMenu.init', () => {
    // //   this.initMenu()
    // })
  },
  methods: {
    log: function(evt) {
      console.log('menu')
      window.console.log(evt)
    },
    clone(original) {
      original = JSON.parse(JSON.stringify(original))
      let newOri = common.recurrence([original], function(item) {
        item.name = common.getGuid2() // 表单字段 数组类型的渲染 可以重复
        item.key = common.getGuid() // 任意项 不可重复 复制的也不能重复
        return item
      })
      return newOri[0]
    },
    initMenu() {
      //   this.base = common.deepClone(base)
      //   this.senior = common.deepClone(senior)
      //   this.layout = common.deepClone(layout)
      //   this.elseItem = common.deepClone(elseItem)
    },
  },
}
</script>

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
.cell .left {
  float: left;
  width: 27px;
  height: 100%;
  margin: 0;
}
.cell .left img {
  position: relative;
  top: -1px;
  left: 5px;
}
.cell .right {
  float: left;
  width: 73px;
  height: 100%;
  margin: 0;
}
.iconfont {
  margin-left: 5px;
}
</style>
