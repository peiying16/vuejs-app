// src/main.js

import Vue from 'vue'
import CheckList from './components/CheckList.vue'
import CheckForm from './components/CheckForm.vue'
import UserList from './components/UserList.vue'
import 'bootstrap/dist/css/bootstrap.css'

import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  { path: '/check/:id', component: CheckForm },
  { path: '/check', component: CheckForm },
  { path: '/checks', component: CheckList },
  { path: '/users', component: UserList },
  { path: '/*', redirect: '/checks' }
]

const router = new VueRouter({
  mode: 'history',
  routes
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router
})
