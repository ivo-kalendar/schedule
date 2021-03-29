import { useContext, useEffect } from 'react';
import KorisnikContext from '../../context/korisnikContext';
import CardList from '../layout/CardList';
import Spinner from '../layout/Spinner';

const KorisniciView = () => {
    const korisnikContext = useContext(KorisnikContext);
    const { korisnici, getKorisnici } = korisnikContext;

    useEffect(() => {
        getKorisnici();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {korisnici !== null ? (
                korisnici.map((user) => <CardList key={user._id} user={user} />)
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
