const EditedTable = () => {
    const grad = ['Скопје', 'Тетово', 'Гостивар', 'Куманово', 'Велес'];
    const komercija = [
        'Горан Митровски',
        'Бенјамин Хајредин',
        'Тони Трајковски',
        'Бенјамин Хајредин, Горан Митровски , Тони Трајковски',
    ];
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

    const onChange = (e) => {
        console.log(e.target.value);
        console.log(e.target);
    };

    return (
        <>
            <div className='empty'></div>
            <div className='table'>
                <h2 className='table-title'>Четврток</h2>
                <div className='table-header'>
                    <div className='table-header-info'>
                        <h3>име презиме</h3>
                        <h3>h</h3>
                        <h3>реон / комерција</h3>
                        <h3>план / град / возило</h3>
                    </div>
                    <h3 className='table-header-comment'>Коментар</h3>
                </div>
                <div className='table-item'>
                    <div className='table-item-info'>
                        <div className='table-item-name'>Петко Петковски</div>
                        <div className='table-item-hour' name={hour}>
                            <select onChange={onChange} name='hour' id='hour'>
                                <option defaultValue=''>--</option>
                                {hour.map((g, i) => (
                                    <option value={g} key={i}>
                                        {g}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='table-item-comercial'>
                            <select
                                onChange={onChange}
                                name='komercija'
                                id='komercija'>
                                <option defaultValue=''>--</option>
                                {komercija.map((g, i) => (
                                    <option value={g} key={i}>
                                        {g}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div className='table-item-comment'>
                            <select onChange={onChange} name='grad' id='grad1'>
                                <option defaultValue=''>--</option>
                                {grad.map((g, i) => (
                                    <option value={g} key={i}>
                                        {g}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <div className='table-item-comment'>
                        Товарен+Монтенегровци + Свежо + Фунги
                    </div>
                </div>
                <div className='table-item'>
                    <div className='table-item-info'>
                        <div className='table-item-name'>
                            Петко ПетковскиТерезовски
                        </div>
                        <div className='table-item-hour'>06:00</div>
                        <div className='table-item-comercial'>
                            Бенјамин Хајреди
                        </div>
                        <div className='table-item-comment'>Гостивар</div>
                    </div>
                    <div className='table-item-comment'>
                        Товарен + Монтенегровци + Свежо + Фунги
                    </div>
                </div>
                <div className='table-item'>
                    <div className='table-item-info'>
                        <div className='table-item-name'>Петко Петковски</div>
                        <div className='table-item-hour'>stend bay</div>
                        <div className='table-item-comercial'>
                            Горан Митровски, Бенјамин Хајреди, Тони Трајковски
                        </div>
                        <div className='table-item-comment'>
                            Гостивар Тетово
                        </div>
                    </div>
                    <div className='table-item-comment'>Товарен</div>
                </div>
                <div style={{ margin: '0.2rem' }}></div>
            </div>
            <div className='empty'></div>
        </>
    );
};

export default EditedTable;
