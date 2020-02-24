import { combineReducers } from 'redux'
import { todos } from './todoReducer'

export const rootReducer = combineReducers({
    todos,
})

