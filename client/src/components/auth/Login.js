import { useState } from 'react';

const Login = () => {
    const [user, setUser] = useState({
        profileName: '',
        password: '',
    });

    const { profileName, password } = user;

    const onChange = (e) =>
        setUser({ ...user, [e.target.name]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
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
        </div>
    );
};

export default Login;
