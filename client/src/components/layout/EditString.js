import { useState, useContext } from 'react';
import KorisnikContext from '../../context/korisnikContext';

const EditString = ({ el }) => {
    const korisnikContext = useContext(KorisnikContext);
    const { editUser, editKorisnik } = korisnikContext;

    const [element, setElement] = useState({
        key: el.key,
        value: el.value,
    });

    const onChange = (e) => {
        setElement({ ...element, [e.target.name]: e.target.value });
        el[e.target.name] = e.target.value;
    };

    return (
        <div
            className='form-group'
            style={{
                display: 'grid',
                gridGap: '.5rem',
                gridTemplateColumns: '1fr 3fr auto',
            }}>
            <input
                autoFocus
                onChange={onChange}
                type='text'
                name='key'
                value={element.key}
                autoComplete='off'
            />
            <input
                onChange={onChange}
                type='text'
                name='value'
                value={element.value}
                autoComplete='off'
            />
            {element.key !== '' && [element.key] in editKorisnik ? (
                <input
                    onClick={() => {
                        let { [element.key]: item, ...rest } = editKorisnik;
                        editUser(rest);
                    }}
                    className='btn btn-danger'
                    type='button'
                    value='Х'
                />
            ) : null}
        </div>
    );
};

export default EditString;
