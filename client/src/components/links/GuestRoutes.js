import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../auth/Login';
import Register from '../auth/Register';
import About from '../pages/About';

const GuestRoutes = () => {
    return (
        <div className='container'>
            <Switch>
                <Route exact path='/login' component={Login} />
                <Route exact path='/register' component={Register} />
                <Route exact path='/about' component={About} />
                <Redirect from='/' to='/login' />
            </Switch>
        </div>
    );
};

export default GuestRoutes;
