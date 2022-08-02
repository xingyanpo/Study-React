import React from 'react'

export default function SideBar(props) {
  console.log(props)
  let style = {width:'30%', backgroundColor:props.backgroundColor, position: 'fixed' ,top: '50%', transform: 'translateY(-50%)'}
  let new_style
  switch (props.position) {
    case 'left':
      new_style = {...style, left: 0}
      break;
    case 'right': 
      new_style = {...style, right: 0}
      break;
    default:
      new_style = {...style, left: 0}
      break;
  }
  return (
    <div style={new_style}>
      <ul>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
        <li>1</li>
      </ul>
    </div>
  )
}

