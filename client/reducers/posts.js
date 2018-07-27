export default function posts(state = [], action) {
  if (action.type !== 'INCREMENT_LIKES' && action.type !== 'DECREMENT_LIKES') {
    return state
  }

  const i = action.index
  let likesCount = 0

  likesCount = action.type === 'INCREMENT_LIKES' ? state[i].likes + 1 : state[i].likes - 1

  return [
    ...state.slice(0, i),
    { ...state[i], likes: likesCount },
    ...state.slice(i + 1)
  ]
}
