import moment from 'moment';
import 'moment/locale/mk';
import Card from './Card';

const CardList = ({ user }) => {
    let userArr = [];

    // Change the default valuas for one user that might crash the app //
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
        if (key === 'date' || key === 'poslednaPromena') {
            value = (
                <span className='text-success'>
                    {moment(value).locale('mk').format('Do MMMM YYYY во HH:mm')}
                </span>
            );
        }
        if (key === '_id' || key === 'ime') {
            value = <span className='text-success'>{value}</span>;
        }
        value = <span className='text-orange'>{value}</span>;

        userArr.push({ key, value });
    }

    return <Card userArr={userArr} />;
};

export default CardList;
