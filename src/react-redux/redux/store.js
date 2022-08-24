import { createStore, combineReducers, applyMiddleware } from 'redux'
import reduxThunk from 'redux-thunk'
import CityReducer from './reducers/CityReducer'
import TabbarReducer from './reducers/TabbarReducer'
import CinemaListReducer from './reducers/CinemaListRouter'
import reduxPromise from 'redux-promise'

import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['CityReducer']
}

const reducer = combineReducers({
  CityReducer,
  TabbarReducer,
  CinemaListReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


const store = createStore(persistedReducer, applyMiddleware(reduxThunk, reduxPromise))
let persistor = persistStore(store)

export { store, persistor }