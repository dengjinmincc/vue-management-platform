import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import App from '../App'
import home from '../views/home.vue'
import table from '../views/table.vue'
import form from '../views/form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'App',
      // component: App,
      children: [
          { path: '/', component: home, name: '默认' },
          { path: '/home', component: home, name: '首页' },
          { path: '/table', component: table, name: '表格' },
          { path: '/form', component: form, name: '表单' }
      ]
    }
  ]
})
