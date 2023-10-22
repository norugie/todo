import { useState } from 'react';
import './App.css';
import images from './assets/data/images';

const todos = [
    {
        id: 1,
        title: 'Task 1',
        content: 'Task 1 content',
        status: 'ongoing'
    }
]

function App () {
    const [username, setUsername] = useState('Venn');
    const [tasks, setTasks] = useState(todos);

    return (
        <div className='app'>
            <Header username={username} />
            <div className='app-body'>
                {
                    !username ? <InitialGreeting />
                    : <Todos username={username} todos={tasks} />
                }
            </div>
            <Footer />
        </div>
    );
}

function Header ({username}) {
    return (
        <header className='app-header'>
            <img src={images[Math.floor(Math.random()*images.length)]} className='app-logo' alt='logo' />
            {
                !username ? <p>Welcome! What should we call you?</p>
                : <p>Hey there, {username}</p>
            }
        </header>
    );
}

function InitialGreeting () {
    return (
        <form className='app-form'>
            <input type='text' id='app-name' className='app-text' autoComplete='off' required/>
            <Button>I'm ready!</Button>
        </form>
    );
}

function Todos ({username, todos}) {
    console.log(todos.length);
    return (
        <div className='tasklist'>
            {
                todos.length === 0 ? <p>Seems you have no tasks set yet, {username}.</p>
                : <ul className='tasks'>
                    {
                        todos.map((todo) => <Todo todo={todo} key={todo.id} />)
                    }
                </ul>
            }
        </div>
    );
}

function Todo ({todo}) {
    return (
        <li className='task-item'>{todo.title}</li>
    );
}

function Button ({children}) {
    return (
        <button className='btn' type='submit'>
            <span>{children}</span>
        </button>
    );
}

function Footer () {
    return (
        <footer className='app-footer'>
            <a className='app-link' href="https://storyset.com/work">Work illustrations by Storyset</a>
        </footer>
    );
}

export default App;