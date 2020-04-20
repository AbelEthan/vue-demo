import Vue from 'vue'
import App from './App.vue'
import vueAplayer from 'vue-aplayer'
import router from './router'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import './index.css'

Vue.config.productionTip = false
Vue.use(vueAplayer, {
    hls: true,
    colorThief: true
})
Vue.use(Antd)

vueAplayer.disableVersionBadge = true

new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
