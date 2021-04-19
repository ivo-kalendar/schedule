import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import VraboteniContext from '../../context/vraboteniContext';
import CardList from '../layout/CardList';
import Spinner from '../layout/Spinner';
import Spinner2 from './Spinner2';

const VraboteniView = () => {
    const history = useHistory();
    const vraboteniContext = useContext(VraboteniContext);
    const [waiting, setWaiting] = useState(false);
    const {
        editVraboten,
        vraboteni,
        getVraboteni,
        editWorker,
        createNewWorker,
    } = vraboteniContext;

    useEffect(() => {
        getVraboteni();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (waiting && editVraboten) history.push('/profile/edit');
        }, 1000);
        // eslint-disable-next-line
    }, [editVraboten]);

    const novVraboten = () => {
        setWaiting(true);
        createNewWorker();
    };

    return (
        <>
            {vraboteni !== null ? (
                <>
                    <div className='origin'>
                        вкупно {vraboteni.length} Вработени
                    </div>
                    <Link
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                        }}
                        onClick={novVraboten}
                        className='card-list'
                        to={'#'}>
                        {waiting ? <Spinner2 /> : <p>Нов Вработен!</p>}
                    </Link>
                    {vraboteni.map((user) => (
                        <Link
                            onClick={() => editWorker(user)}
                            className='card-list'
                            to='/profile/edit'
                            key={user._id}>
                            <CardList user={user} />
                        </Link>
                    ))}
                </>
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

export default VraboteniView;
