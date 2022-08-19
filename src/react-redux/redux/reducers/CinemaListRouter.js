const CinemaListReducer = (prevState={
  cinemas: []
}, action) => {
  let newState = {...prevState}
  switch(action.type) {
    case 'cinemaList':
      newState.cinemas = action.cinemas
      return newState
    default :
    return prevState
  }
}

export default CinemaListReducer