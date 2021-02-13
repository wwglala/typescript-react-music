import { createStore, applyMiddleware, combineReducers } from 'redux'
import { reducer } from './reducer'
import { reducer as playListReducer } from '../components/playList/store/reducer'
import thunk from 'redux-thunk'

const store = createStore(combineReducers({
  reducer,
  playListReducer
}), applyMiddleware(thunk))

export { store }