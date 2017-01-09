// src/main.js

import Vue from 'vue'
import Checks from './components/Checks.vue'
import CheckDetail from './components/CheckDetail.vue'
import CheckCreate from './components/CheckCreate.vue'
import 'bootstrap/dist/css/bootstrap.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/check/:id', component: CheckDetail },
  { path: '/check', component: CheckCreate },
  { path: '/checks', component: Checks },
  { path: '/*', redirect: '/checks' }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
