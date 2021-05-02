import { useContext, useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import AuthContext from '../../context/authContext';
import KorisnikContext from '../../context/korisnikContext';
import TablesContext from '../../context/tablesContext';
import moment from 'moment';
import 'moment/locale/mk';
import Spinner2 from './Spinner2';
import TableDelete from './TableDelete';

const SelectedTable = () => {
    const tablesContext = useContext(TablesContext);
    const authContext = useContext(AuthContext);
    const korisnikContext = useContext(KorisnikContext);
    const history = useHistory();
    const { userID } = authContext;
    const { user } = korisnikContext;
    const {
        getAllTables,
        copyToNewTable,
        backFromDelete,
        tableOperation,
        editTable,
        selectedTable,
        getEditTable,
        allTables,
        goToDeleteScreen,
        getSelectedTable,
    } = tablesContext;
    const [ifLastDocument, setIfLastDocument] = useState(true);
    const [waiting, setWaiting] = useState(false);

    useEffect(() => {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
        // eslint-disable-next-line
    }, []);

    useEffect(() => {
        if (!allTables) setIfLastDocument(true);
        if (
            allTables &&
            selectedTable &&
            allTables[0]._id !== selectedTable._id
        ) {
            setIfLastDocument(false);
        }
        if (
            allTables &&
            selectedTable &&
            allTables[0]._id === selectedTable._id
        ) {
            setIfLastDocument(true);
        }
        // eslint-disable-next-line
    }, [selectedTable, allTables, editTable]);

    useEffect(() => {
        if (tableOperation === 'table deleted') {
            getAllTables();
            setTimeout(() => {
                history.push('/table');
                backFromDelete();
                getSelectedTable();
            }, 1000);
        }
        // eslint-disable-next-line
    }, [tableOperation]);

    useEffect(() => {
        if (waiting) {
            history.push('/table/edit');
            getAllTables();
        }
        // eslint-disable-next-line
    }, [editTable]);

    const newTable = async () => {
        setWaiting(true);
        await copyToNewTable(userID, selectedTable._id);
        getSelectedTable();
    };

    let today, sledenRabotenDen, denes, sega;
    if (selectedTable) {
        today = moment(selectedTable.date).locale('mk').format('DD.MM.YYYY');
        denes = moment(selectedTable.date).locale('mk').format('dddd');
        sega = moment(new Date()).locale('mk').format('dddd');
        let utre = moment(selectedTable.date)
            .add(1, 'days')
            .locale('mk')
            .format('dddd');

        denes = denes.charAt(0).toLocaleUpperCase() + denes.slice(1);
        sega = sega.charAt(0).toLocaleUpperCase() + sega.slice(1);
        sledenRabotenDen = utre.charAt(0).toLocaleUpperCase() + utre.slice(1);
        if (denes === 'Петок' || denes === 'Сабота') {
            sledenRabotenDen = 'Понеделник';
        }
    }

    return tableOperation === 'delete' ? (
        <TableDelete />
    ) : (
        <>
            <div className='origin'>
                {ifLastDocument ? (
                    selectedTable ? (
                        <span>
                            вкупно {selectedTable?.tableData?.length}{' '}
                            дистрибутери
                        </span>
                    ) : null
                ) : (
                    <span className='text-danger border-danger'>
                        има понов распоред
                    </span>
                )}
            </div>
            {tableOperation === 'table deleted' ? (
                <h3
                    className='text-success'
                    style={{
                        border: '3px solid #28a745',
                        padding: '1rem',
                        margin: '1rem',
                    }}>
                    Табелата е успешно избришана!
                </h3>
            ) : (
                <div className='btns-group'>
                    {user.ime === 'admin' ? (
                        <Link onClick={() => goToDeleteScreen()} to='#'>
                            <div className='btn btn-danger badge table-btn'>
                                избриши
                                <p> </p>
                            </div>
                        </Link>
                    ) : null}
                    {selectedTable &&
                    selectedTable.author === userID &&
                    sega === denes ? (
                        <Link
                            onClick={() => {
                                setWaiting(true);
                                getEditTable(selectedTable._id);
                            }}
                            to='#'>
                            <div className='btn btn-success badge table-btn'>
                                {!waiting ? 'промени' : <Spinner2 />}
                            </div>
                        </Link>
                    ) : (
                        <Link onClick={newTable} to='#'>
                            <div className='btn btn-success badge table-btn'>
                                {!waiting ? (
                                    <>
                                        превземи
                                        <p className='small-letters'>
                                            во нов распоред
                                        </p>
                                    </>
                                ) : (
                                    <Spinner2 />
                                )}
                            </div>
                        </Link>
                    )}
                </div>
            )}
            <div className='empty'></div>
            <div className='table'>
                <div className='space-between'>
                    {selectedTable ? (
                        <>
                            <p>
                                {denes} {today}
                            </p>
                            <p>
                                {selectedTable.name || selectedTable.ime}{' '}
                                {selectedTable.surname}
                            </p>
                        </>
                    ) : null}
                </div>
                <h2 className='table-title'>
                    Распоред за {selectedTable ? sledenRabotenDen : null}
                </h2>
                <div className='table-header'>
                    <div className='table-header-info'>
                        <h3>име презиме</h3>
                        <h3>h</h3>
                        <h3>реон / комерција / план / град / возило</h3>
                    </div>
                    <h3 className='table-header-comment'>Коментар</h3>
                </div>

                {selectedTable ? (
                    selectedTable.tableArr.map((d) => (
                        <div key={d._id} className='table-item'>
                            <div className='table-item-info'>
                                <div className='table-item-name'>{d.ime}</div>
                                <div className='table-item-hour'>{d.time}</div>
                                <div className='table-item-comercial'>
                                    {d.komercial} {d.city}
                                </div>
                            </div>
                            <div className='table-item-comment'>
                                {d.comment}
                            </div>
                        </div>
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

export default SelectedTable;
