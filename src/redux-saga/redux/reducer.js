function reducer(prevState = {
  list1: []
}, action = {}) {
  var newState = { ...prevState }
  switch (action.type) {
    case 'change-list1':
      newState.list1 = action.payload
      return newState
    default:
      return prevState
  }
}

export default reducer