import { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header';
import ClearValues from './components/clearvalues';
import InitialGreeting from './components/initialgreeting';
import Todos from './components/todos';
import Footer from './components/footer';

function App () {
    const [username, setUsername] = useState(localStorage.getItem('username') !== 'null' ? localStorage.getItem('username') : null);
    const [todos, setTodos] = useState(localStorage.getItem('todos') !== 'null' || !== '[]' ? JSON.parse(localStorage.getItem('todos')) : []);

    function handleSetUsername (name) {
        setUsername(name);
    }

    function handleAddTodo (todo) {
        setTodos((todos) => [...todos, todo]);
    }

    function handleUpdateTodoStatus (id) {
        setTodos((todos) => todos.map((todo) => todo.id === id ? {...todo, status: !todo.status} : todo));
    }

    function handleDeleteTodo (id) {
        setTodos((todos) => todos.filter((todo) => todo.id !== id));
    }

    function handleDeleteAllTodos () {
        setTodos([]);
    }

    function handleClearAll () {
        setTodos([]);
        setUsername(null);
    }

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));
        localStorage.setItem('username', username);
    }, [username, todos]);
    
    return (
        <div className='app' style={!username ? {justifyContent: 'center'} : {}}>
            <Header username={username} />
            <div className='app-body'>
                {username && <ClearValues onClearValues={handleClearAll} />}
                {
                    !username ? 
                        <InitialGreeting onSetUsername={handleSetUsername} />
                    : <Todos 
                        username={username} 
                        todos={todos} 
                        onAddTodo={handleAddTodo} 
                        onUpdateTodoStatus={handleUpdateTodoStatus} 
                        onDeleteTodo={handleDeleteTodo}
                        onDeleteAllTodos={handleDeleteAllTodos}
                    />
                }
            </div>
            <Footer />
        </div>
    );
}

export default App;
