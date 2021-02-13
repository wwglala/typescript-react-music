import { GET_PLAYLIST } from './constants'
interface IState {

}
const initState: IState = {
  playList: []
}

interface IAction {
  type: string;
  payload: any
}

export const reducer = (state: IState = initState, action: IAction): IState => {
  switch (action.type) {
    case GET_PLAYLIST:
      return {
        ...state,
        playList: action.payload
      }
    default:
      return state
  }
}