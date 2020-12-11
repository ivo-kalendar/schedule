import { useState, useContext } from 'react';
import AuthContext from '../../context/authContext';

const Register = () => {
    const authContext = useContext(AuthContext);
    const { register, error } = authContext;

    const [user, setUser] = useState({
        ime: '',
        password: '',
        password2: '',
    });

    if (error) console.log(`The error message from server: ${error}`);

    const { ime, password, password2 } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (ime === '' || password === '') {
            console.log('Сите полиња мора да бидат исполнети...');
        } else if (password !== password2) {
            console.log('Лозинката не се совпаѓа...');
        } else {
            register({ ime, password });
            console.log('sucessfully passed info to server');
            setUser({
                ime: '',
                password: '',
                password2: '',
            });
        }
    };

    return (
        <div className='form-container'>
            {!error ? (
                <h1>
                    Регистирај <span className='text-primary'>се..</span>.
                </h1>
            ) : (
                <p
                    className='text-center text-danger'
                    style={{
                        border: '1px solid rgba(255,50,50,.2)',
                        borderRadius: '5px',
                    }}>
                    {error}
                </p>
            )}
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='ime'>Name</label>
                    <input
                        type='text'
                        name='ime'
                        value={ime}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Password</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Confirm Password</label>
                    <input
                        type='password'
                        name='password2'
                        value={password2}
                        onChange={onChange}
                    />
                </div>
                <input
                    type='submit'
                    value='Register'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

export default Register;
