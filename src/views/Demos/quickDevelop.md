
### 快速开发参考手册

####  引入api
  import { apiMethods } from "@/api/manage"
  import { mapGetters } from 'vuex'
  import { mixin } from '@/utils/mixin.js'
  import { getAction } from "@/api/manage";

#### 路由跳转

// 路由跳转及传参
router.push({ path: 'home' })
router.push({ path: 'register', query: { id: 666 }})

<router-link :to="'home'">Home</router-link>
<router-link :to="{ path: 'register', query: { plan: 'private' }}">Register</router-link>

// 取参数
this.$router.query.id

#### img 
// 使用1
  <img src="~@/assets/logo.png" alt />

import img from '@/assets/logo.png'