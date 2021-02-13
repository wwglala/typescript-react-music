import { GET_PLAYLIST } from './constants'
import { post } from '@/axios/request'
export const get_playList = () => async (dispatch: Function) => {
  let res = await post('/personalized', { limit: 6 })
  dispatch({
    type: GET_PLAYLIST,
    payload: res.result
  })
}