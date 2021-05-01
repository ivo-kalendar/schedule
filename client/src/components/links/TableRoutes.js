import { useContext } from 'react';
import { Route, useLocation } from 'react-router-dom';
import TablesContext from '../../context/tablesContext';
import EditedTable from '../layout/EditedTable';
import MainListView from '../layout/MainListView';
import TableView from '../layout/TableView';

const TableRoutes = () => {
    const { pathname } = useLocation();
    const tablesContext = useContext(TablesContext);
    const { allTables } = tablesContext;

    const tableRoutesStiles = {
        marginTop: '6em',
        display: 'grid',
        gridTemplateColumns:
            pathname === '/table/edit' || !allTables
                ? '1fr'
                : 'repeat(auto-fill, [col-start] minmax(100px, 1fr) [col-end])',
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
