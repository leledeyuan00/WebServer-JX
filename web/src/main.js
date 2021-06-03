import Vue from 'vue'
import App from './App.vue'
import router from './router'

import "../../src/scss/style.scss";

// if (process.env.NODE_ENV === "production") {
//   var _hmt = _hmt || [];
//   (function() {
//     var hm = document.createElement("script");
//     hm.src = "https://hm.baidu.com/hm.js?9295d6fc2ef1a842540bd035f4b7e421";
//     var s = document.getElementsByTagName("script")[0]; 
//     s.parentNode.insertBefore(hm, s);
//   })();
// }

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
