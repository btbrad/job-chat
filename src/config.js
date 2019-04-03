/*
 * @Author: btbrad
 * @LastEditors: btbrad
 * @Description: 
 * @Date: 2019-04-04 00:11:54
 * @LastEditTime: 2019-04-04 01:16:13
 */
import axios from 'axios'
import { Toast } from 'antd-mobile'

// 拦截请求
axios.interceptors.request.use(function(config){
  Toast.loading('加载中',0)
  return config
})

// 拦截响应
axios.interceptors.response.use(function(config) {
  Toast.hide()
  return config
})