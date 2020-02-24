const initialState = {
    todos: [
        {
            id: 1,
            title: 'my_first_todo',
            completed: false,
        },
        {
            id: 2,
            title: 'my_second_todo',
            completed: false,
        }
    ]
}

export const todos = (state=initialState, action) => {
    if(action.type === 'ADD_TODO') {
        return {
            ...state,
            todos: [...state.todos, action.payload]
        }
    }
    if(action.type === 'UPDATE_TODOS') {
        return {
            ...state,
            todos: [...action.payload]
        }
    }
    if(action.type === 'DELETE_TODO') {
        return {
            ...state,
            todos: [...action.payload]
        }
    }
    return state
}