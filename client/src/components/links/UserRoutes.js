import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
// import Lists from '../pages/Lists';
import About from '../pages/About';
import Logout from '../auth/Logout';

const UserRoutes = () => {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/home' component={Home} />
                {/* <Route exact path='/lists' component={Lists} /> */}
                <Route exact path='/about' component={About} />
                <Route exact path='/logout' component={Logout} />
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
};

export default UserRoutes;
