import { NavLink } from 'react-router-dom';
import { FiLogIn, FiLock } from 'react-icons/fi';
import { ImInfo } from 'react-icons/im';

const GuestLinks = () => {
    return (
        <ul className='list'>
            <li>
                <NavLink exact to='/login'>
                    {phone ? <FiLogIn style={icons} /> : 'Најавa'}
                </NavLink>
            </li>
            <li>
                <NavLink exact to='/register'>
                    {phone ? <FiLock style={icons} /> : 'Регистрација'}
                </NavLink>
            </li>
            <li>
                <NavLink exact to='/about'>
                    {phone ? <ImInfo style={icons} /> : 'За Сајтот'}
                </NavLink>
            </li>
        </ul>
    );
};

const phone = window.innerWidth < 700;
const icons = { height: '1.5em', width: '1.5em' };

export default GuestLinks;
