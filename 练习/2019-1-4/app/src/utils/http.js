import axios from 'axios'
import qs  from 'qs'
const http = axios.create({
    baseURL:'/proxyapi',//基础路径
    timeout:2000,       //超时
    headers:{           //自定义header
        token:localStorage.getItem('token'),
        t:new Date().getTime(),
        'Content-Type':'application/x-www-form-urlencoded'
    }
}
)
//请求拦截器
http.interceptors.request.use((options) => {
    // console.log(options)  请求数据的相关内容
    // options.data = qs.stringify(options.data)//处理成表单数据，即查询字符串
    // console.log(options.headers['Content-Type'])
    if(options.headers['Content-Type'] == 'application/x-www-form-urlencoded'){
        options.data = qs.stringify(options.data)
    }
    return options
})

//响应拦截器
http.interceptors.response.use((response) => {
    console.log(respones)//所有的响应数据
    
    return response
})



export  default http