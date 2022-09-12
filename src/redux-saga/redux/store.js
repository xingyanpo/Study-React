import {createStore, applyMiddleware} from 'redux'
import reducer from './reducer'
import createSagaMiddleware from '@redux-saga/core'

const SagaMiddleWare = createSagaMiddleware()

const store = createStore(reducer, applyMiddleware(SagaMiddleWare))

SagaMiddleWare.run() // saga任务
export default store