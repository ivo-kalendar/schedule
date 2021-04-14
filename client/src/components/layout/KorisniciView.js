import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import KorisnikContext from '../../context/korisnikContext';
import CardList from '../layout/CardList';
import Spinner from '../layout/Spinner';

const KorisniciView = () => {
    const korisnikContext = useContext(KorisnikContext);
    const { korisnici, getKorisnici, editUser } = korisnikContext;

    useEffect(() => {
        getKorisnici();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {korisnici !== null ? (
                korisnici.map((user) => (
                    <div key={user._id} onClick={() => editUser(user)}>
                        <Link to='/profile/edit'>
                            <CardList user={user} />
                        </Link>
                    </div>
                ))
            ) : (
                <>
                    <Spinner />
                    <Spinner />
                    <Spinner />
                </>
            )}
        </>
    );
};

export default KorisniciView;
