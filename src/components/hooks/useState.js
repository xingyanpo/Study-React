import React, {useState} from 'react'

export default function App() {
  const [name, setName] = useState('')
  const [list, setList] = useState(['1', '2', '3'])
  const del_list = (index) => {
    let new_list = [...list]
    new_list.splice(index,1)
    setList(new_list)
  }
  return (
    <div>
      <div>{'TodoList'}</div>
      <input onChange={(event) => {
        setName(event.target.value)
      }} value={name}></input>
      <button onClick={()=> {
        setList([...list,name])
        setName('')
      }}>Push</button>
      <ul>
        {
        list.map((item, index) => 
          <li key={index + item}>{item}
          <button key={index + item} onClick={() => del_list(index)}>delete</button>
          </li>
        )
        } 
      </ul>
    </div>
  )
}
