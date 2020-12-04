import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Login from './components/layout/Login';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
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
                            <Route exact path='/' component={Home} />
                            <Route exact path='/login' component={Login} />
                            <Route exact path='/about' component={About} />
                        </Switch>
                    </div>
                </Router>
            </VraboteniState>
        </KorisnikState>
    );
}

export default App;
