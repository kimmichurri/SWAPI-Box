export const hasError = (message) => ({
  type: 'HAS_ERROR',
  message
})

export const updateData = (data) => ({
  type: 'UPDATE_DATA',
  data
})

export const currentCards = (data) => ({
  type: 'CURRENT_CARDS',
  data
})

export const isLoading = (boolean) => ({
  type: 'IS_LOADING',
  isLoading: boolean
})

