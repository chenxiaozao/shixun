import request from '@/utils/request'

// 3. 请求参数： username 和 password
interface RegisterData {
  username: string
  password: string
}

// 注册接口
export const registerAPI = (data: RegisterData) => {
  // 1. 请求方式： post
  // 2. 请求地址： /h5/user/register
  return request.post('/h5/user/register', data)
}

// 登录接口
export const loginAPI = (data: RegisterData) => {
  // 1. 请求方式： post
  // 2. 请求地址： /h5/user/login
  return request.post('/h5/user/login', data)
}
