import {createStore} from 'redux'

const reducer = (prevState={show: true}, action) => {
  console.log(action)
  let newState = {...prevState}
  switch(action.type) {
    case 'hide':
      newState.show = false
      return newState
    case 'show':
      newState.show = true
      return newState
    default :
    return prevState
  }
}

const store = createStore(reducer)
export default store