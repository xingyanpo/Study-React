import React,{useContext, useEffect, useState} from 'react'
import axios from 'axios'
const GlobalContext = React.createContext()

export default function App() {
  const [list, setList] = useState([])
  const [info, setInfo] = useState('')
  useEffect(() => {
    axios({
      url: 'https://m.maizuo.com/gateway?cityId=310100&pageNum=1&pageSize=10&type=1&k=9424449',
      method: 'get',
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16590645011763431967358977","bc":"310100"}',
        'X-Host': 'mall.film-ticket.film.list'
      }
    }).then(res => {
      setList(res.data.data.films)
    })
  }, [])

  return (
      <GlobalContext.Provider value={{
        infomation: info,
        changeInfomation: (value) => {
          setInfo(value)
        }
       }}>
      <div>
        <div className='films'>
          <div className='wrapper-films' style={{ height: '100vh' }}>
            <div className='content'>
              {
                list.map((item, index) =>
                  <Item infomation={item.synopsis} filemType={item.filmType.name} name={item.name} key={item.filmId} grade={item.grade} nation={item.nation} runtime={item.runtime} poster={item.poster} />
                )
              }
            </div>
          </div>
          <Detaile />
        </div>
      </div>
      </GlobalContext.Provider>
    )
}

function Detaile(props) {
  const value = useContext(GlobalContext)
  return (
    <div style={{ width: '50%', height: '50%', background: '#FFF', position: 'fixed', left: '0', bottom: '0', boxShadow: '3px -3px 5px #DDD' }}>{value.infomation}</div>
  ) 
}

function Item(props) {
  const value = useContext(GlobalContext)
  return (
    <div style={{ display: 'flex', paddingBottom: '20px', boxSizing: 'border-box' }} onClick={() => {
      console.log(props.infomation)
      value.changeInfomation(props.infomation)
    }}>
      <img src={props.poster} style={{ width: '40%' }} alt={props.name}></img>
      <div style={{ padding: '5px', boxSizing: 'border-box' }}>
        <h4 >{props.name}<span style={{ background: '#CCC', borderRadius: '4px', padding: '0 3px', marginLeft: '5px', color: '#666' }}>{props.filemType}</span></h4>
        {!!props.grade && <p>评分：{props.grade}分</p>}
        <p style={{ fontSize: '14px' }}>{props.nation} | {props.runtime}分钟</p>
      </div>
    </div>
  )
}
