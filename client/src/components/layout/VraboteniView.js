import { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import VraboteniContext from '../../context/vraboteniContext';
import CardList from '../layout/CardList';
import Spinner from '../layout/Spinner';

const VraboteniView = () => {
    const vraboteniContext = useContext(VraboteniContext);
    const { vraboteni, getVraboteni } = vraboteniContext;

    useEffect(() => {
        getVraboteni();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {vraboteni !== null ? (
                vraboteni.map((user) => (
                    <Link
                        // onClick={() => editUser(user)}
                        className='card-list'
                        to='/profile/edit'
                        key={user._id}>
                        <CardList user={user} />
                    </Link>
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

export default VraboteniView;
