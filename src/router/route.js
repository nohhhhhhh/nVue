import Vue from 'vue'
import Router from 'vue-router'
import Main from '@/views/layout/Main'
import chartTemplate from '@/views/guide/chartTemplate'
import chartTemplateSockJs from '@/views/guide/chartTemplateSockJs'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/Main',
      name: 'Main',
      component: Main
    },
    {
      path: '/guide',
      name: 'chartTemplate',
      component: chartTemplate
    },
    {
      path: '/websocketType2',
      name: 'chartTemplateSockJs',
      component: chartTemplateSockJs
    }
  ]
})
