export default function (state = null ,action) {
  switch (action.type) {
    case 'ADD_TODO': {
      const { todoId, text } = action.payload;
      return {
        ...state,
        [todoId]: { text }
      }
    }
    default:
      return state;
  }
}