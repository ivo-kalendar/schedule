import { useState, useContext } from 'react';
import AuthContext from '../../context/authContext';
import Copyright from '../layout/Copyright';

const Register = () => {
    const authContext = useContext(AuthContext);
    let { register, error, clientErr, clearErrors } = authContext;

    const [user, setUser] = useState({
        ime: '',
        password: '',
        password2: '',
    });
    const { ime, password, password2 } = user;
    let timeout;

    const startTimer = () => (timeout = setTimeout(() => clearErrors(), 5000));
    const stopTimer = () => clearTimeout(timeout);

    const onChange = (e) => {
        stopTimer();
        setUser({ ...user, [e.target.name]: e.target.value });

        if (error) {
            clearErrors();
        }
    };

    if (error) {
        startTimer();
    }

    const onSubmit = (e) => {
        e.preventDefault();
        stopTimer();

        if (ime === '' || password === '') {
            clientErr('Сите полиња мора да бидат исполнети...');
        } else if (password !== password2) {
            clientErr('Лозинката не се совпаѓа...');
        } else {
            register({ ime, password });
        }
    };

    return (
        <div className='form-container'>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='ime'>
                        <p>Корисничко Име</p>
                    </label>
                    <input
                        type='text'
                        name='ime'
                        value={ime}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Лозинка</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password2'>Потврди Лозинка</label>
                    <input
                        type='password'
                        name='password2'
                        value={password2}
                        onChange={onChange}
                    />
                </div>
                <input
                    type='submit'
                    value='Регистрирај се...'
                    className='btn btn-primary btn-block'
                />
            </form>
            <Copyright />
        </div>
    );
};

export default Register;
