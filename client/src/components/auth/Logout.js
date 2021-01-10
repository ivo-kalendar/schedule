import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import Copyright from '../layout/Copyright';

const Logout = () => {
    const authContext = useContext(AuthContext);
    const { logout, authenticateUser } = authContext;

    const logOutUser = () => {
        authenticateUser(true);
        logout();
    };

    return (
        <div>
            <p className='text-primary p-2' style={{ textAlign: 'center' }}>
                Are you shore you want to logout?
            </p>
            <ul
                className='grid-2'
                style={{
                    textAlign: 'center',
                    fontSize: '1.5rem',
                }}>
                <li>
                    <NavLink onClick={logOutUser} exact to='/'>
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
