function Todo ({todo, onUpdateTodoStatus, onDeleteTodo}) {
    return (
        <li>
            <input type='checkbox' value={todo.status} onChange={() => onUpdateTodoStatus(todo.id)} />
            <span style={todo.status ? {'textDecoration': 'line-through'} : {}}>
                {todo.title}
            </span>
            <button style={{'color': 'red'}} onClick={() => onDeleteTodo(todo.id)}>X</button>
        </li>
    );
}

export default Todo;