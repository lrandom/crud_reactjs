import axios from 'axios';
const axiosInstance = axios.create({
    baseURL: 'http://localhost/post_api/api/',
    headers:{'Content-Type': 'application/json'}
})

export function get(url){
    return axiosInstance.get(url);
}

export function post(url,payload){
    return axiosInstance.post(url,payload);
}


export function put(url,payload){
    return axiosInstance.put(url,payload);
}


export function del(url,id){
    return axiosInstance.delete(url,{data:{"id":id}});
}

export const Axios ={
    get,
    post,
    put,
    del,
    axiosInstance
}

