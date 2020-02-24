export const deleteTodo = (newTodos) => (dispatch, getState) => {
    const action = {
        type: 'DELETE_TODO',
        payload: newTodos
    }
    dispatch(action)
}