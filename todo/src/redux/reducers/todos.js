export default function (state = [] ,action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { todoId, text } = action.payload;
      return state.concat(
        { key: todoId, text: text }
      )
    }
    default:
      return state;
  }
}