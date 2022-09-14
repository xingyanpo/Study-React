import { put, call, take, fork } from 'redux-saga/effects'

function* watchSaga2() {
  while (true) {
    // take 监听 组件发来的action
    yield take('get-list2')
    // fork 同步执行
    yield fork(getList2)

  }
}

function* getList2() {
  // 异步处理
  // call函数发异步请求
  let res1 = yield call(getListAction2_1)
  let res2 = yield call(getListAction2_2, res1)


  yield put({
    type: 'change-list2',
    payload: res2
  }
  )
}

function getListAction2_1() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['444', '555', '666'])
    })
  })
}

function getListAction2_2(data) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve([...data, '777', '888', '999'])
    })
  })
}

export default watchSaga2