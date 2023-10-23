function Button ({children}) {
    return (
        <button className='btn' type='submit'>
            <span>{children}</span>
        </button>
    );
}

export default Button;