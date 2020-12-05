import { useEffect, useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import moment from 'moment';
import 'moment/locale/mk';

const Navbar = () => {
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
            <div className='navbar'>
                <ul className='list'>
                    <li>
                        <NavLink activeStyle={activeStyle} to='/login'>
                            Login
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeStyle} to='/register'>
                            Register
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeStyle} exact to='/'>
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeStyle} to='/user-profile'>
                            Профил
                        </NavLink>
                    </li>
                    <li>
                        <NavLink activeStyle={activeStyle} to='/about'>
                            About
                        </NavLink>
                    </li>
                </ul>
            </div>
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
                        <span className='go-home-span'>home </span>
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

export default Navbar;
