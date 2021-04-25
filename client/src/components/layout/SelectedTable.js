import { useContext } from 'react';
import { Link } from 'react-router-dom';
import TablesContext from '../../context/tablesContext';
import moment from 'moment';
import 'moment/locale/mk';
import Spinner2 from './Spinner2';

const SelectedTable = () => {
    const tablesContext = useContext(TablesContext);
    const { selectedTable, getEditTable } = tablesContext;

    let today, sledenRabotenDen, denes;
    if (selectedTable) {
        today = moment(selectedTable.date).locale('mk').format('DD.MM.YYYY');
        denes = moment(selectedTable.date).locale('mk').format('dddd');
        let utre = moment(selectedTable.date)
            .add(1, 'days')
            .locale('mk')
            .format('dddd');

        denes = denes.charAt(0).toLocaleUpperCase() + denes.slice(1);
        sledenRabotenDen = utre.charAt(0).toLocaleUpperCase() + utre.slice(1);
        if (denes === 'Петок' || denes === 'Сабота')
            sledenRabotenDen = 'Понеделник';
    }

    return (
        <>
            <Link
                onClick={() => getEditTable(selectedTable._id)}
                to='/table/edit'>
                <div className='btn btn-success badge table-btn'>промени</div>
            </Link>
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
