import React, { useEffect } from 'react';
import TodoList from './TodoList'
import TodoForm from './TodoForm';
import { fetchInitTodos, fetchAddTodos, fetchDeleteTodos, fetchUpdateTodos } from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';

const Todos = () => {
	const todos = useSelector((state) => state.todos)
	const dispatch = useDispatch()

	useEffect(() => {
		dispatch(fetchInitTodos())
	}, [])

	async function addToDoList(todo) {
		dispatch(fetchAddTodos(todo))
	}

	async function deleteElement(id) {
		dispatch(fetchDeleteTodos(id))
	}

	async function updateStatus(id) {
		dispatch(fetchUpdateTodos(id))
	}

	return (
		<div className='container'>
			<TodoForm onSubmit={addToDoList}></TodoForm>
			<TodoList todos={todos} onDelete={deleteElement} onChangeStatus={updateStatus}></TodoList>
		</div >
	)
}

export default Todos