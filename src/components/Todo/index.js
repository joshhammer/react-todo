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

        this.todo_id = 5
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
        const newTodos = this.props.todos
        .filter(todo => todo.id !== id)
        .map(todo => todo)
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
                    <h1 className='app-title'>a todo list with React & Redux</h1>
                    <form className='add-todo-form' onSubmit={this.addTodo}>
                        <input className='add-todo-field' type="text" placeholder='Add a new todo..' 
                        onChange={this.handleChange} value={this.state.currentTodo.title} />
                        <button className='add-todo-btn' type='submit'>
                            <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="plus" className="svg-inline--fa fa-plus fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z"></path></svg>
                        </button>
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