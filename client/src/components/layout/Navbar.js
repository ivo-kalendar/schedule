import { NavLink } from 'react-router-dom';

const Navbar = ({ user }) => {
    return (
        <div>
            <div className='navbar'>{user ? guestLinks : userLinks}</div>
            <div className='empty'></div>
        </div>
    );
};

const activeStyle = { borderBottom: '1px solid rgba(255,255,255,.7)' };

const guestLinks = (
    <ul className='list'>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/login'>
                Login
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/register'>
                Register
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/about'>
                About
            </NavLink>
        </li>
    </ul>
);

const userLinks = (
    <ul className='list'>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/home'>
                Home
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/user-profile'>
                Профил
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/about'>
                About
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/logout'>
                Logout
            </NavLink>
        </li>
    </ul>
);

export default Navbar;
