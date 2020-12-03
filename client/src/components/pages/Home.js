import { useContext, useEffect } from 'react';
import VraboteniContext from '../../context/vraboteniContext';

const Home = () => {
    const vraboteniContext = useContext(VraboteniContext);
    const { vraboteni, getVraboteni } = vraboteniContext;

    useEffect(() => {
        getVraboteni();
        // eslint-disable-next-line
    }, []);
    console.log(vraboteni);

    return (
        <div>
            {vraboteni !== null ? (
                vraboteni.map((vrb) => (
                    <p key={vrb._id}>
                        {vrb.pozicija}: {vrb.ime}
                    </p>
                ))
            ) : (
                <p>There's no workers</p>
            )}
        </div>
    );
};

export default Home;
