import { useContext, useEffect } from 'react';
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
                vraboteni.map((user) => <CardList key={user._id} user={user} />)
            ) : (
                <Spinner />
            )}
        </>
    );
};

export default VraboteniView;
