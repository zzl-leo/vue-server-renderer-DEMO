import Vue from "vue"
import Router from  "vue-router"

import Index from "../components/index.vue"
import Detail from "../components/detail.vue"

Vue.use(Router)

// 这里不直接导出一个router实例
// 每次用户请求都需要创建router实例
export default function createRouter() {
    return new Router({
        mode: "history",
        routes: [
            {path: "/", component: Index},
            {path: "/detail", component: Detail}
        ]
    })
}