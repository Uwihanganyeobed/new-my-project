import axios from "axios";
const API = axios.create({
    baseURL: 'http://localhost:5000/'})

//let's try some logic for interceptors if we have some tokens
API.interceptors.request.use((req)=>{
    const token = localStorage.getItem('token')
    if(token) req.headers.Authorization = `Bearer ${token}`
    return req;
})

export default API