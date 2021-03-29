import moment from 'moment';
import 'moment/locale/mk';

const CardList = ({ user }) => {
    let userArr = [];
    for (let [key, value] of Object.entries(user)) {
        if (value === true) value = <span className='text-success'>true</span>;
        if (value === false) value = <span className='text-danger'>false</span>;
        if (!value) value = <span className='text-danger'>empty</span>;
        if (value === undefined)
            value = <span className='text-danger'>undefined</span>;
        if (value === 'unknown')
            value = <span className='text-danger'>unknown</span>;
        if (value === null) value = <span className='text-danger'>null</span>;
        if (value.length === 0)
            value = <span className='text-danger'>[ ]</span>;
        if (key === 'date') {
            value = (
                <span className='text-success'>
                    {moment(value).locale('mk').format('Do MMMM YYYY во HH:mm')}
                </span>
            );
        }
        if (key === '_id' || key === 'ime') {
            value = <span className='text-success'>{value}</span>;
        }

        userArr.push({ key, value });
    }

    return (
        <div
            onClick={() => console.log('This should open edit modal...')}
            className='card-list'>
            {userArr.map((el, i) => (
                <p style={{ wordBreak: 'break-all' }} key={i}>
                    <span className='text-secondary'>{el.key}: </span>
                    <span>{el.value}</span>
                </p>
            ))}
        </div>
    );
};

export default CardList;
