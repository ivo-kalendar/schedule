import { Route } from 'react-router-dom';
import KorisniciView from '../layout/KorisniciView';
import VraboteniView from '../layout/VraboteniView';
import MainListView from '../layout/MainListView';

const ListsRoutes = () => {
    const phone = window.innerWidth < 700;
    const phoneRoutes = {
        marginTop: '5em',
        display: 'grid',
        gridTemplateColumns: '1fr',
    };
    const pcRoutes = {
        marginTop: '6em',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr',
    };

    return (
        <div style={phone ? phoneRoutes : pcRoutes}>
            <Route exact path='/lists/korisnici' component={KorisniciView} />
            <Route exact path='/lists/vraboteni' component={VraboteniView} />
            <Route exact path='/lists' component={MainListView} />
        </div>
    );
};

export default ListsRoutes;
