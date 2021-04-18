import { useContext, useState, useEffect } from 'react';
import { useHistory, Link } from 'react-router-dom';
import KorisnikContext from '../../context/korisnikContext';
import EditString from './EditString';
import TextString from './TextString';

const EditCard = ({ userArr }) => {
    const history = useHistory();
    const [clicked, setClicked] = useState(false);
    const [addBtn, setAddBtn] = useState(true);
    const [submited, setSubmited] = useState(false);
    const [deleteDecision, setDeleteDecision] = useState(false);
    const korisnikContext = useContext(KorisnikContext);
    const {
        errorUpdate,
        editUser,
        deleteUser,
        editKorisnik,
        updateUser,
        korisnikOperation,
    } = korisnikContext;

    const toTop = () => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };

    useEffect(() => {
        if (
            korisnikOperation === 'внесен' ||
            korisnikOperation === 'избришан'
        ) {
            setSubmited(true);
            toTop();
            setTimeout(() => history.push('/lists/korisnici'), 1000);
        }

        if (errorUpdate) {
            setSubmited(false);
            toTop();
            setTimeout(() => history.push('/lists/korisnici'), 1000);
        }

        // eslint-disable-next-line
    }, [korisnikOperation, errorUpdate]);

    const onDelete = () => {
        setDeleteDecision(false);
        deleteUser(editKorisnik._id);
    };

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
            if (value === 'Object') value = new Object();

            userObj[key] = value;
        }

        editUser(userObj);
        if (addBtn) updateUser(editKorisnik);
    };

    return deleteDecision ? (
        <div>
            <p className='text-secondary p-2' style={{ textAlign: 'center' }}>
                Дали си сигурен дека сакаш да го избришеш корисникот?
            </p>
            <ul
                className='grid-2'
                style={{ textAlign: 'center', fontSize: '1.5rem' }}>
                <li>
                    <Link onClick={onDelete} to='#'>
                        Да
                    </Link>
                </li>
                <li>
                    <Link onClick={() => setDeleteDecision(false)} to='#'>
                        Не
                    </Link>
                </li>
            </ul>
        </div>
    ) : (
        <div
            className='form-container'
            style={{
                maxWidth: '800px',
            }}>
            {submited ? (
                <h3
                    className='text-success'
                    style={{
                        border: '3px solid #28a745',
                        padding: '1rem',
                        margin: '1rem',
                    }}>
                    Корисникот е успешно {korisnikOperation}!
                </h3>
            ) : errorUpdate ? (
                <h3
                    className='text-danger'
                    style={{
                        border: '3px solid #dc3545',
                        padding: '1rem',
                        margin: '1rem',
                    }}>
                    {errorUpdate}
                </h3>
            ) : (
                <div
                    className='form-group text-secondary'
                    style={{
                        fontSize: '.7rem',
                        fontWeight: '100',
                        display: 'grid',
                        gridTemplateColumns: '1fr .2fr 3fr',
                    }}>
                    <p>податоци</p>
                    <div
                        style={{
                            width: '1px',
                            height: 'calc(100% + 1.2rem)',
                            background: 'hsl(209, 100%, 60%)',
                        }}></div>
                    <p>вредност</p>
                </div>
            )}
            <form
                onSubmit={onSubmit}
                style={{
                    borderTop: '1px solid hsl(209, 100%, 60%)',
                }}>
                <div className='origin'>Информации за Корисникот</div>
                {userArr.map((el, i) => (
                    <div
                        key={i}
                        onClick={() => {
                            setClicked(el);
                            setAddBtn(false);
                        }}>
                        {el.key === '' || clicked === el ? (
                            <EditString el={el} />
                        ) : (
                            <TextString el={el} />
                        )}
                    </div>
                ))}
                {addBtn ? (
                    <div className='grid-3'>
                        <div
                            className='form-group'
                            style={{
                                margin: '0',
                                display: 'grid',
                                gridTemplateColumns: '1fr',
                            }}>
                            <input
                                onClick={() => {
                                    // eslint-disable-next-line
                                    editUser({ ...editKorisnik, ['']: '' });
                                    setAddBtn(false);
                                }}
                                className='btn btn-success btn-block'
                                type='button'
                                value='Нов Податок'
                            />
                        </div>
                        <input
                            onClick={() => setDeleteDecision(true)}
                            type='button'
                            value='Избриши Корисник'
                            className='btn btn-danger btn-block'
                            style={{ margin: '0' }}
                        />
                        <input
                            type='submit'
                            value='Зачувај Корисник'
                            className='btn btn-primary btn-block'
                            style={{ margin: '0' }}
                        />
                    </div>
                ) : (
                    <input
                        type='submit'
                        value='Промени'
                        className='btn btn-primary btn-block'
                    />
                )}
            </form>
            <div className='empty'></div>
        </div>
    );
};

export default EditCard;
