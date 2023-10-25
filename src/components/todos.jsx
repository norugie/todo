import { useState } from 'react';
import Todo from './todo';
import Button from './button';

function Todos ({username, todos, onAddTodo, onUpdateTodoStatus, onDeleteTodo, onDeleteAllTodos}) {
    const [title, setTitle] = useState('');

    function handleAddTodo (e) {
        e.preventDefault();
        if(!title) return;

        const id = crypto.randomUUID();
        const newTodo = {
            id: id,
            title: title,
            status: 0
        }

        onAddTodo(newTodo);
        setTitle('');
    }

    return (
        <div className='todolist'>
            <form className='app-form' onSubmit={handleAddTodo}>
                <input type='text' id='app-name' className='app-text' autoComplete='off' value={title} onChange={(e) => setTitle(e.target.value)} />
                <Button>Add Todo</Button>
            </form>
            {todos.length > 0 && <p style={{marginTop: '0'}}><a href='/#' onClick={onDeleteAllTodos}>Clear all TODO items</a></p>}
            {
                todos.length === 0 ? <p style={{textAlign: 'center'}}>Seems you have no todo items set yet, {username}.</p>
                : <ul>
                    {
                        todos.map((todo) => <Todo 
                                                todo={todo} 
                                                key={todo.id} 
                                                onUpdateTodoStatus={onUpdateTodoStatus} 
                                                onDeleteTodo={onDeleteTodo} 
                                            />
                        )
                    }
                </ul>
            }
        </div>
    );
}

export default Todos;