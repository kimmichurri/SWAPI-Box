export const currentCardsReducer = (state = [], action) => {
  switch(action.type) {
    case 'CURRENT_CARDS':
      return action.data

    default:
      return state
  }
}