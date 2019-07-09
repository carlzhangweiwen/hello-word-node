import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import DashBoard from '@/components/dashboard/DashBoard'
import DashBoard2 from '@/components/dashboard/DashBoard2'



Vue.use(Router)

// 1. 定义 (路由) 组件。
// 可以从其他文件 import 进来
const Foo = { template: '<div>foo</div>' }
const Bar = { template: '<div>bar</div>' }

// 2. 定义路由
// 每个路由应该映射一个组件。 其中"component" 可以是
// 通过 Vue.extend() 创建的组件构造器，
// 或者，只是一个组件配置对象。
// 我们晚点再讨论嵌套路由。



export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: HelloWorld
        }, {
            path: '/DashBoard',
            name: 'DashBoard',
            component: DashBoard
        }, {
            path: '/DashBoard2',
            name: 'DashBoard2',
            component: DashBoard2
        }, { path: '/foo', component: Foo },
        { path: '/bar', component: Bar }
    ]
})