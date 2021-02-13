import { GET_RECOM } from './constants'
import { post } from '@/axios/request'

export const getRecom = () => async (dispatch: any) => {

  const res = await post('/search/hot/detail', null)
  dispatch({
    type: GET_RECOM,
    payload: res.data
  })
}