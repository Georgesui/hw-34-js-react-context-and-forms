import { Link } from 'react-router-dom';
import Button from '@mui/material/Button'

function TodoListItem ({todos, onDelete, onChangeStatus}) {

	return (<li className={todos.complited ? 'statusTrue' : 'statusFalse'}>
		<Link to={`/todos/${todos.id}`} className='linkForTodo'>
	{todos.task}</Link> <div className='row'>
		<Button variant="contained" size='small' className='buttonForDelete' onClick={() => onDelete(todos.id)}>DELETE</Button>
		< Button variant="contained" size='small' className='buttonToChangeStatus' onClick={() => onChangeStatus(todos.id)}>Change Status</Button>
		</div></li>)
}

export default TodoListItem