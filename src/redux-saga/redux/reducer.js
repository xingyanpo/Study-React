function reducer(prevState = {
  list1: []
}, action = {}) {
  var newState = {...prevState}
  switch(action.type) {
    case 'change-list':
      newState.list1 = action.payload
  default:
    return prevState
  }
}

export default reducer