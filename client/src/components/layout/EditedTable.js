import { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import 'moment/locale/mk';
import TableContext from '../../context/tablesContext';
import EditTableString from './EditTableString';
import Spinner2 from './Spinner2';
import TableString from './TableString';

const EditedTable = () => {
    const tableContext = useContext(TableContext);
    const { getHourOptions, editTable, clearEditTable } = tableContext;
    const [id, setId] = useState(null);
    const [msg, setMsg] = useState('...');
    const [drive, setDrive] = useState('drive-short');

    useEffect(() => {
        if (id) {
            setMsg(
                '...изберете опција за да извршите промена...   ...доколку сакате да изберете повеќе од една опција повторно кликнете на истото поле...'
            );
            setDrive('drive-long');
        }
        if (!id) {
            setMsg(
                'Кликнете на некое од полињата во табелата на кое сакате да извршите промена...'
            );
            setDrive('drive-short');
        }
        // eslint-disable-next-line
    }, [id, msg]);

    useEffect(() => {
        getHourOptions();
        return () => clearEditTable();
        // eslint-disable-next-line
    }, []);

    let sledenRabotenDen, denes;
    if (editTable) {
        denes = moment(editTable.date).locale('mk').format('dddd');
        let utre = moment(editTable.date)
            .add(1, 'days')
            .locale('mk')
            .format('dddd');
        denes = denes.charAt(0).toLocaleUpperCase() + denes.slice(1);
        sledenRabotenDen = utre.charAt(0).toLocaleUpperCase() + utre.slice(1);
        if (denes === 'Петок' || denes === 'Сабота') {
            sledenRabotenDen = 'Понеделник';
        }
    }

    return !editTable ? (
        <h2
            style={{ fontWeight: '100' }}
            className='text-secondary text-center'>
            Нема ништо за промена...
        </h2>
    ) : (
        <>
            <div className='origin'>
                <div className='drive'>
                    <div className={`drive-left ${drive}`}>{msg}</div>
                </div>
            </div>

            <div className='empty'></div>
            <div className='table'>
                <div style={{ margin: '0.2rem' }}></div>
                <h2 className='table-title'>
                    План за {editTable ? sledenRabotenDen : null}
                </h2>
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
                <div style={{ margin: '0.2rem' }}></div>
            </div>
            <div className='empty'></div>
        </>
    );
};

export default EditedTable;
