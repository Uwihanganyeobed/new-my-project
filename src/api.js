import axios from "axios";

// eslint-disable-next-line no-undef
const api_url = process.env.BACK_END_SERVICE_URL
const API = axios.create({
    baseURL: api_url || 'https://mrn-back-end.onrender.com/'})

//let's try some logic for interceptors if we have some tokens
API.interceptors.request.use((req)=>{
    const token = localStorage.getItem('token')
    if(token) req.headers.Authorization = `Bearer ${token}`
    return req;
})

export default API