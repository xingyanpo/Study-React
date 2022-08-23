import React, { useState } from 'react'
import { Map } from 'immutable'

var obj = {
  name:"小明",
  age:100
}

var oldobj = Map(obj)
var newobj = oldobj.set('name', '张三')
var old_type_obj = oldobj.toJS()
var new_type_obj = newobj.toJS()

console.log(oldobj, newobj,old_type_obj, new_type_obj)

export default function App() {
  const info = useState({

  })
  return (
    <div>
      
    </div>
  )
}
