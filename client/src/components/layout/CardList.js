import moment from 'moment';
import 'moment/locale/mk';

const CardList = ({ user }) => {
    let userArr = [];
    for (let [key, value] of Object.entries(user)) {
        if (value === true) value = 'true';
        if (value === false) value = 'false';
        if (key === 'date') {
            value = moment(value).locale('mk').format('Do MMMM YYYY во HH:mm');
        }

        userArr.push({ key, value });
    }
    return (
        <div className='card-list'>
            {userArr.map((el, i) => (
                <p style={{ wordBreak: 'break-all' }} key={i}>
                    <span className='text-primary'>{el.key}: </span>
                    {el.value}
                </p>
            ))}
        </div>
    );
};

export default CardList;
