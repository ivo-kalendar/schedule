import { useContext } from 'react';
import KorisnikContext from '../../context/korisnikContext';
import { NavLink } from 'react-router-dom';

import { FaRegUser, FaRegListAlt } from 'react-icons/fa';
import { FiHome, FiLogOut } from 'react-icons/fi';
import { ImInfo } from 'react-icons/im';
import { RiFileExcel2Line } from 'react-icons/ri';

const UserLinks = () => {
    const korisnikContext = useContext(KorisnikContext);
    const { user } = korisnikContext;

    const phone = window.innerWidth < 700;
    const icons = { height: '1.5em', width: '1.5em' };

    const userLinks = (
        <>
            <li>
                <NavLink exact to='/home'>
                    {phone ? <FiHome style={icons} /> : 'Дома'}
                </NavLink>
            </li>
            <li>
                <NavLink exact to='/table'>
                    {phone ? <RiFileExcel2Line style={icons} /> : 'Табела'}
                </NavLink>
            </li>
        </>
    );

    const aboutAndLogout = (
        <>
            <li>
                <NavLink exact to='/about'>
                    {phone ? <ImInfo style={icons} /> : 'За Сајтот'}
                </NavLink>
            </li>
            <li>
                <NavLink exact to='/logout'>
                    {phone ? <FiLogOut style={icons} /> : 'Одјави Се'}
                </NavLink>
            </li>
        </>
    );

    const adminLinks = (
        <>
            <li>
                <NavLink to='/profile'>
                    {phone ? <FaRegUser style={icons} /> : 'Профил'}
                </NavLink>
            </li>
            <li>
                <NavLink exact to='/lists'>
                    {phone ? <FaRegListAlt style={icons} /> : 'Листи'}
                </NavLink>
            </li>
        </>
    );

    return (
        <ul className='list'>
            {userLinks}
            {user.ime !== 'admin' ? <></> : adminLinks}
            {aboutAndLogout}
        </ul>
    );
};

export default UserLinks;
