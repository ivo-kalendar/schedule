import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import moment from 'moment';
import 'moment/locale/mk';

const Navbar = ({ user }) => {
    const [time, setTime] = useState(`                точно е...`);
    let currentTime = time.split('').slice(16, time.length);
    let currentDate = time.split('').slice(0, 16);

    useEffect(() => {
        setInterval(() => {
            setTime(
                `${moment().locale('mk').format('llll')}:${moment().format(
                    'ss'
                )}`
            );
        }, 1000);
    }, []);

    const backToTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    return (
        <div>
            <div className='navbar'>{user ? guestLinks : userLinks}</div>
            <div className='empty'></div>
            <div
                className='timebar grid-2'
                style={{
                    gridTemplateColumns: '3fr auto',
                }}>
                <div>
                    <Link
                        onClick={backToTop}
                        to='/'
                        style={{
                            fontSize: '1rem',
                            marginLeft: '.3rem',
                            marginTop: '.2rem',
                        }}>
                        <RiArrowGoBackLine />{' '}
                        <span className='go-home-span'>
                            {user ? 'login ' : 'home '}
                        </span>
                    </Link>
                </div>
                <p>
                    <span>{currentDate}</span>
                    {currentTime}
                </p>
            </div>
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
