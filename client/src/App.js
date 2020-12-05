import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/layout/Navbar';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Home from './components/pages/Home';
import UserProfile from './components/pages/UserProfile';
import About from './components/pages/About';

import KorisnikState from './context/KorisnikState';
import VraboteniState from './context/VraboteniState';

import './App.css';

function App() {
    return (
        <KorisnikState>
            <VraboteniState>
                <Router>
                    <Navbar />
                    <div className='container'>
                        <Switch>
                            <Route exact path='/login' component={Login} />
                            <Route
                                exact
                                path='/register'
                                component={Register}
                            />
                            <Route exact path='/' component={Home} />
                            <Route
                                exact
                                path='/user-profile'
                                component={UserProfile}
                            />
                            <Route exact path='/about' component={About} />
                        </Switch>
                    </div>
                </Router>
            </VraboteniState>
        </KorisnikState>
    );
}

export default App;
