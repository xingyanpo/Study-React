import { observable, configure, action, runInAction } from "mobx";
import axios from 'axios'

// const store = observable({
//   isTabbarShow: true,
//   list: [], 
//   cityName: '北京'
// })

configure({
  enforceActions: 'always'
})

// const store = observable({
//   isTabbarShow: true,
//   list: [], 
//   cityName: '北京',
//   changeShow(bool) {
//     this.isTabbarShow = bool
//   }
// }, {
//   changeShow: action
// })

class Store {
  @observable isTabbarShow = true
  @observable list = []
  @observable cityName = '北京'

  @action changeShow(bool) {
    this.isTabbarShow = bool
  }
  @action async getList() {
    const list = await axios({
      url: "https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=7406159",
      method: "get",
      headers: {
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.0.4","e":"16395416565231270166529","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=> {
      return res.data.data.cinemas
    })

    runInAction(() => {
      this.list = list
    })
  }
}

let store = new Store()

export default store