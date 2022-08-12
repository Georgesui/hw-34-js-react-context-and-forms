import { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';

function TodoForm ({onSubmit}) {
	const [todos, setTodos] = useState({
		task:'',
		complited: false,
	})

	function changeTodo(e){
		setTodos({
			...todos,
			[e.target.name]:e.target.value
		})
	}

	function submitForm(e) {
		e.preventDefault()
		onSubmit(todos)
		setTodos({
			task:'',
			complited: false,
		})
	}

	return (
	<FormControl variant="standard">
		<Input id="outlined-basic" label="Outlined" variant="outlined" name="task" value={todos.task} onChange={changeTodo}/>
		<Button variant="contained" size='large' className='buttonToAdd' onClick={submitForm}>Add Todo</Button>
	</FormControl>)
}

export default TodoForm