import { useState, useContext } from 'react';
import AuthContext from '../../context/authContext';

const Register = () => {
    const authContext = useContext(AuthContext);
    const { register } = authContext;

    const [user, setUser] = useState({
        ime: '',
        password: '',
        password2: '',
    });

    const { ime, password, password2 } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        if (ime === '' || password === '') {
            console.log('alert');
        } else if (password !== password2) {
            console.log('alert 2');
        } else {
            register({ ime, password });
            console.log('sucessfully registered a user');
            setUser({
                ime: '',
                password: '',
                password2: '',
            });
        }
    };

    return (
        <div className='form-container'>
            <h1>
                Account <span className='text-primary'>Register..</span>.
            </h1>
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
