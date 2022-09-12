function *watchSaga () {
  while(true) {
    // take 监听 组件发来的action
    yield take('get-list1')
    // fork 同步执行
    yield fork(getList1)
  }
}

function getList1() {
  // 异步处理
  // call函数发异步请求
  let res = yield call()

  yield put({
    'type': 'change-list1',
     'payload': 'change-list1'
  }
  )
}

function getLIstAction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(['111', '222', '333'])
    })
  })
}