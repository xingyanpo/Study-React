import { take, fork, put, call } from 'redux-saga/effects'

function* watchSaga1() {
  while (true) {
    // take 监听 组件发来的action
    yield take('get-list1')
    // fork 同步执行
    yield fork(getList)
  }
}

function *getList() {
  // 异步处理
  // call函数发异步请求
  let res = yield call(getListAction)

  yield put({
    type: 'change-list1',
    payload: res
  }
  )
}

function getListAction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['111', '222', '333'])
    })
  })
}

export default watchSaga1