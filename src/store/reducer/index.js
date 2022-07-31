import {SET_TODOS, DELETE_TODO, ADD_TODOS, CHANGE_TODO} from '../actions'

const initialState = {
	todos: []
}

export default function rootReducer(state=initialState, {type,payload}) {
	switch(type){
		case SET_TODOS:
			return{
				...state,
				todos: payload
			}
			case ADD_TODOS:
			return{
				...state,
				todos: [...state.todos, payload]
			}
			case DELETE_TODO:
			return{
				...state,
				todos: state.todos.filter((todo)=> todo.id !== payload)
			}
			case CHANGE_TODO:
			return{
				...state,
				todos: state.todos.map((todo)=>{
					if (todo.id === payload.id) {
						console.log(payload)
						return payload
					}
					return todo
				})
			}
			default:
			 		return state
				}
	}