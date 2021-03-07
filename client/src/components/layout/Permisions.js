import { BrowserRouter as Router } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../context/authContext';

import Spinner from './Spinner';
import Navbar from './Navbar';
import Footer from './Footer';
import GuestRoutes from '../links/GuestRoutes';
import UserRoutes from '../links/UserRoutes';

const Permisions = () => {
    const authContext = useContext(AuthContext);
    const { error, user } = authContext;

    return (
        <Router>
            {!localStorage.token ? (
                <>
                    <Navbar user={user} errors={error} />
                    <GuestRoutes />
                </>
            ) : localStorage.token && user ? (
                <>
                    <Navbar user={user} />
                    <UserRoutes />
                </>
            ) : (
                <>
                    <Navbar />
                    <Spinner />
                </>
            )}
            <Footer user={user} />
        </Router>
    );
};

export default Permisions;
