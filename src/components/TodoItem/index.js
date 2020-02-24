import React from 'react'
import '../Todo/index.scss'

const TodoItem = (props) => {
    const toggleComplete = () => {
        props.killTodo(props.todo.id)
    }

    return(
        <li 
        className={ props.todo.completed ? 'completed-todo' : ''}
        onClick={ toggleComplete }>{props.todo.title}
        </li>
    )
}

export default TodoItem