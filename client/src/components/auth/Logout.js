import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import AuthContext from '../../context/authContext';

const Logout = () => {
    const authContext = useContext(AuthContext);
    const { authenticateUser } = authContext;

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
                    <NavLink
                        onClick={() => authenticateUser(true)}
                        exact
                        to='/'>
                        Yes
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        onClick={() => console.log('Decided not to Logout...')}
                        exact
                        to='/'>
                        No
                    </NavLink>
                </li>
            </ul>
        </div>
    );
};

export default Logout;
