import { useState, useContext, useEffect } from 'react';
import AuthContext from '../../context/authContext';
import Copyright from '../layout/Copyright';

const Login = (props) => {
    const authContext = useContext(AuthContext);
    const { login, authUser } = authContext;

    useEffect(() => {
        if (!authUser) {
            props.history.push('/');
        }

        // eslint-disable-next-line
    }, [props.history]);

    const [user, setUser] = useState({
        ime: '',
        password: '',
    });

    const { ime, password } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        login({ ime, password });
        console.log(user);
    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login..</span>.
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='ime'>Корисник</label>
                    <input
                        type='text'
                        autoFocus
                        name='ime'
                        value={ime}
                        onChange={onChange}
                        required
                    />
                </div>
                <div className='form-group'>
                    <label htmlFor='password'>Лозинка</label>
                    <input
                        type='password'
                        name='password'
                        value={password}
                        onChange={onChange}
                        required
                    />
                </div>
                <input
                    type='submit'
                    value='Логирај Се'
                    className='btn btn-primary btn-block'
                />
            </form>
            <Copyright />
        </div>
    );
};

export default Login;
