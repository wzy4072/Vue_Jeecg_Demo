<template>
  <div>
    <a-row>
      <a-col :span="4">
        <draggable
          :list="confs"
          :group="{ name: 'form-design', pull: 'clone', put: false }"
          @change="log"
          :clone="clone"
        >
          <a-button v-for="(item, i) in confs" :key="i">{{
            item.title
          }}</a-button>
        </draggable>
      </a-col>
      <a-col :span="20">
        <draggable
          :list="list"
          :group="{ name: 'form-design' }"
          class="draggable-list"
        >
          <Dragcell
            v-for="(item, i) in list"
            :key="i"
            :itemConf="item"
          ></Dragcell>
        </draggable>
      </a-col>
    </a-row>
    <a-row>

    </a-row>
  </div>
</template>

<script>
import draggable from 'vuedraggable'
import confs from './cells/confMenu'
import common from '@/utils/common'

let uId = 0
export default {
  components: {
    draggable,
  },
  data() {
    return {
      confs,
      list: [
        // {
        //   title: "dsrow",
        //   type: "dsrow",
        //   list: [
        //     {
        //       title: "dscol111",
        //       type: "dscol",
        //       span: 8,
        //       list: [
        //         {
        //           title: "INPUT",
        //           type: "dsinput",
        //           placeholder: "请输入..."
        //         }
        //       ]
        //     },
        //     {
        //       title: "dscol222",
        //       type: "dscol",
        //       span: 6,
        //       list: []
        //     }
        //   ]
        // }
      ],
    }
  },
  methods: {
    log(evt) {
      console.log('drag--menu', evt)
    },
    clone(original) {
      original = JSON.parse(JSON.stringify(original))

      original.key = common.getGuid2()
      original.title =   original.title+(uId++)

      if (['dstabs', 'dsrow'].includes(original.type)) {
        original.list = original.list.map((item) => {
          item.key = common.getGuid2()
          return item
        })
      }
      console.log('clone', original)
      return original
    },
  },
}
</script>

<style>
.draggable-list {
  width: 100%;
  min-height: 200px;
  border: 1px solid #ccc;
}
.t-align-r{
     text-align: right;
    padding-right: 6px;
    line-height: 32px;
}
.conf-cell {
  border: 1px dashed #ccc;
  padding: 3px;
  margin: 2px 0;
}
.cell-col {
  display: inline-block;
  min-height: 90px;

}
.cell-subtitle{
    position: absolute;
    top:0;
    left: 0;
    color:#ccc;
}
.cell-item{
    margin:6px 0;
}
</style>
