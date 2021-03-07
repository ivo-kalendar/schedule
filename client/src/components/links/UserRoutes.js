import { Switch, Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import KorisnikContext from '../../context/korisnikContext';

import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import About from '../pages/About';
import Logout from '../auth/Logout';
const components = [Home, About, Logout, UserProfile];

const UserRoutes = () => {
    const korisnikContext = useContext(KorisnikContext);
    const { routes } = korisnikContext;

    return (
        <div className='container'>
            <Switch>
                {routes.map(({ link, name }, i) => (
                    <Route
                        key={i}
                        exact
                        path={link}
                        component={components.find((e) => e.name === name)}
                    />
                ))}
                {/* и од мап рутите прави редирект...  треба да се среди... */}
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
};

export default UserRoutes;
