import { useContext, useEffect } from 'react';
import moment from 'moment';
import 'moment/locale/mk';

import KorisnikContext from '../../context/korisnikContext';
import AuthContext from '../../context/authContext';
import Spinner from '../layout/Spinner';

const UserProfile = () => {
    const korisnikContext = useContext(KorisnikContext);
    const authContext = useContext(AuthContext);
    const { userID, getUser } = korisnikContext;
    const { user } = authContext;

    useEffect(() => {
        getUser(user);
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {!userID ? (
                <Spinner />
            ) : (
                <div>
                    <p>
                        <span className='text-primary'>_id: </span>
                        {userID._id}
                    </p>
                    <h1>
                        <span className='text-primary lead'>име: </span>
                        {userID.ime}
                    </h1>
                    <p>
                        <span className='text-primary'>позиција: </span>
                        {userID.pozicija}
                    </p>
                    {!userID.date ? (
                        <></>
                    ) : (
                        <p>
                            <span className='text-primary'>
                                профил креиран на{' '}
                            </span>
                            {moment(userID.date)
                                .locale('mk')
                                .format('Do MMMM YYYYгод. dddd')}
                            <span className='text-primary'> во </span>
                            {moment(userID.date)
                                .locale('mk')
                                .format('HH:mm:ss')}
                            <span className='text-primary'> часот.</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserProfile;
