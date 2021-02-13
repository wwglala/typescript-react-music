import { GET_RECOM } from './constants'
const initState = {
  recomList: []
}
interface IAction {
  type: string;
  payload: any
}

interface IRecomItem {
  content: string;
  iconUrl: string;
  searchWord: string;
  score: number
}
export interface IState {
  recomList: IRecomItem[];
}
export const reducer = (state: IState = initState, action: IAction) => {
  switch (action.type) {
    case GET_RECOM:
      return {
        ...state,
        recomList: action.payload
      }
    default:
      return state;
  }
}