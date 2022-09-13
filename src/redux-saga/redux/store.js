import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMiddleWare from 'redux-saga'
import watchSaga from './saga'

const SagaMiddleleWare = createSagaMiddleWare()

const store = createStore(reducer, applyMiddleware(SagaMiddleleWare))

SagaMiddleleWare.run(watchSaga) // saga任务
export default store