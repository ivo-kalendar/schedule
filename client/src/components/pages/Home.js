import { useContext, useEffect } from 'react';
import VraboteniContext from '../../context/vraboteniContext';
import CardList from '../layout/CardList';
import Spinner from '../layout/Spinner';

const Home = () => {
    const vraboteniContext = useContext(VraboteniContext);
    const { vraboteni, getVraboteni } = vraboteniContext;

    useEffect(() => {
        getVraboteni();
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            {vraboteni !== null ? (
                <>
                    <h3 className='card-list-title'>
                        Вработени ({vraboteni.length})
                    </h3>
                    {vraboteni.map((user) => (
                        <CardList key={user._id} user={user} />
                    ))}
                </>
            ) : (
                <Spinner />
            )}
        </div>
    );
};

export default Home;
