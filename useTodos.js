import { useEffect, useReducer } from 'react'
import { todoReducer } from "../08-useReducer/todoReducer"

const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {
    const [todos, dispatch] = useReducer(todoReducer, [], init)
    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    const handleTodoAdd = (todo) => {
        const action = {
            type: 'add',
            payload: todo
        }
        dispatch(action)
    }

    const handleDelete = (id) => {
        dispatch({
            type: 'delete',
            payload: id
        })
    }
    const handleToggleTodo = (id) => {
        dispatch({
            type: 'toggle',
            payload: id
        })
    }

    const allTodos = todos.length;
    
    const pendingTodos = todos.filter(todo => !todo.done).length;



    return {
        todos,
        handleDelete,
        handleTodoAdd,
        handleToggleTodo,
        allTodos,
        pendingTodos
    }
}
