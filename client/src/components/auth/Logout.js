import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import Copyright from '../layout/Copyright';

const Logout = () => {
    const authContext = useContext(AuthContext);
    const { logout } = authContext;

    return (
        <div>
            <p className='text-primary p-2' style={{ textAlign: 'center' }}>
                Are you shore you want to logout?
            </p>
            <ul
                className='grid-2'
                style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <li>
                    <NavLink onClick={logout} exact to='/'>
                        Yes
                    </NavLink>
                </li>
                <li>
                    <NavLink exact to='/'>
                        No
                    </NavLink>
                </li>
            </ul>
            <Copyright />
        </div>
    );
};

export default Logout;
