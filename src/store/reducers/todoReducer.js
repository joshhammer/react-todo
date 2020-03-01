const initialState = {
    todos: [
        {
            id: 1,
            title: 'remember to forget Cynthia',
            completed: false,
        },
        {
            id: 2,
            title: `book table at Dorsia's`,
            completed: false,
        },
        {
            id: 3,
            title: `take pills`,
            completed: false,
        },
        {
            id: 4,
            title: `return videotapes`,
            completed: false,
        },
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