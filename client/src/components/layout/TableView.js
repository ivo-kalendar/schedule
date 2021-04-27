import { Link, useHistory } from 'react-router-dom';
import { useContext, useEffect, useState } from 'react';
import TablesContext from '../../context/tablesContext';
import AuthContext from '../../context/authContext';
import Spinner from '../layout/Spinner';
import Spinner2 from './Spinner2';
import TableCard from './TableCard';

const TableView = () => {
    const history = useHistory();
    const tablesContext = useContext(TablesContext);
    const authContext = useContext(AuthContext);
    const {
        allTables,
        createNewTable,
        editTable,
        getAllTables,
        getSelectedTable,
    } = tablesContext;
    const { userID } = authContext;
    const [waiting, setWaiting] = useState(false);

    useEffect(() => {
        getAllTables();
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        setTimeout(() => {
            if (waiting && editTable) history.push('/table/edit');
        }, 1000);
        // eslint-disable-next-line
    }, [editTable]);

    const newTable = async () => {
        setWaiting(true);
        await createNewTable(userID);
        getSelectedTable();
        getAllTables();
    };

    return (
        <>
            {allTables ? (
                <>
                    <div className='origin'>
                        вкупно {allTables.length} табели
                    </div>
                    <Link
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: '#fff',
                            fontSize: '0.6rem',
                        }}
                        onClick={newTable}
                        className='table-card'
                        to='#'>
                        {waiting ? <Spinner2 /> : <p>Нова Табела!</p>}
                    </Link>
                    {allTables.map((table) => (
                        <Link
                            onClick={() => getSelectedTable(table._id)}
                            className='table-card'
                            to='/home'
                            key={table._id}>
                            <TableCard table={table} />
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

export default TableView;
