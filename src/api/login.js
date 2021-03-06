import request from '@/utils/request'

// 登录方法
export function login(userName, password, code, realKey, time) {
  const data = {
    userName,
    password,
    code,
    realKey,
    time
  }
  return request({
    url: '/system/login',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 注册方法
export function register(data) {
  return request({
    url: '/system/register',
    headers: {
      isToken: false
    },
    method: 'post',
    data: data
  })
}

// 获取用户详细信息
export function getInfo() {
  return request({
    url: '/system/info',
    method: 'get'
  })
}

// 退出方法
export function logout() {
  return request({
    url: '/system/logout',
    method: 'get'
  })
}

// 获取验证码
export function getCodeImg() {
  return request({
    url: '/system/captcha/'+Date.now(),
    method: 'get'
  })
}

