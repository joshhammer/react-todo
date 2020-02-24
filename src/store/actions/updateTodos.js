export const updateTodos = (newTodos) => (dispatch, getState) => {
    const action = {
        type: 'UPDATE_TODOS',
        payload: newTodos,
    }
    dispatch(action)
}