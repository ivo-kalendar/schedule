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

    if (error) {
        error.map((err) =>
            console.log(`The error message from server: ${err}`)
        );
    }

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
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='ime'>
                        {!error ? (
                            <p>Корисничко Име</p>
                        ) : (
                            <p className='alert'>{error}</p>
                        )}
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
        </div>
    );
};

export default Register;
