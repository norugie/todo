import Button from './button';

function InitialGreeting ({onSetUsername}) {
    function handleSetUsername (e) {
        e.preventDefault();
        if(!e.target[0].value) return;
        onSetUsername(e.target[0].value);
    }

    return (
        <form className='app-form' onSubmit={handleSetUsername}>
            <input type='text' id='app-name' className='app-text' autoComplete='off' />
            <br>
            </br>
            <center><Button>I'm ready!</Button></center>
        </form>
    );
}

export default InitialGreeting;