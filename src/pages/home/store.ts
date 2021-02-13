import { makeAutoObservable, toJS } from 'mobx'
import { post } from '@/axios/request'

class Store {
  constructor() {
    makeAutoObservable(this)
  }

  bannerList = []
  getBannerList = async <T>(url: string, params: T) => {
    let res = await post(url, params)
    this.bannerList = res.banners
  }
}

export default new Store()