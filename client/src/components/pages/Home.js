import { useContext } from 'react';
import KorisnikContext from '../../context/korisnikContext';

const Home = () => {
    const korisnikContext = useContext(KorisnikContext);
    const {
        user: { adminApproval },
    } = korisnikContext;

    return adminApproval ? (
        <h2
            style={{ fontWeight: '100' }}
            className='text-secondary text-center'>
            Имаш Пристап Тука иде Екселот...
        </h2>
    ) : (
        <h2
            style={{ fontWeight: '100' }}
            className='text-secondary text-center'>
            Побарајте пристап од Администраторот...
        </h2>
    );
};

export default Home;
