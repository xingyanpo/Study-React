import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Comingsoon() {
  const [list, setList] = useState([])
  useEffect(() => {
   axios.get('/api/mmdb/movie/v3/list/hot.json?ct=%E4%B8%8A%E6%B5%B7&ci=10&channelId=4').then(res => {
    console.log(res)
    setList(res.data.data.hot)
   })
  }, [])
  return (
    <div>
      {
        list.map((item, index) => 
        <li key={item.id}>{item.nm}</li>
        )
      }
    </div>
  )
}
