import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import Lists from '../pages/Lists';
import About from '../pages/About';
import Logout from '../auth/Logout';

const AdminRoutes = () => {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path='/user-profile' component={UserProfile} />
                <Route exact path='/lists' component={Lists} />
                <Route exact path='/about' component={About} />
                <Route exact path='/logout' component={Logout} />
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
};

export default AdminRoutes;
