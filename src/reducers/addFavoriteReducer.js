export const addFavoriteReducer = (state = [], action) => {
  switch(action.type) {
    case 'ADD_FAVORITE':
      return action.id

    default: 
      return state;
  }
}