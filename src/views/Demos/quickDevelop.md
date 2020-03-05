
### 快速开发参考手册

####  引入api
  import { apiMethods } from "@/api/manage"
  import { mapGetters } from 'vuex'
  import { mixin } from '@/utils/mixin.js'
  import { getAction } from "@/api/manage";

#### 路由跳转

```
// 路由跳转及传参
router.push({ path: 'home' })
router.push({ path: 'register', query: { id: 666 }})

<router-link :to="'home'">Home</router-link>
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>

// 取参数
this.$router.query.id
```
#### 时间格式转换
```
 // datepicker 接受/返回的数据是 moment对象，同后台交互时需要进行格式转换  需要安装依赖moment    
 import moment from 'moment'     
// 获取
this.formValue.createDate = this.formValue.createDate.format('YYYY-MM-DD') // 2018-05-06
this.formValue.createDate = this.formValue.createDate.format('x') // 1566970446059
// 设置 
this.form.setFieldsValue({ createDate: moment('2019-01-02') })
this.form.setFieldsValue({ createDate: moment(1566970446059) })
```


#### 图片展示

```
src/assets 下使用

// 使用1
  <img src="~@/assets/logo.png" alt />
//使用2
 <a-avatar :size="64" :src="img" />

import img from '@/assets/logo.png'
data(){
  return {
    img
  }
}   
/static/images/ 下使用

<img src="~@static/images/0.png" alt />

```

### store/vuex 操作 

```
vuex [https://vuex.vuejs.org/zh/guide/getters.html]
// 获取
store.state.count
store.getters.doneTodos // 通常用于含有复杂计算 可以依赖缓存的类型

// 同步更改 
store.commit('increment',{ amount: 10 })

// 异步更改 
store.dispatch('incrementAsync', { amount: 10 })

// 一般使用 依赖单个
 computed: {
    count () {
      return store.state.count
    }
  }

// 一般使用 依赖多个
import { mapState } from 'vuex'
computed: mapState({
    count: state => state.count,
    countPlusLocalState (state) {
      return state.count + this.localCount
    }
  })
```
### 接口调用

```
 this.axios({
      url: 'sys/login',
      method: 'post',
      data: customerInfo
    }).then(data => {
      if (data.code == '200') {
          console.log()
      }
    })

// 代理转发设置 请查看vue.config.js
// 多服务转发根据url 辅助请求可参考
import axios from 'axios'
 axios.post('/local/demos/salaryPayList', sendData)
    .then(r => {
      r = r.data
      this.tableData = r.result
    })
```

#### form 的重置 清空 验证

```
function validaNa(rule, value, callback) {
  if (true) {
    callback(new Error( '输入重复！'))
  } else {
    callback()
  }
}
data (){
reutrn  {
    noteRules: [
        { required: true, message: '必填' },
        { type: 'string', message: '请输入字符串！' },
        { pattern: /^[a-z]$/, message: '格式不正确！' },
        { min: 2, max: 6, message: '请输入2-6的数字!' },
        { validator: validaNa }
        ]
    }
},
methods:{
    getFromData() {
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('this is form value', values)
          // 表单会识别值的格式 尤其是数字与字符串 请明确指定格式 比如 [{ required: true, type:'number'...
        }
      })
    },
    editFrom() {},
    // 重置
    resetForm() {
      // 意思是重置为初始状态 默认值会保留
      this.initData = {
        name: 'Tom',
        age: '12'
      }
      this.form.resetFields()
    },
    // 清空
    clearForm() {
      this.initData = {}
      this.form.resetFields()
    },
    // 设置值
    setFiledsValue(){
      this.$nextTick(() => {
        this.form.setFieldsValue(pick(this.model,'description','status'));
      });
    }
}
```

#### 本地存储

```
import Vue from 'vue'
// 设置
Vue.ls.set(ACCESS_TOKEN, result.access_token, 7 * 24 * 60 * 60 * 1000)
// 获取
Vue.ls.get(ACCESS_TOKEN)
// 删除
Vue.ls.remove(ACCESS_TOKEN)
```

#### antd table pagination 设置参考

```
    ipagination: {
        total: 20,
        // size: '5',
        pageSize: 6,
        pageSizeOptions: ['10', '20', '30'],
        showSizeChanger: true,
        current: 1,
        showQuickJumper: true,
        showTotal: (total, range) => {
          return range[0] + '-' + range[1] + ' 共' + total + '条'
        },
        //   onShowSizeChange: (current, pageSize) => (this.pageSize = pageSize), // 改变每页数量时更新显示
        onChange: (page, pageSize) => self.changePage(page, pageSize) //点击页码事件
      }
```

#### table 等 vNode 渲染方式
```
 columns: [
        {
          title: 'Name',
          dataIndex: 'name',
          sorter: true,
          width: '20%',
          customRender: e => {
            return this.$createElement(
              'span',
              {
                style: {
                  color: 'red'
                }
              },
              e
            )
          }
        },
        ...
```
