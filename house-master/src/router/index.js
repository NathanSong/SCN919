import Vue from 'vue'
import VueRouter from 'vue-router'
import login from '@/views/login.vue'
import regist from '@/views/regist.vue'

import adminHome from '@/views/adminHome.vue'
import userHome from '@/views/userHome.vue'
import userAdmin from '@/views/adminHome/userAdmin.vue'
import firstpage from '@/views/adminHome/firstpage.vue'
import adminMessageBoard from '@/views/adminHome/adminMessageBoard.vue'

import firstHome from '@/views/userHome/firstHome.vue'
import userHouse from '@/views/userHome/userHouse.vue'
import houseDetail from '@/views/userHome/houseDetail.vue'
import userInfo from '@/views/userHome/userInfo.vue'
import userMessageBoard from '@/views/userHome/userMessageBoard.vue'
import houseShow from '@/views/userHome/houseShow'
Vue.use(VueRouter)


const routes = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: login },
  { path: "/regist", component: regist },
  {
    path: "/adminHome", component: adminHome, children: [
      { path: "/", redirect: "firstpage" },
      { path: "firstpage", component: firstpage },// 首页
      { path: "adminMessageBoard", component: adminMessageBoard },// 留言管理
      { path: "userAdmin", component: userAdmin },// 用户管理
    ]
  },
  {
    path: "/userHome", component: userHome, children: [
      { path: "/", redirect: "firstHome" },
      { path: "firstHome", component: firstHome },// 首页
      { path: "userInfo", component: userInfo },// 个人信息
      { path: "userMessageBoard", component: userMessageBoard },// 留言板
      { path: "userHouse", component: userHouse },// 用户的房屋
      { path: 'userhouse/detail/:houseid', component: houseDetail },// 房屋详情
      { path: "houseShow", component: houseShow },// 房屋展示
    ]
  }
]

const router = new VueRouter({
  routes
})
// 前置守卫
router.beforeEach(function (to, from, next) {
  const arr = ['/adminHome', '/userHome']
  if (arr.indexOf(to.path) != -1) {
    // 如果访问的是home主页,则拦截,否则放行
    // if (to.path === '/home') {
    // 判断token是否为空 若为空，则强制跳转到登录页面 不为空则放行
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    // 放行
    next()
  }
})

export default router
