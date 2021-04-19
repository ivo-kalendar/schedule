import { useEffect, useContext } from 'react';
import KorisnikContext from '../../context/korisnikContext';
import VraboteniContext from '../../context/vraboteniContext';
import { Switch, Route, Redirect, useLocation } from 'react-router-dom';

import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import EditProfile from '../pages/EditProfile';
import Lists from '../pages/Lists';
import About from '../pages/About';
import Logout from '../auth/Logout';

const AdminRoutes = () => {
    const korisnikContext = useContext(KorisnikContext);
    const vraboteniContext = useContext(VraboteniContext);
    const { pathname } = useLocation();
    const { cleanUp } = korisnikContext;
    const { cleanUpWorker } = vraboteniContext;
    const listPathNames = ['/lists', '/lists/korisnici', '/lists/vraboteni'];

    useEffect(() => {
        if (pathname !== '/profile/edit') {
            cleanUp();
            cleanUpWorker();
        }

        // eslint-disable-next-line
    }, [pathname]);

    return (
        <div className='container'>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/profile/personal' component={UserProfile} />
                <Route exact path='/profile/edit' component={EditProfile} />
                <Route exact path={listPathNames} component={Lists} />
                <Route exact path='/about' component={About} />
                <Route exact path='/logout' component={Logout} />

                <Redirect from='/profile' to='/profile/personal' />
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
};

export default AdminRoutes;
