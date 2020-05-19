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
            <svg-icon :iconClass="'icon-' + item.icon"></svg-icon>
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
            <svg-icon :iconClass="'icon-' + item.icon"></svg-icon>
          </p>
          <p class="right">{{ item.label }}</p>
        </div>
      </draggable>
    </a-row>
    <br />
    
    <a-divider>特殊类型</a-divider>
    <a-row>
      <draggable
        :list="elseItem.list"
        :group="{ name: 'form-design', pull: 'clone', put: false }"
        @change="log"
        :clone="clone"
      >
        <div class="cell" v-for="(item, i) in elseItem.list" :key="i">
          <p class="left">
            <svg-icon :iconClass="'icon-' + item.icon"></svg-icon>
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

import { InputConf } from '@/views/DraggableTest/FD_Component/DesignItem/InputForm'
import { NumberConf } from '@/views/DraggableTest/FD_Component/DesignItem/NumberForm'
import { DatePickerConf } from '@/views/DraggableTest/FD_Component/DesignItem/DatePickerForm'
import { SelectConf } from '@/views/DraggableTest/FD_Component/DesignItem/SelectForm'
import { TitleConf } from '@/views/DraggableTest/FD_Component/DesignItem/TitleForm'
import { AsyncSelectConf } from '@/views/DraggableTest/FD_Component/DesignItem/AsyncSelectForm'
import { EnumSelectConf } from '@/views/DraggableTest/FD_Component/DesignItem/EnumSelectForm'
import { GridConf } from '@/views/DraggableTest/FD_Component/DesignItem/GridForm'
import { UploadsConf } from '@/views/DraggableTest/FD_Component/DesignItem/UploadsForm'
import { AddressCascaderConf } from '@/views/DraggableTest/FD_Component/DesignItem/AddressCascaderForm'

export default {
  components: {
    draggable,
  },
  data() {
    return {
      base: {
        label: '基础字段',
        list: [InputConf, NumberConf, SelectConf,  AsyncSelectConf, DatePickerConf, TitleConf, UploadsConf],
        // switch title 待添加
      },
      layout: {
        label: '布局字段',
        list: [GridConf],
      },
      elseItem: {
        label: '特殊字段',
        list: [
          // 地区级联
          EnumSelectConf,
          AddressCascaderConf,
          // 枚举Select
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
    //   console.log('666',JSON.stringify(newOri[0]))
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
