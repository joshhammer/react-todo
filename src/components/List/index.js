import React from 'react'
import TodoItem from '../TodoItem'
import '../Todo/index.scss'

const List = (props) => {
    return(
        <ul className='todos-list'>
            {
                props.todos.map((todo, index) => {
                    return <TodoItem 
                    todo={todo} 
                    key={index}
                    killTodo={props.killTodo}
                    removeTodo={props.removeTodo}
                    />
                })
            }
        </ul>
    )
}

export default List