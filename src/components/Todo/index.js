import React from 'react'
import List from '../List'
import { connect } from 'react-redux'
import { addTodoAction } from '../../store/actions/addTodo'
import { updateTodos } from '../../store/actions/updateTodos'
import { deleteTodo } from '../../store/actions/deleteTodo'

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
        this.props.dispatch(addTodoAction(this.state.currentTodo))
        this.setState({
            currentTodo: {
                ...this.state.currentTodo,
                title: '',
                id: this.todo_id += 1
            }
        })
    }

    deleteTodo = (id) => {
        const newTodos = this.props.todos.filter(todo => {
            if (todo.id !== id) {
                return todo
            }
        })
        this.props.dispatch(deleteTodo(newTodos))
    }

    toggleCompleted = (id) => {
        const newTodos = this.props.todos.map(todo => {
            if(todo.id === id){
                todo.completed = !todo.completed
                return todo
            }
            return todo
        })
        this.props.dispatch(updateTodos(newTodos))
    }

    render() {
        return(
            <div className='todo-wrapper'>
                <div className='header'>
                    <h1 className='app-title'>React Todo App</h1>
                    <form onSubmit={this.addTodo}>
                        <input className='add-todo-field' type="text" placeholder='Add a new todo' 
                        onChange={this.handleChange} value={this.state.currentTodo.title} />
                        <button className='add-todo-btn' type='submit'>+</button>
                    </form>
                </div>
                    <List todos={this.props.todos} killTodo={this.toggleCompleted} removeTodo={this.deleteTodo}/>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        todos: state.todos.todos
    }
}

export default connect(mapStateToProps)(Todo)