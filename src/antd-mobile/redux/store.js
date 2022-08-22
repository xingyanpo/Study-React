import {createStore, combineReducers, applyMiddleware} from 'redux'
import reduxThunk from 'redux-thunk'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListRouter'
import reduxPromise from 'redux-promise'

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})



const store = createStore(reducer, applyMiddleware(reduxThunk, reduxPromise))
export default store