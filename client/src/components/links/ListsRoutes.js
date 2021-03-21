import { Route } from 'react-router-dom';
import KorisniciView from '../layout/KorisniciView';
import VraboteniView from '../layout/VraboteniView';

const ListsRoutes = () => {
    return (
        <div style={phone ? phoneRoutes : pcRoutes}>
            <Route exact path='/lists/korisnici' component={KorisniciView} />
            <Route exact path='/lists/vraboteni' component={VraboteniView} />
        </div>
    );
};

const phone = window.innerWidth < 700;
const phoneRoutes = { marginTop: '5em' };
const pcRoutes = {
    marginTop: '6em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
};

export default ListsRoutes;
