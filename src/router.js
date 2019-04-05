import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import phoneRecords from './components/PhoneRecords.vue'
import phoneRecordNew from './components/phoneRecordNew.vue'
import phoneRecordEdit from './components/phoneRecordEdit.vue'
import prospects from './components/prospects.vue'
import ProspectsNew from './components/prospectsNew.vue'
import prospectsEdit from './components/prespectsEdit.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ './views/About.vue')
    },
    {
      path: '/phoneRecords',
      name: 'phoneRecords',
      component: phoneRecords
    },
    {
      path: '/phoneRecordNew',
      name: 'phoneRecordsNew',
      component: phoneRecordNew
    },
    {
      path: '/phoneRecordEdit',
      name: 'phoneRecordEdit',
      component: phoneRecordEdit
    },
    {
      path: '/prospects',
      name: 'prospects',
      component: prospects
    },
    {
      path: '/prospectsNew',
      name: 'prospectsNew',
      component: ProspectsNew
    },
    {
      path: '/prospectsEdit',
      name: 'prospectsEdit',
      component: prospectsEdit
    },
  ]
})
