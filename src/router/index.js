import Vue from 'vue'
import Router from 'vue-router'
// 导入Login页面，注意不要添加.vue后缀
import Login from '@/views/login/Login'
// 导入Layout页面
import Layout from '@/views/layout/Layout'
// 导入Home页面
import Home from '@/views/home/Home'
// 导入Users页面
import Users from '@/views/users/Users'
// 导入Rights页面
import Rights from '@/views/rights/Rights'
// 导入Roles页面
import Roles from '@/views/roles/Roles'
// 导入产品管理
import ProductManage from '@/views/products/ProductManage'
// 导入库存管理
import StorageManage from '@/views/storage/StorageManage'
// 导入规格参数页面
import SpecManage from '@/views/specifications/SpecManage'
// 导入抽屉式备注弹窗
import RemarkDrawer from '@/views/remarkDrawer/RemarkDrawer'
// 导入弹出框式备注弹窗
import RemarkPopover from '@/views/remarkPopover/RemarkPopover'
// 导入销售订单页面
import sellOrder from '@/views/sellOrder/sellOrder'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [{
    path: '/login',
    component: Login
  },
  {
    path: '/layout',
    component: Layout,
    children: [{
      path: 'home',
      component: Home
    }, {
      path: 'users',
      component: Users
    }, {
      path: 'rights',
      component: Rights
    }, {
      path: 'roles',
      component: Roles
    }, {
      path: 'products',
      component: ProductManage
    }, {
      path: 'storage',
      component: StorageManage
    }, {
      path: 'specifications',
      component: SpecManage
    }, {
      path: 'remarkDrawer',
      component: RemarkDrawer
    }, {
      path: 'remarkPopover',
      component: RemarkPopover
    },
    {
      path: 'sellOrder',
      component: sellOrder
    }
    ]
  }
  ]
})
// 导航守卫
router.beforeEach((to, from, next) => {
  // console.log(to)
  if (to.path === '/login') {
    // 访问的是登录页面
    next()
  } else {
    // 访问的不是登录页面
    const token = localStorage.getItem('token')
    if (token) {
      // 有token, 登录成功
      next()
    } else {
      next('/login')
    }
  }
})

export default router
