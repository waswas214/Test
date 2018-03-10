import axios from 'axios';

export const API = axios.create({
    baseURL: `https://december.lt:19151/v2/hospital-back-end-temp/tags/list`
})