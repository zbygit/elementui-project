import axios from 'axios'

axios.defaults.baseURL = "/static/data/"


//数据响应的拦截
axios.interceptors.response.use((res) => {
    return res.data;
})

export let table = function () {

    return axios.get('table.json');
}



