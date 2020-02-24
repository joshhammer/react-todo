import React from 'react'
import '../Todo/index.scss'

const TodoItem = (props) => {
    
    const toggleComplete = () => {
        props.killTodo(props.todo.id)
    }

    const removeTodo = () => {
        props.removeTodo(props.todo.id)
    }

    return(
        <div className='list-element'>
            <li 
            className={ props.todo.completed ? 'completed-todo' : ''}
            onClick={ toggleComplete }>{props.todo.title}
            </li>
            <button className='delete-btn' onClick={ removeTodo } >Delete</button>
        </div>
    )
}

export default TodoItem