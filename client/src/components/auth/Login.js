import { useState, useContext } from 'react';
import AuthContext from '../../context/authContext';
import Copyright from '../layout/Copyright';

const Login = () => {
    const authContext = useContext(AuthContext);
    const { authenticateUser } = authContext;

    const [user, setUser] = useState({
        profileName: '',
        password: '',
    });

    const { profileName, password } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        authenticateUser(false);
        console.log(user);
    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Login..</span>.
            </h1>
            <form onSubmit={onSubmit}>
                <div className='form-group'>
                    <label htmlFor='profileName'>Корисник</label>
                    <input
                        type='text'
                        autoFocus
                        name='profileName'
                        value={profileName}
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
