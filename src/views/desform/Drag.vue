<template>
  <draggable v-model="data" draggable=".item" :options="options">
    <div
      v-for="(element,index) in data"
      :key="(element.type || '666') + index"
      class="item drag_item"
    >
      {{element.type || '??? 子标签'}}
      <template v-if="element.list">
        <drag :list="element.list"></drag>
      </template>
    </div>
  </draggable>
</template>

<script>
import draggable from "vuedraggable";
export default {
  name: "Drag",
  components: {
    draggable
  },
  props: {
    list: {
      type: Array,
      default() {
        return [];
      }
    },
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    return {
      data: JSON.parse(JSON.stringify(this.list)),
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
.drag_item {
  padding: 6px 12px;
  background-color: #ccc;
  border: 1px solid #333;
  margin: 2px;
}
.sortable-chosen {
  border: 1px solid green;
}
.sortable-drag {
  color: green;
}
</style>