import React, {useEffect, useState} from 'react'
import {useHistory} from 'react-router-dom'
import axios from 'axios'

export default function Nowplaying(props) {
  const [list, setList] = useState([])
  useEffect(() => {
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&pageNum=1&pageSize=10&type=1&k=1886067",
      headers:{
          'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
          'X-Host': 'mall.film-ticket.film.list'
      }
  }).then(res=>{
      setList(res.data.data.films)
  })
  }, [])
  const history = useHistory()
  const detailHandle = (id) => {
    // 方法一 编程式
    // window.location.href = `#/detail/${id}`
    // 方法二 声明式
    // props.history.push(`/detail/${id}`)
    // 方法三 引用router内置的useHistory方法
    history.push(`/detail/${id}`)
  }
  return (
    <div>
      {
      list.map((item, index) => 
        <div style={{cursor:'pointer'}} key={item.filmId} onClick={() => {detailHandle(item.filmId)}}>{item.name}</div>
      )
      }
    </div>
  )
}
