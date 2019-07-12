export default function (state = [] ,action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { todoId, text } = action.payload;
      return state.concat(
        { key: todoId, text: text }
      )
    }
    case 'REMOVE_TODO': {
      const { todoId } = action.payload;
      return state.filter(item => item.key !== todoId)
    }
    default:
      return state;
  }
}