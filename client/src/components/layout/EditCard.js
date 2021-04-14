import { useContext, useState } from 'react';
import KorisnikContext from '../../context/korisnikContext';
import EditString from './EditString';
import TextString from './TextString';

const EditCard = ({ userArr }) => {
    const [clicked, setClicked] = useState(false);
    const [addBtn, setAddBtn] = useState(true);
    const korisnikContext = useContext(KorisnikContext);
    const { editUser, editKorisnik } = korisnikContext;

    const onSubmit = (e) => {
        e.preventDefault();
        setAddBtn(true);

        let userObj = {};
        for (let { key, value } of userArr) {
            if (value === 'true') value = true;
            if (value === 'false') value = false;
            if (value === 'undefined') value = undefined;
            if (value === 'null') value = null;
            // eslint-disable-next-line
            if (value === 'Array') value = new Array();
            // eslint-disable-next-line
            if (value === 'Array') value = new Object();

            userObj[key] = value;
        }
        editUser(userObj);
    };

    return (
        <div
            className='form-container'
            style={{
                maxWidth: '800px',
            }}>
            <div
                className='form-group text-secondary'
                style={{
                    fontSize: '.7rem',
                    fontWeight: '100',
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr',
                }}>
                <p>податоци</p>
                <p>вредност</p>
            </div>
            <form
                onSubmit={onSubmit}
                style={{
                    borderTop: '1px solid hsl(209, 100%, 60%)',
                }}>
                {userArr.map((el, i) => (
                    <div key={i} onClick={() => setClicked(el)}>
                        {el.key === '' || clicked === el ? (
                            <EditString el={el} />
                        ) : (
                            <TextString el={el} />
                        )}
                    </div>
                ))}
                {addBtn ? (
                    <div
                        className='form-group'
                        style={{
                            display: 'grid',
                            gridTemplateColumns: '1fr',
                        }}>
                        <input
                            onClick={() => {
                                // eslint-disable-next-line
                                editUser({ ...editKorisnik, ['']: '' });
                                setAddBtn(false);
                            }}
                            className='btn btn-success'
                            type='button'
                            value='+'
                        />
                    </div>
                ) : null}
                <input
                    type='submit'
                    value='Промени'
                    className='btn btn-primary btn-block'
                />
            </form>
        </div>
    );
};

export default EditCard;
