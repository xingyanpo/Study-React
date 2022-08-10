import React,{useReducer} from 'react'

// 处理函数
const reducer = (prevState, action) => {
  console.log(prevState, action)
  let newState = {...prevState}
  switch(action.type) {
    case 'minus':
      newState.count--
      return newState

    case 'add':
      newState.count ++
      return newState

    default:
      return prevState
  }
}
// 外部的对象
const intialState = {
  count: 0
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'minus'
        })
      }}>-</button>
      <div>{state.count}</div>
      <button onClick={() => {
        dispatch({
          type: 'add'
        })
      }}>+</button>
    </div>
  )
}
