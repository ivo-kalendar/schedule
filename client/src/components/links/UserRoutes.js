import { Switch, Route, Redirect } from 'react-router-dom';

import Home from '../pages/Home';
import Table from '../pages/Table';
import About from '../pages/About';
import Logout from '../auth/Logout';

const UserRoutes = () => {
    const tablePathNames = [
        '/table',
        '/table/edit',
        '/table/firstroute',
        '/table/secondroute',
    ];

    return (
        <div className='container'>
            <Switch>
                <Route exact path='/home' component={Home} />
                <Route exact path={tablePathNames} component={Table} />
                <Route exact path='/about' component={About} />
                <Route exact path='/logout' component={Logout} />
                <Redirect from='/' to='/home' />
            </Switch>
        </div>
    );
};

export default UserRoutes;
