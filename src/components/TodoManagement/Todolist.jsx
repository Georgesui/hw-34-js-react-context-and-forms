import React, { useEffect } from 'react';
import UserList from './UserList'
import UserForm from './UserForm';
import {fetchInitTodos, fetchAddTodos, fetchDeleteTodos, fetchUpdateTodos} from '../../store/actions'
import { useSelector, useDispatch } from 'react-redux';

const TodoList = () => {
	const todos = useSelector((state)=> state.todos)
	const dispatch = useDispatch()
	
	useEffect(()=>{
		dispatch(fetchInitTodos())
},[])

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
			<UserForm onSubmit={addToDoList}></UserForm>
			<UserList todos={todos} onDelete={deleteElement} onChangeStatus={updateStatus}></UserList>
		</div >
	)
}

export default TodoList