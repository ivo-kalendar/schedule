import { useContext, useEffect } from 'react';
import KorisnikContext from '../../context/korisnikContext';
import VraboteniContext from '../../context/vraboteniContext';
import AuthContext from '../../context/authContext';
import Spinner from '../layout/Spinner';

const Home = () => {
    const korisnikContext = useContext(KorisnikContext);
    const vraboteniContext = useContext(VraboteniContext);
    const authContext = useContext(AuthContext);
    const { korisnici, getKorisnici } = korisnikContext;
    const { vraboteni, getVraboteni } = vraboteniContext;
    const { checkExpiredToken } = authContext;

    useEffect(() => {
        checkExpiredToken();
        getKorisnici();
        getVraboteni();
        // eslint-disable-next-line
    }, []);

    return (
        <div className='grid-2'>
            <div>
                {vraboteni !== null ? (
                    vraboteni.map((vrb) => (
                        <p key={vrb._id}>
                            {vrb.pozicija}: {vrb.ime}
                        </p>
                    ))
                ) : (
                    <Spinner />
                )}
            </div>
            <div>
                {korisnici !== null ? (
                    korisnici.map((user) => (
                        <p key={user._id}>
                            {user.position || user.pozicija}: {user.ime}
                        </p>
                    ))
                ) : (
                    <Spinner />
                )}
            </div>
        </div>
    );
};

export default Home;
