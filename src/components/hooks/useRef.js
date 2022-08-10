import React,{useRef, useState} from 'react'

export default function App() {
  let inputRef = useRef()
  let count = useRef(0)
  let [mycount, setMycount] = useState(0)
  let [inputValue,setInputValue] = useState('')
  return (
    <div>
      <h3>函数式组件中使用Ref</h3>
      <input ref={inputRef} onChange={() => {
        console.log(inputRef.current.value)
        setInputValue(inputRef.current.value)

      }}></input>
      <div>{inputValue}</div>
      <h3>Ref 在一定程度上可以当做状态使用</h3>
      <button onClick={() => {
        setMycount(mycount + 1)
        count.current++ 
      }}>add</button>
      <div>{count.current} - {mycount}</div>
    </div>
  )
}
