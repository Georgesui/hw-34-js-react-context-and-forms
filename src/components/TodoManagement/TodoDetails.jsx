import React, {useEffect, useState} from 'react';
import {Link, useParams} from "react-router-dom";
import {Button} from "@mui/material";
import { useDispatch } from 'react-redux';
import {fetchTodoDetails, fetchUpdateTodoDetails} from '../../store/actions'
import { Formik, Form, Field, ErrorMessage  } from 'formik';
import { object, string, boolean } from 'yup';
import SubmitButton from '../Form/SubmitButton/SubmitButton'

export default function TodoDetails	() {
	let {id} = useParams()

	const [todo, setTodo] = useState({
		task: '',
		complited: false
	})

	const dispatch = useDispatch()
	
	useEffect(() => {
		async function fetchInitialTodo() {
			const initialTodo = await dispatch(fetchTodoDetails(id)) 
			setTodo(initialTodo)
		}
		fetchInitialTodo()
	},[id])

	function onSubmit(value) {
		dispatch(fetchUpdateTodoDetails(id,value))
	}

	let todoSchema = object({
		task: string().required().max(25),
		complited: boolean().required()
	})

	return(
		<>
		<h2>User # {id} details</h2>
		<Formik initialValues={todo} 
				enableReinitialize={true} 
				onSubmit={onSubmit}
				validationSchema={todoSchema}
		>
					<Form>
						<Link to='/'>
						<Button variant="contained" className='buttonBack'>Back to the list</Button>
						</Link>
						<Field type="text" name='task'/>
						<Field type="checkbox" name='complited'/>
						<SubmitButton></SubmitButton>
						<ErrorMessage name='task' component='div' />
					</Form>
		</Formik>
		</>
	)
}