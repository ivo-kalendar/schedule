import { Route } from 'react-router-dom';
import EditedTable from '../layout/EditedTable';
import MainListView from '../layout/MainListView';
import TableView from '../layout/TableView';

const TableRoutes = () => {
    // const phone = window.innerWidth < 700;
    // const phoneRoutes = {
    //     marginTop: '5em',
    //     display: 'grid',
    //     gridTemplateColumns: '1fr',
    // };
    const tableRoutesStiles = {
        marginTop: '6em',
        display: 'grid',
        gridTemplateColumns:
            'repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])',
    };

    return (
        <div style={tableRoutesStiles}>
            <Route exact path='/table/firstroute'>
                <h1>Прва Рута</h1>
                <MainListView />
            </Route>
            <Route exact path='/table/secondroute'>
                <h1>Втора Рута</h1>
                <MainListView />
            </Route>
            <Route exact path='/table/edit' component={EditedTable} />
            <Route exact path='/table' component={TableView} />
        </div>
    );
};

export default TableRoutes;
