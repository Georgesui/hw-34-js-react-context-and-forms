import TodoListItem from './TodoListItem';

export default function TodoList({ todos, onDelete, onChangeStatus }) {
	return (
		<ul className='list'>
			{
				todos.map((todo) => {
					return <TodoListItem
						todos={todo}
						key={todo.id}
						onDelete={onDelete}
						onChangeStatus={onChangeStatus}></TodoListItem>
				})
			}
		</ul >
	)
}
