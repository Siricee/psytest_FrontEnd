import Axios from 'axios';
import qs from 'qs'; // qs 是参数经过处理将对象处理为url。
let base = '/api';

export const userLogin = params => { return Axios.post(`${base}/user/login`, qs.stringify(params)); };

export const adminLogin = params => { return Axios.post(`${base}/admin/login`, qs.stringify(params)); };

export const getUserList = params => { return Axios.get(`${base}/user/list`, qs.stringify(params)); };

export const userRegister = params => { return Axios.post(`${base}/user/register`, qs.stringify(params)); };

export const isRepeatedName = params => { return Axios.post(`${base}/user/isrepeatname`, qs.stringify(params)); };

export const commitDass21Paper = params => { return Axios.post(`${base}/dass21/commit`, qs.stringify(params)); };
export const commitNovackPaper = params => { return Axios.post(`${base}/novack/commit`, qs.stringify(params)); };
export const commitSasPaper = params => { return Axios.post(`${base}/sas/commit`, qs.stringify(params)); };
export const commitScl90Paper = params => { return Axios.post(`${base}/scl90/commit`, qs.stringify(params)); };
