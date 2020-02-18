import React from 'react'
import List from '../List'

import './index.scss'

class Todo extends React.Component {
    constructor(props) {
        super(props)

        this.todo_id = 3
        this.state = {
            currentTodo: {
                id: this.todo_id,
                title: '',
                completed: false,
            },
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
    }

    handleChange = (event) => {
        this.setState({
            currentTodo: {
                ...this.state.currentTodo,
                title: event.target.value
            }

        })
    }

    addTodo = (event) => {
        event.preventDefault();
        this.setState({
            todos: [...this.state.todos, this.state.currentTodo],
            currentTodo: {
                ...this.state.currentTodo,
                title: '',
                id: this.todo_id+=1
            }
        })
    }

    toggleCompleted = (id) => {
        const newTodos = this.state.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
                return todo
            }
            return todo
        })
        console.log(newTodos)
        this.setState({
            todos: newTodos,
        })
    }

    render() {
        return(
            <div className='todo-wrapper'>
                <div className='todo-container'>
                    <h1>React Todo App</h1>
                    <form onSubmit={this.addTodo}>
                        <input className='add-todo-field' type="text" placeholder='Add a new todo' 
                        onChange={this.handleChange} value={this.state.currentTodo.title} />
                        <button className='add-todo-btn' type='submit'>Add Todo</button>
                    </form>
                    <List todos={this.state.todos} killTodo={this.toggleCompleted}/>
                    {/* <ul className='todos-list'>
                        {
                            this.state.todos.map((todo, index) => {
                                return <li key={index} onClick={this.toggleCompleted}>{todo.title}</li>
                            })
                        }
                    </ul> */}
                </div>
            </div>
        )
    }
}
export default Todo