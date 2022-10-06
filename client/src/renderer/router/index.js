import Vue from 'vue'
import Router from 'vue-router'

import Main from '@/views/Main.vue';
import LoginDialog from '@/components/Common/LoginDialog.vue';

Vue.use(Router)

export default new Router({
  routes: [{
      path: '/',
      name: 'Main',
      component: Main
    }, {
      path: '/loginDialog',
      name: 'LoginDialog',
      component: LoginDialog
    }
  ]
})
