import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import CloudMusic from '@/components/CloudMusic'

Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'CloudMusic',
        component: CloudMusic
    }]
})