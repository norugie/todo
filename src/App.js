import './App.css';
import images from './assets/data/images';

function App() {
    return (
        <div className='app'>
            <header className='app-header'>
                <img src={ images[Math.floor(Math.random()*images.length)] } className='app-logo' alt='logo' />
                <p>Welcome! What should we call you?</p>

                <input class='app-name-text' type='text' />
            </header>
        </div>
    );
}

export default App;