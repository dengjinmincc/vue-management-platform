import Vue from 'vue'
import Router from 'vue-router'
import Layout from '../views/layouts.vue'
import index from '../views/index.vue'
import table from '../views/table.vue'
import form from '../views/form.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Layout',
      component: Layout,
      children: [
        { path: '/index', component: index, name: '首页', class: 'fa-line-chart' },
        { path: '/table', component: table, name: '表格', class: 'fa-table' },
        { path: '/form', component: form, name: '表单', class: 'fa-newspaper-o' }
      ]
    }
  ]
})
