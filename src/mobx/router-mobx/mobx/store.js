import { observable, configure, action } from "mobx";

// const store = observable({
//   isTabbarShow: true,
//   list: [], 
//   cityName: '北京'
// })

configure({
  enforceActions: 'always'
})

const store = observable({
  isTabbarShow: true,
  list: [], 
  cityName: '北京',
  changeShow(bool) {
    this.isTabbarShow = bool
  }
}, {
  changeShow: action
})

export default store