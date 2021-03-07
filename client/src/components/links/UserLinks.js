import { NavLink } from 'react-router-dom';
import { useContext, useEffect } from 'react';
import KorisnikContext from '../../context/korisnikContext';

const UserLinks = () => {
    const korisnikContext = useContext(KorisnikContext);
    const { getRoutes, routes } = korisnikContext;

    useEffect(() => {
        getRoutes();
        // eslint-disable-next-line
    }, []);

    return (
        <ul className='list'>
            {routes.map(({ link, content }, i) => (
                <li key={i}>
                    <NavLink activeStyle={activeStyle} exact to={link}>
                        {content}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

const activeStyle = { borderBottom: '1px solid rgba(255,255,255,.7)' };

export default UserLinks;
