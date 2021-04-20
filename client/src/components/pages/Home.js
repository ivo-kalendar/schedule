import { useContext } from 'react';
import KorisnikContext from '../../context/korisnikContext';

const Home = () => {
    const korisnikContext = useContext(KorisnikContext);
    const {
        user: { adminApproval },
    } = korisnikContext;

    const grad = ['', 'Скопје', 'Тетово', 'Гостивар', 'Куманово', 'Велес'];
    const komercija = [
        '',
        'Горан Митровски',
        'Бенјамин Хајредин',
        'Тони Трајковски',
        'Бенјамин Хајредин, Горан Митровски',
    ];
    const hour = [
        '',
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

    const selectStyle = {
        background: 'inherit',
        fontSize: 'inherit',
        margin: '0',
        padding: '0',
        border: 'none',
        font: 'inherit',
        cursor: 'pointer',
        outline: 'inherit',
    };
    const optionStyle = {
        backgroundColor: '#333333',
        color: 'hsl(209, 100%, 60%)',
    };
    const onChange = (e) => {
        console.log(e.target.key + ' : ' + e.target.value);
    };
    const onClick = (e) => {
        console.log(e.target.key + ' : ' + e.target.value);
    };

    return adminApproval ? (
        <>
            <div className='table'>
                <h2 className='table-title'>Четврток</h2>
                <div className='table-header'>
                    <div className='table-header-info'>
                        <h3>име презиме</h3>
                        <h3>h</h3>
                        <h3 className='hide'>реон / комерција</h3>
                        <h3 className='hide'>план / град / возило</h3>
                    </div>
                    <h3 className='table-header-comment'>Коментар</h3>
                </div>
                <div className='table-item'>
                    <div className='table-item-info'>
                        <div className='table-item-name'>Петко Петковски</div>
                        <div
                            className='table-item-hour'
                            name={hour}
                            onClick={onClick}>
                            <form onChange={onChange}>
                                <select
                                    style={selectStyle}
                                    name='hour'
                                    id='hour'>
                                    {hour.map((g, i) => (
                                        <option
                                            style={optionStyle}
                                            value={g}
                                            key={i}>
                                            {g}
                                        </option>
                                    ))}
                                </select>
                            </form>
                        </div>
                        <div className='table-item-comercial hide'>
                            <form onChange={onChange}>
                                <select
                                    style={selectStyle}
                                    name='komercija'
                                    id='komercija'>
                                    {komercija.map((g, i) => (
                                        <option
                                            style={optionStyle}
                                            value={g}
                                            key={i}>
                                            {g}
                                        </option>
                                    ))}
                                </select>
                            </form>
                        </div>
                        <div className='table-item-comment hide'>
                            <form onChange={onChange}>
                                <select
                                    style={selectStyle}
                                    name='grad'
                                    id='grad1'>
                                    {grad.map((g, i) => (
                                        <option
                                            style={optionStyle}
                                            value={g}
                                            key={i}>
                                            {g}
                                        </option>
                                    ))}
                                </select>
                            </form>
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
                        <div className='table-item-comercial hide'>
                            Бенјамин Хајреди
                        </div>
                        <div className='table-item-comment hide'>Гостивар</div>
                    </div>
                    <div className='table-item-comment'>
                        Товарен + Монтенегровци + Свежо + Фунги
                    </div>
                </div>
                <div className='table-item'>
                    <div className='table-item-info'>
                        <div className='table-item-name'>Петко Петковски</div>
                        <div className='table-item-hour'>stend bay</div>
                        <div className='table-item-comercial hide'>
                            Горан Митровски, Бенјамин Хајреди, Тони Трајковски
                        </div>
                        <div className='table-item-comment hide'>
                            Гостивар Тетово
                        </div>
                    </div>
                    <div className='table-item-comment'>Товарен</div>
                </div>
                <div style={{ margin: '0.2rem' }}></div>
            </div>
            <div className='empty'></div>
        </>
    ) : (
        <h2
            style={{ fontWeight: '100' }}
            className='text-secondary text-center'>
            Побарајте пристап од Администраторот...
        </h2>
    );
};

export default Home;
