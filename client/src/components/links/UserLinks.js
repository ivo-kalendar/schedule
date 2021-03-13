import { useContext } from 'react';
import KorisnikContext from '../../context/korisnikContext';
import { NavLink } from 'react-router-dom';

const UserLinks = () => {
    const korisnikContext = useContext(KorisnikContext);
    const { user } = korisnikContext;

    return (
        <ul className='list'>
            {homeLink}
            {user.ime !== 'admin' ? <></> : adminLinks}
            {aboutAndLogout}
        </ul>
    );
};

const activeStyle = { borderBottom: '1px solid rgba(255,255,255,.7)' };

const homeLink = (
    <li>
        <NavLink activeStyle={activeStyle} exact to='/home'>
            Дома
        </NavLink>
    </li>
);

const aboutAndLogout = (
    <>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/about'>
                За Сајтот
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/logout'>
                Одјави Се
            </NavLink>
        </li>
    </>
);

const adminLinks = (
    <>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/user-profile'>
                Профил
            </NavLink>
        </li>
        <li>
            <NavLink activeStyle={activeStyle} exact to='/lists'>
                Листи
            </NavLink>
        </li>
    </>
);

export default UserLinks;
