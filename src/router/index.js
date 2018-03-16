import Vue from 'vue'
import Router from 'vue-router'
import work1 from '../components/workExp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/work',
      name: 'work1',
      component: work1
    }
  ]
})
