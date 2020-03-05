<template>
  <div>
    <a-row v-for="(item,index) in dataSource" :key="index" class="tbl-row">
      <a-col :span="colSpan">{{item.name}}</a-col>
      <a-col :span="colSpan">{{item.phone}}</a-col>
      <a-col :span="colSpan">{{item.address}}</a-col>
      <a-col :span="colSpan">
        <!-- 交给上级组件使用 -->
        <slot :record="item" :index="index"></slot>
      </a-col>
    </a-row>
  </div>
</template>
<script>
import { getAction } from "@/api/manage";

const data = [
  {
    key: "1",
    name: "John Brown",
    age: 32,
    tel: "0571-22098909",
    phone: 18889898989,
    address: "New York No. 1 Lake Park"
  },
  {
    key: "2",
    name: "Jim Green",
    tel: "0571-22098333",
    phone: 18889898888,
    age: 42,
    address: "London No. 1 Lake Park"
  },
  {
    key: "3",
    name: "Joe Black",
    age: 32,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Sidney No. 1 Lake Park"
  },
  {
    key: "4",
    name: "Jim Red",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "London No. 2 Lake Park"
  },
  {
    key: "5",
    name: "Jake White",
    age: 18,
    tel: "0575-22098909",
    phone: 18900010002,
    address: "Dublin No. 2 Lake Park"
  }
];
export default {
  props: ["id"],
  data() {
    return {
      dataSource: [],

      colSpan: 6
    };
  },
  created() {},
  mounted() {
    this.getTableDataById();
  },
  methods: {
    getTableDataById() {
      // 模拟查找
      // this.dataSource = data;
      getAction("https://randomuser.me/api", { results: 10 }).then(data => {
        this.dataSource = data.aaa;

        // this.dataSource = data.results;
      });
    }
  }
};
</script>
<style scoped>
.tbl-row {
  font-size: 18px;
  padding: 10px 0;
  border-bottom: 1px solid #efefef;
}
</style>