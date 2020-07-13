import Vue from 'vue'
import Router from 'vue-router'
import index from '../page/index'
import Answer from '../page/Answer'

Vue.use(Router)
export default new Router({
    routes: [

        {
            path: '/',
            name: 'index',
            component: index
        },


        {
            path: '/Answer',
            name: 'Answer',
            component: Answer
        }

    ]
})