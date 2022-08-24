import { fromJS } from "immutable"

const TabbarReducer = (prevState={
  show: true
}, action) => {
  const newState = fromJS(prevState)
  switch(action.type) {
    case 'hide':
      newState.get('show', false)
      return newState.toJS()
    case 'show':
      newState.get('show', true)
      return newState.toJS()
    default :
    return prevState
  }
}

export default TabbarReducer