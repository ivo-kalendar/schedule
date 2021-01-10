import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

import Spinner from './Spinner';
import Navbar from './Navbar';
import Footer from './Footer';
import Login from '../auth/Login';
import Logout from '../auth/Logout';
import Register from '../auth/Register';
import Home from '../pages/Home';
import UserProfile from '../pages/UserProfile';
import About from '../pages/About';

const Permisions = () => {
    const authContext = useContext(AuthContext);
    const { error, authUser, decoded, logout, authenticateUser } = authContext;

    if (decoded && decoded.exp * 1000 < new Date().getTime()) {
        // authenticateUser(true);
        // logout();
        console.log('i am out');
    }

    return (
        <Router>
            {!localStorage.token ? (
                <>
                    <Navbar user={authUser} errors={error} />
                    <div className='container'>{guest}</div>
                </>
            ) : localStorage.token && !authUser ? (
                <>
                    <Navbar user={authUser} />
                    <div className='container'>{user}</div>
                </>
            ) : (
                <>
                    <Navbar />
                    <div className='container'>
                        <Spinner />
                    </div>
                </>
            )}
            <Footer user={authUser} />
        </Router>
    );
};

const guest = (
    <Switch>
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />
        <Redirect from='/' to='/login' />
    </Switch>
);

const user = (
    <Switch>
        <Route exact path='/home' component={Home} />
        <Route exact path='/user-profile' component={UserProfile} />
        <Route exact path='/about' component={About} />
        <Route exact path='/logout' component={Logout} />
        <Redirect from='/' to='/home' />
    </Switch>
);

export default Permisions;
