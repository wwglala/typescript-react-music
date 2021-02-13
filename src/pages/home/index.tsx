import Header from '@c/header'
import { useEffect } from 'react'
import Store from './store'
import { observer } from 'mobx-react'
import Slider from '@c/slider'
import Recom from '@c/recom'
import PlayList from '@c/playList'

function Index() {

  const init = async () => {
    await Store.getBannerList('/banner', { type: 2 })
  }

  useEffect(() => {
    init()
  }, [])

  return (
    <>
      <Header></Header>
      <Slider bannerList={Store.bannerList}></Slider>
      <Recom></Recom>
      <PlayList></PlayList>
    </>
  )
}


export default observer(Index)