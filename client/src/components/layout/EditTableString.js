import { useContext, useEffect, useState } from 'react';
import TableContext from '../../context/tablesContext';
import Spinner2 from './Spinner2';

const EditTableString = ({ d, tableID }) => {
    const tableContext = useContext(TableContext);
    const { updateTable, editTable } = tableContext;
    const [hideComment, setHideComment] = useState(false);
    const [hideKomercial, setHideKomercial] = useState(false);

    const grad = ['Скопје', 'Тетово', 'Гостивар', 'Куманово', 'Велес'];
    let komercija = [
        'Горан Митровски',
        'Бенјамин Хајредин',
        'Тони Трајковски',
        'Бенјамин Хајредин, Горан Митровски , Тони Трајковски',
    ];
    komercija = [...grad, ...komercija];
    const hour = [
        '06:00',
        '06:30',
        '07:00',
        '07:30',
        '08:00',
        '08:30',
        '09:00',
        '09:30',
        '10:00',
        '10:30',
        '11:00',
        '11:30',
        '12:00',
        '12:30',
        '13:00',
        '13:30',
        'пред 6',
        'stend bay',
    ];
    const komentar = [
        'Товарен',
        'Свежо Месо',
        'Монтемегровци',
        'товарен,втора тура (кам замрз.)',
    ];

    useEffect(() => {
        if (hideComment) setHideComment(false);
        if (hideKomercial) setHideKomercial(false);
        // eslint-disable-next-line
    }, [editTable]);

    const onChange = (e) => {
        if (e.target.name === 'comment') setHideComment(true);
        if (e.target.name === 'komercial') setHideKomercial(true);
        updateTable(tableID, d._id, e.target.name, e.target.value);
    };

    return (
        <div className='table-item'>
            <div className='table-item-info'>
                <div className='table-item-name'>{d.ime}</div>
                <div className='table-item-hour'>
                    <select onChange={onChange} name='time' id='time'>
                        <option defaultValue={d.time}>{d.time}</option>
                        {d.time !== '' ? <option></option> : null}
                        {hour.map((g, i) => (
                            <option value={g} key={i}>
                                {g}
                            </option>
                        ))}
                    </select>
                </div>
                <div className='table-item-comercial'>
                    {hideKomercial ? (
                        <Spinner2 />
                    ) : (
                        <select
                            onChange={onChange}
                            name='komercial'
                            id='komercial'>
                            <option defaultValue={d.komercial}>
                                {d.komercial}
                            </option>
                            {d.komercial !== '' ? <option></option> : null}
                            {komercija.map((g, i) => (
                                <option
                                    value={
                                        !d.komercial
                                            ? g
                                            : `${d.komercial}, ${g}`
                                    }
                                    key={i}>
                                    {!d.komercial ? g : `${d.komercial}, ${g}`}
                                </option>
                            ))}
                        </select>
                    )}
                </div>
            </div>
            <div className='table-item-comment'>
                {hideComment ? (
                    <Spinner2 />
                ) : (
                    <select onChange={onChange} name='comment' id='comment'>
                        <option defaultValue={d.comment}>{d.comment}</option>
                        {d.comment !== '' ? <option></option> : null}
                        {komentar.map((g, i) => (
                            <option
                                value={!d.comment ? g : `${d.comment}, ${g}`}
                                key={i}>
                                {!d.comment ? g : `${d.comment}, ${g}`}
                            </option>
                        ))}
                    </select>
                )}
            </div>
        </div>
    );
};

export default EditTableString;
