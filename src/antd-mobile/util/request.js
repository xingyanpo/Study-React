// Add a request interceptor
import { Toast } from 'antd-mobile'
import  axios from 'axios'

axios.interceptors.request.use(function (config) {
  Toast.show({
    icon: 'loading',
    content: '加载中…',
    duration: 0
  })
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
});

// Add a response interceptor
axios.interceptors.response.use(function (response) {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  Toast.clear()
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  Toast.clear()
  return Promise.reject(error);
});