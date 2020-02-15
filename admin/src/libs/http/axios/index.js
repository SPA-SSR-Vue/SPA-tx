import Vue from 'vue';
import axios from 'axios';
import router from './../../../router';

const http = axios.create({
  baseURL: 'http://localhost:3000/admin/api'
})

http.interceptors.request.use(config => {
  if (localStorage.token) {
    config.headers.Authorization = 'Bearer ' + localStorage.token
  }
  return config;
}, error => {
  return Promise.reject(error);
});

http.interceptors.response.use(response => {
  return response
}, error => {
  if (error.response.data.message && error.response.status === 401) {
    Vue.prototype.$message({
      type: 'error',
      message: error.response.data.message
    })
    router.push('/login')
  }
  if (error.response.data.message && error.response.status === 422) {
    Vue.prototype.$message({
      type: 'warning',
      message: error.response.data.message
    })
  }
  return Promise.reject(error);
});

Vue.prototype.$http = http

export default http