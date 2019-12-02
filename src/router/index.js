import Vue from 'vue'
import Router from 'vue-router'
import index from '../../src/components/layout/index.vue'
import chart from '../components/chart/chart.vue'
import table from '../components/user/table.vue'
import addUser from '../components/user/addUser.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      children:[
        {
          path: '',
          name: 'chart',
          component: chart
        },
        {
          path: 'chart',
          name: 'chart',
          component: chart
        },
        {
          path:"table",
          name: 'table',
          component: table
        },
        {
          path:"addUser",
          name: 'addUser',
          component: addUser
        }
      ]
    }
  ]
})
