import Vue from 'vue'
import Router from 'vue-router'
//组件的导入&引用
import Login from './views/Login'
import Main from './views/Main'
import ProductAdd from './views/ProductAdd'
import ProductList from './views/ProductList'
import Stat from './views/Stat'
import UserList from './views/UserList'
import NotFound from './views/NotFound'

Vue.use(Router);

export default new Router({
    routes: [
        {path: '/', component: Main, children: [
                {path:'/', component:Stat},
            ]},
        {path: '/login', component: Login},
        {path: '/main', component: Main, children:[
                {path:'/', component:Stat},
                {path:'stat', component:Stat},
                {path:'plist', component:ProductList},
                {path:'padd', component:ProductAdd},
                {path:'ulist', component:UserList},
            ]},
        {path: '/*', component: NotFound},
    ]
})
