import Vue from 'vue'
import Router from 'vue-router'
import AddOption from '@/components/AddOption'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/add-option',
      name: 'AddOption',
      component: AddOption
    }
  ]
})
