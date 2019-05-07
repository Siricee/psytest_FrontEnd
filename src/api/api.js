import Axios from 'axios';
import qs from 'qs'; // qs 是参数经过处理将对象处理为url。

let base = process.env.NODE_ENV === 'production' ?'.':'/api';


// admin
export const adminLogin = params => { return Axios.post(`${base}/admin/login`, qs.stringify(params)); };

export const getAdminList = params => { return Axios.get(`${base}/admin/list`, {params:params})};

export const deleteAdminAccount = params => { return Axios.get(`${base}/admin/delete`, {params:params})};

export const isRepeatedAdminName = params => { return Axios.post(`${base}/admin/isrepeatname`, qs.stringify(params)); };

export const adminRegister = params => { return Axios.post(`${base}/admin/register`, qs.stringify(params)); };

// user
export const userLogin = params => { return Axios.post(`${base}/user/login`, qs.stringify(params)); };

export const getUserList = params => { return Axios.get(`${base}/user/list`, qs.stringify(params)); };

export const getUserInfo = params => { return Axios.get(`${base}/user/info`, qs.stringify(params)); };

export const userRegister = params => { return Axios.post(`${base}/user/register`, qs.stringify(params)); };

export const isRepeatedName = params => { return Axios.post(`${base}/user/isrepeatname`, qs.stringify(params)); };

// 提交问卷
export const commitDass21Paper = params => { return Axios.post(`${base}/dass21/commit`, qs.stringify(params)); };

export const commitNovackPaper = params => { return Axios.post(`${base}/novack/commit`, qs.stringify(params)); };

export const commitSasPaper = params => { return Axios.post(`${base}/sas/commit`, qs.stringify(params)); };

export const commitScl90Paper = params => { return Axios.post(`${base}/scl90/commit`, qs.stringify(params)); };

// 获取历史记录

// dass21 问卷
//export const getDass21historyList = params => { return Axios.get(`${base}/dass21/history_list`, qs.stringify(params)); };
export const getDass21historyListWithUserData = params => { return Axios.get(`${base}/dass21/history_list_detail`, qs.stringify(params)); };
    // 注意：get请求不用qs序列化，直接传json就可以
export const getUserDass21history = params => { return Axios.get(`${base}/dass21/history_list/user`, {params:params} )};

// SAS 问卷
//export const getSAShistoryList = params => { return Axios.get(`${base}/sas/history_list`, qs.stringify(params)); };
export const getSAShistoryListWithUserData = params => { return Axios.get(`${base}/sas/history_list_detail`, qs.stringify(params)); };

export const getUserSAShistory = params => { return Axios.get(`${base}/sas/history_list/user`, {params:params} )};

// Novack 问卷
export const getNovackhistoryListWithUserData = params => { return Axios.get(`${base}/novack/history_list_detail`, qs.stringify(params)); };

export const getUserNovackhistory = params => { return Axios.get(`${base}/novack/history_list/user`, {params:params} )};

// SCL90问卷
export const getScl90historyListWithUserData = params => { return Axios.get(`${base}/scl90/history_list_detail`, qs.stringify(params)); };

export const getUserScl90history = params => { return Axios.get(`${base}/scl90/history_list/user`, {params:params} )};
