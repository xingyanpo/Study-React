import React, { Component } from 'react'
import './css/styleComponent.css'

export default class Todolist extends Component {
  style = {display:'none'}
  inputRef = React.createRef()
  state = {
    list: [{id: 1, value: '111'}, {id: 2, value: '222'}, {id:3, value: '333'}]
  }
  render() {
    return (
      <div>
        <input ref={this.inputRef} id='text-input'></input>
        <button onClick={this.addHandle}>add</button>
        <ul>{
          this.state.list.map((item, index) => 
            // <li key={item.id}>{item.value}<button onClick={this.deleteHandle.bind(index)}>delete</button></li>
            <li key={item.id}><span dangerouslySetInnerHTML={{
              __html: item.value
            }}></span><button onClick={this.deleteHandle.bind(index)}>delete</button></li>
          )
        }</ul>
        {/* {this.state.list.length === 0 ? <div>暂无待办事项</div> : null} */}
        {/* {this.state.list.length === 0 && <div>暂无待办事项</div>} */}
        {/* <div style={this.state.list.length === 0 ? null : this.style}>暂无待办事项</div> */}
        <div className={this.state.list.length === 0 ? '' : 'hidden'}>暂无待办事项</div>
      </div>
    )
  }

  addHandle = () => {
    let new_id = this.state.list.length === 0 ? 1 : this.state.list[this.state.list.length - 1].id + 1
    let copy_list = [...this.state.list]
    copy_list.push({id: new_id, value: this.inputRef.current.value})
    this.setState({
      list: copy_list
    })
    this.inputRef.current.value = ''
  }

  deleteHandle = (index) => {
    let new_list = [...this.state.list]
    new_list.splice(index, 1)
    this.setState({
      list: new_list
    })
  }
}