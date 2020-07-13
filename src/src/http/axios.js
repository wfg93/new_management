import axios from 'axios'
import { config, error } from 'shelljs'
import qs from 'qs'
axios.create({
    baseURL: "http://118.190.106.118:8021",
    timeout: 1000, //请求响应时间 1000毫秒

})



//请求拦截
axios.interceptors.request.use(configs => {

    return configs
}, error => {
    return Promise.resolve(error.response)
})

//请求响应
axios.interceptors.response.use(response => {

    return response
}, error => {
    return Promise.resolve(error.response)
})

class ApiService {
    constructor() {

    }
    createAjax(type, url, params) {
            let config = {
                method: type,
                url: url,
                headers: {
                    // "X-Requested-With": "XMLHttpRequest"
                    // 'Authorization': 'Bearer '+ token
                }
            }
            if (type === 'get' || type === 'delete') {
                config.params = params
            } else {
                config.data = params
            }
            return new Promise((resolve, reject) => {
                axios(config).then((res) => {
                    resolve(res.data)
                }).catch((err) => {
                    reject(err)
                })
            })
        }
        /*
         * restful api风格:
         * get(获取资源) / delete(删除资源)
         * post(新建资源) / put(更新某个资源较完整的内容) / patch(更新资源的部分内容,比如某个字段(手机号))
         * */

    get(url, params = {}) {
        return this.createAjax('get', url, params)
    }

    del(url, params = {}) {
        return this.createAjax('delete', url, params)
    }

    post(url, params = {}) {
        return this.createAjax('post', url, params)
    }

    put(url, params = {}) {
        return this.createAjax('put', url, params)
    }

    patch(url, params = {}) {
        return this.createAjax('patch', url, params)
    }
}
export const apiServer = new ApiService()