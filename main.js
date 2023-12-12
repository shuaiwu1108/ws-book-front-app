import App from './App.vue'

const host = 'http://127.0.0.1:9090';

//const host = 'http://223.76.234.112:9293/ltqf'
const miniourl = 'http://192.168.0.244:9000';

// #ifndef VUE3
import Vue from 'vue'
Vue.config.productionTip = false
Vue.prototype.$host = host;
Vue.prototype.$minioUrl = miniourl;
App.mpType = 'app'
const app = new Vue({
  ...App
})
app.$mount()
// #endif

// #ifdef VUE3
import {
	createSSRApp
} from 'vue'
export function createApp() {
	const app = createSSRApp(App)
	return {
		app
	}
}
// #endif
