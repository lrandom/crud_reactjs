import {Axios} from './Axios';
const url = "posts/post.php";

export function getData(){
    return Axios.get(url);
}

export function add(payload){
    return Axios.post(url,payload);
}

export function del(id){
    return Axios.del(url,id);
}

export const postService = {
    getData,
    add,
    del
}