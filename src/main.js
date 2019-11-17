import Vue from 'vue'
import App from './App.vue'
import router from './router'

import 'font-awesome/css/font-awesome.css'
import 'bootstrap/dist/css/bootstrap.min.css'
// import $ from'jquery/src/jquery.js'
import 'bootstrap/dist/js/bootstrap.min.js'

window.$ = window.jQuery = require('jquery');

Vue.config.productionTip = false

/** Firebase init */
import * as firebase from "firebase/app";
import "firebase/database";
var config = {
  apiKey: "AIzaSyAWxaOMYJx-lvFmcFvQeRfqbBlO_xBMyLM",
  authDomain: "chataja-test-a8606.firebaseapp.com",
  databaseURL: "https://chataja-test-a8606.firebaseio.com",
  storageBucket: "chataja-test-a8606.appspot.com"
};
firebase.initializeApp(config);

Vue.prototype.$jquery = require('jquery');
Vue.prototype.$fb = firebase.database();
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

