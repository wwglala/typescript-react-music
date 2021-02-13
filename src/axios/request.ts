import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:3000',
  timeout: 5000
})

instance.interceptors.response.use((config: any) => {
  return config.data;
})

export default instance

export const post = <T>(url: string, params: T): any => {
  return instance({
    url,
    data: params,
    method: 'post',
  })
}
