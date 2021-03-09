import { useContext } from 'react';
import moment from 'moment';
import 'moment/locale/mk';

import KorisnikContext from '../../context/korisnikContext';
import Spinner from '../layout/Spinner';

const UserProfile = () => {
    const korisnikContext = useContext(KorisnikContext);
    const { user } = korisnikContext;

    return (
        <div>
            {!user ? (
                <Spinner />
            ) : user.ime !== 'admin' ? (
                <div className='container'>
                    <h1>Немате пристап до оваа страна</h1>
                </div>
            ) : (
                <div>
                    <p>
                        <span className='text-primary'>_id: </span>
                        {user._id}
                    </p>
                    <h1>
                        <span className='text-primary lead'>име: </span>
                        {user.ime}
                    </h1>
                    <p>
                        <span className='text-primary'>позиција: </span>
                        {user.pozicija}
                    </p>
                    {!user.date ? (
                        <></>
                    ) : (
                        <p>
                            <span className='text-primary'>
                                профил креиран на{' '}
                            </span>
                            {moment(user.date)
                                .locale('mk')
                                .format('Do MMMM YYYYгод. dddd')}
                            <span className='text-primary'> во </span>
                            {moment(user.date).locale('mk').format('HH:mm:ss')}
                            <span className='text-primary'> часот.</span>
                        </p>
                    )}
                </div>
            )}
        </div>
    );
};

export default UserProfile;
