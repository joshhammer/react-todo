export const addTodoAction = (newTodo) => (dispatch, getState) => {
    const action = {
        type: 'ADD_TODO',
        payload: newTodo,
    }
    dispatch(action)
}