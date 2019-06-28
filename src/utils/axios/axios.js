import axios from "axios";
import {Message} from "iview";
import Cookies from "js-cookie";
const debug = process.env.NODE_ENV !== "production";


class HttpRequest {
 constructor (baseUrl = baseURL) {
  this.baseUrl = baseUrl;
  this.queue = {};
 }
 getInsideConfig () {
  const config = {
   baseURL: this.baseUrl,
   headers: {
    "token": Cookies.get("token"),
    // 'token': debug? '59df24a32664a87ae2b19b2162a8a81c': Cookies.get('token'),
    "timestamp": new Date().getTime()
     .toString()
     .substring(0, 10),
    "Content-Type": "application/json;charset=UTF-8"
   }
  };
  return config;
 }
 destroy (url) {
  delete this.queue[url];
  if (!Object.keys(this.queue).length) {
   // Spin.hide()
  }
 }
 interceptors (instance, url) {
  // 请求拦截
  instance.interceptors.request.use((config) => {
   // 添加全局的loading...
   if (!Object.keys(this.queue).length) {
    // Spin.show() // 不建议开启，因为界面不友好
   }
   this.queue[url] = true;
   return config;
  }, (error) => Promise.reject(error));
  // 响应拦截
  instance.interceptors.response.use((res) => {
   if (res.data.code !== 200 && res.data.code !== 400) {
    Message.error(res.data.message);
   }
   this.destroy(url);
   // 增加异常提示
   const { data, headers, status } = res;
   return { data, headers, status };
  }, (error) => {
   Message.error("服务异常，请稍后重试！");
   this.destroy(url);
   let errorInfo = error.response;
   if (!errorInfo) {
    const { request: { statusText, status }, config } = JSON.parse(JSON.stringify(error));
    errorInfo = {
     statusText,
     status,
     request: { responseURL: config.url }
    };
   }
   return Promise.reject(error);
  });
 }
 request (options) {
  const instance = axios.create();
  options = Object.assign(this.getInsideConfig(), options);
  this.interceptors(instance, options.url);
  return instance(options);
 }
}
export default HttpRequest;
