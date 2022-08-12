import { getTodos, deleteTodo, addTodosToDb, updateTodoRequest, getTodoUrl} from '../../components/TodoManagement/Todo-api';
export const SET_TODOS = '[Todolist] set todos'
export const ADD_TODOS = '[Todolist] add todos'
export const DELETE_TODO = '[Todolist] delete todo'
export const CHANGE_TODO = '[Todolist] change todo'

export function setTodosAction (todos) {
	return {
		type: SET_TODOS,
		payload: todos,
	}
}

export function addTodosAction (todo) {
	return {
		type: ADD_TODOS,
		payload: todo,
	}
}

export function deleteTodoAction (id) {
	return {
		type: DELETE_TODO,
		payload: id ,
	}
}

export function changeTodoAction (payload) {
	return {
		type: CHANGE_TODO,
		payload: payload,
	}
}

export function fetchInitTodos() {
	return async function (dispatch) {
		try {
			const todos = await getTodos();
			dispatch(setTodosAction(todos))
		} catch (e) {
			console.warn(e)
		}
	}
}

export function fetchAddTodos(todo) {
	return async function (dispatch) {
		try {
			const addedTodos = await addTodosToDb(todo);
			dispatch(addTodosAction(addedTodos))
		} catch (e) {
			console.warn(e)
		}
	}
}

export function fetchDeleteTodos(id) {
	return async function (dispatch) {
		try {
			await deleteTodo(id);
			dispatch(deleteTodoAction(id))
		} catch (e) {
			console.warn(e)
		}
	}
}

export function fetchUpdateTodos(id) {
	return async function (dispatch, getState) {
		try {
			const {todos} = getState();
			const todo = todos.find((element)=> element.id === id)
			const updatedTodo = {...todo, complited: !todo.complited}

			await updateTodoRequest(id, updatedTodo)
			dispatch(changeTodoAction(updatedTodo))
		} catch (e) {
			console.warn(e)
		}
	}
}

export function fetchTodoDetails(id) {
	return async function () {
		try {
			return getTodoUrl(id)
		}
		catch(er) {
			console.warn(er)
		}
		}
}

export function fetchUpdateTodoDetails (id,todo) {
	return async function () {
		return updateTodoRequest(id,todo)
	}
}