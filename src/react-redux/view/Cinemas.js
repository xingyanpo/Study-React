import React, { Component } from 'react'
import CinemaListActionCreator from '../redux/actionCreator/CinemaListActionCreator'
import { connect } from 'react-redux'

class Cinemas extends Component {
  componentDidMount() {
    if (this.props.list.length === 0){
      this.props.CinemaListActionCreator()
    } 
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <button onClick={() => {
          this.props.history.push('/city')
        }}>{this.props.cityName}</button>
        <div>
          {
            this.props.list.map((item, index) => 
            <div key={item.name}>{item.name}</div>
            )
          }
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    list: state.CinemaListReducer.cinemas,
    cityName: state.CityReducer.city
  }
}

const mapDispatchToProps = {
  CinemaListActionCreator
}

export default connect(mapStateToProps, mapDispatchToProps)(Cinemas)