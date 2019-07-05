let todoId = 0

export const AddTodoAction = (text) => ({
  type: 'ADD_TODO',
  payload: {
    todoId: ++todoId,
    text
  }
});