const CityReducer = (prevState={
  city: '北京'
}, action) => {
  let newState = {...prevState}
  switch(action.type) {
    case 'city':
      newState.city = action.cityName
      return newState
    default :
    return prevState
  }
}

export default CityReducer