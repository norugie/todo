import { useState } from 'react';
import './App.css';
import Header from './components/header';
import InitialGreeting from './components/initialgreeting';
import Todos from './components/todos';
import Footer from './components/footer';

function App () {
    const [username, setUsername] = useState(null);
    const [todos, setTodos] = useState([]);

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

    return (
        <div className='app'>
            <Header username={username} />
            <div className='app-body'>
                {
                    !username ? <InitialGreeting onSetUsername={handleSetUsername} />
                    : <Todos username={username} todos={todos} onAddTodo={handleAddTodo} onUpdateTodoStatus={handleUpdateTodoStatus} onDeleteTodo={handleDeleteTodo} />
                }
            </div>
            <Footer />
        </div>
    );
}

export default App;