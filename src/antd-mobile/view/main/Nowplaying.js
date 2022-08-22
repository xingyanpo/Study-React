import React, { useState, useRef } from 'react'
import axios from 'axios'
import { List, Image, InfiniteScroll } from 'antd-mobile'

export default function Nowplaying(props) {
  const [list, setList] = useState([])
  const [hasMore, setHasMore] = useState(true)
  const count = useRef(0)
  async function loadMore() {
    count.current ++
    setHasMore(false)
    axios({
      url: `https://m.maizuo.com/gateway?cityId=110100&pageNum=${count.current}&pageSize=10&type=1&k=1886067`,
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setList([...list, ...res.data.data.films])
      setHasMore(res.data.data.films.length > 0)
    })
  }
  return (
    <div>
      <List>
        {
          list.map((item, index) =>
            <List.Item
              key={item.name}
              arrow={false}
              onClick={() => {props.history.push(`/detail/${item.filmId}`)}}
              prefix={
                <Image
                  src={item.poster}
                  fit='cover'
                  width={80}
                />
              }
              description={item.synopsis}
            >
              {item.name}
            </List.Item>
          )
        }
      </List>
      <InfiniteScroll loadMore={loadMore} hasMore={hasMore} />
    </div>
  )
}
