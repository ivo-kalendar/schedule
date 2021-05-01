import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TableContext from '../../context/tablesContext';
import EditTableString from './EditTableString';
import Spinner2 from './Spinner2';
import TableString from './TableString';

const EditedTable = () => {
    const tableContext = useContext(TableContext);
    const { editTable, clearEditTable } = tableContext;
    const [id, setId] = useState(null);

    useEffect(() => {
        return () => clearEditTable();
        // eslint-disable-next-line
    }, []);

    return !editTable ? (
        <h2
            style={{ fontWeight: '100' }}
            className='text-secondary text-center'>
            Нема ништо за промена...
        </h2>
    ) : (
        <>
            <div className='empty'></div>
            <div className='table'>
                <h2 className='table-title'>Четврток</h2>
                <div className='table-header'>
                    <div className='table-header-info'>
                        <h3>име презиме</h3>
                        <h3>h</h3>
                        <h3>реон / комерција / план / град / возило</h3>
                    </div>
                    <h3 className='table-header-comment'>Коментар</h3>
                </div>

                {editTable ? (
                    editTable.tableArr.map((d) => (
                        <Link onClick={() => setId(d._id)} to='#' key={d._id}>
                            {id && id === d._id ? (
                                <EditTableString
                                    d={d}
                                    tableID={editTable._id}
                                />
                            ) : (
                                <TableString d={d} />
                            )}
                        </Link>
                    ))
                ) : (
                    <Spinner2 />
                )}
            </div>
            <div className='empty'></div>
        </>
    );
};

export default EditedTable;
