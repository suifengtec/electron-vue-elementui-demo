import Vue from 'vue'
import axios from 'axios'

import App from './App'
import router from './router'
import store from './store'

//==================ElementUI
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import 'element-ui/lib/theme-chalk/display.css';
Vue.use( ElementUI, { size: 'small', zIndex: 3000 } );
//==================//ElementUI

if ( !process.env.IS_WEB ) Vue.use( require( 'vue-electron' ) )
Vue.http = Vue.prototype.$http = axios
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue( {
  components: { App },
  router,
  store,
  template: '<App/>'
} ).$mount( '#app' )
