import Vue from "vue";
import App from "./App.vue";
import router from "./router";

// element ui
import {
  Button,
  Container,
  Loading,
  MessageBox,
  Message,
  Notification,
  Dialog,
  Aside,
  Header,
  Main,
  Footer,
  Menu,
  Submenu,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  MenuItem,
  Table,
  TableColumn,
  Row,
  Col,
} from "element-ui";


Vue.use(Button);
Vue.use(Container);
Vue.use(Dialog);
Vue.use(Aside);
Vue.use(Header);
Vue.use(Main);
Vue.use(Footer);
Vue.use(Menu);
Vue.use(MenuItem);
Vue.use(Submenu);
Vue.use(Dropdown);
Vue.use(DropdownMenu);
Vue.use(DropdownItem);
Vue.use(Table);
Vue.use(TableColumn);
Vue.use(Row);
Vue.use(Col);

Vue.use(Loading.directive);

Vue.prototype.$loading = Loading.service;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;
Vue.prototype.$message = Message;

import "../../src/scss/style.scss";
if (process.env.NODE_ENV === "production") {
  var _hmt = _hmt || [];
  (function() {
    var hm = document.createElement("script");
    hm.src = "https://hm.baidu.com/hm.js?ed33d03fa163ca0f90c97f458e4659fa";
    var s = document.getElementsByTagName("script")[0]; 
    s.parentNode.insertBefore(hm, s);
  })();
}

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
