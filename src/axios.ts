import axios from "axios";
import { config } from "process";

const instance = axios.create({
    baseURL: 'http://localhost:4444'
})

instance.interceptors.request.use((config) => {
    config.headers.Authorization = window.localStorage.getItem('token')
    return config
})

export default instance;