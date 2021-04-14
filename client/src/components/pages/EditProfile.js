import { useContext } from 'react';
import KorisnikContext from '../../context/korisnikContext';
import EditCard from '../layout/EditCard';

const EditProfile = () => {
    const korisnikContext = useContext(KorisnikContext);
    const { editKorisnik } = korisnikContext;
    let userArr = [];

    // Change the default valuas for one user that might crash the app //
    if (editKorisnik) {
        for (let [key, value] of Object.entries(editKorisnik)) {
            if (value === true) value = 'true';
            if (value === false) value = 'false';
            if (value === undefined) value = 'undefined';
            if (value === null) value = 'null';
            if (!value) value = '';
            if (Array.isArray(value) || value === '[]' || value === 'Array') {
                value = 'Array';
            }
            if (
                typeof value === 'object' ||
                value === '{}' ||
                value === 'Object'
            ) {
                value = 'Object';
            }

            userArr.push({ key, value });
        }
    }

    return !userArr.length ? (
        <h2
            style={{ fontWeight: '100' }}
            className='text-secondary text-center'>
            Нема ништо за промена...
        </h2>
    ) : (
        <EditCard userArr={userArr} />
    );
};

export default EditProfile;
