import spinner from './spinner.svg';

const Spinner = () => {
    return (
        <div className='container'>
            <img src={spinner} style={spinnerStyle} alt='Loading...' />
        </div>
    );
};

const spinnerStyle = {
    width: '8rem',
    paddingTop: '9rem',
    margin: 'auto',
    display: 'block',
};

export default Spinner;
