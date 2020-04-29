<template>
  <draggable
    v-model="datas"
    tag="div"
    class="row wrap fill-height align-center sortable-list"
    style="background: grey;"
  >
    <a-row v-for="row in datas" :key="row.index" class="sorttable" style="background: red">
      <a-col v-for="item in row.items" :key="item.id" :span="3" class="row-v">
        <!-- 加判断如果item存在rows数组,则递归继续执行这个组件-->
        <template v-if="item.rows && Array.isArray(item.rows)">
          <drag :data="item.rows" />
        </template>
        <draggable
          v-else
          :list="item.data"
          tag="div"
          :group="{ name: 'row'}"
          :move="getData"
          :animation="100"
          :empty-insert-threshold="60"
          @change="log"
        >
          <a-card
            v-for="item2 in item.data"
            :key="item2.title"
            style="height: 100px;"
          >{{ item2.title }}</a-card>
        </draggable>
      </a-col>
    </a-row>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
import Vue from "vue";
export default {
  name: "Drag",
  order: 17,
  components: {
    draggable
  },
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      datas: this.data,
      controlOnStart: true
    };
  },
  methods: {
    // 限制移动的方法
    getData(e, d) {
      if (e.relatedContext.list.length > 0) {
        return false;
      }
    },
    log: function(evt) {
      // window.console.log(evt)
      // console.log(this.data)
      if (Object.keys(evt)[0] === "added") {
        this.arrLoop(this.data, evt.added.element);
      }
    },
    addHandler(e, d) {
      // console.log(e)
    },
    endHandler(e, b) {
      console.log(b);
    },
    // 递归实现遍历数据
    arrLoop(arr, ele) {
      arr.forEach(item => {
        const itemArr = item.data;
        if (itemArr && itemArr.length > 1) {
          for (let i = 0; i < itemArr.length; i++) {
            if (itemArr[i].title === ele.title) {
              itemArr.splice(i, 1);
            }
          }
        }
        if (item.items && item.items.length) {
          this.arrLoop(item.items, ele);
        }
      });
    }
  }
};
</script>
<style>
.buttons {
  margin-top: 35px;
}
.row-v {
  /* height: 150px;
  width: 200px; */
  width: 33%;
  height: 100px;
  display: inline-block;
  background: blue;
  border: 1px solid #ebebeb;
}
.row {
  margin-left: 0;
  margin-right: 0;
}
.ghost {
  opacity: 0.5;
  background: #c8ebfb;
}
</style>