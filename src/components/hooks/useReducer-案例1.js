import React,{useReducer, useContext} from 'react'
const GlobalContext = React.createContext()

// 处理函数
const reducer = (prevState, action) => {
  console.log(prevState, action)
  let newState = {...prevState}
  switch(action.type) {
    case 'child1':
      newState.child1Count ++
      return newState

    case 'child2':
      newState.child2Count --
      return newState

    default:
      return prevState
  }
}
// 外部的对象
const intialState = {
  child1Count: 0, 
  child2Count: 100,
}

export default function App() {
  const [state, dispatch] = useReducer(reducer, intialState)
  return (
    <GlobalContext.Provider value={
      {state,
       dispatch}
    }>
      <div>
        <Father></Father>
        <Child1></Child1>
        <Child2></Child2>
      </div>
    </GlobalContext.Provider>
  )
}

function Father () {
  const {dispatch} = useContext(GlobalContext)
  return (
    <div>
      <button onClick={() => {
        dispatch({
          type: 'child1'
        })
      }}>改变child1</button>
      <button onClick={() => {
        dispatch({
          type: 'child2'
        })
      }}>改变child2</button>
    </div>
  )
}

function Child1 () {
  const {state} = useContext(GlobalContext)
  return (
    <div>
      {state.child1Count}
    </div>
  )
}

function Child2 () {
  const {state} = useContext(GlobalContext)
  return (
    <div>
      {state.child2Count}
    </div>
  )
}