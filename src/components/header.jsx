import images from '../assets/data/images';

function Header ({username}) {
    return (
        <header className='app-header' style={username ? {paddingTop: '50px'} : {}}>
            <img src={images[Math.floor(Math.random()*images.length)]} className={!username ? 'app-logo' : 'app-logo-small'} alt='logo' />
            {
                !username ? <p>Welcome! What should we call you?</p>
                : <p>Hey there, <span style={{color: '#009e60', fontWeight: 'bold'}}>{username}</span>. Let's get to work!</p>
            }
        </header>
    );
}

export default Header;