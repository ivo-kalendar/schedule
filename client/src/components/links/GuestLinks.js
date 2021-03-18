import { NavLink } from 'react-router-dom';
import { FiLogIn, FiLock } from 'react-icons/fi';
import { ImInfo } from 'react-icons/im';

const GuestLinks = () => {
    return (
        <ul className='list'>
            <li>
                <NavLink activeStyle={activeStyle} exact to='/login'>
                    {phone ? <FiLogIn style={icons} /> : 'Најавa'}
                </NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle} exact to='/register'>
                    {phone ? <FiLock style={icons} /> : 'Регистрација'}
                </NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle} exact to='/about'>
                    {phone ? <ImInfo style={icons} /> : 'За Сајтот'}
                </NavLink>
            </li>
        </ul>
    );
};

const phone = window.innerWidth < 700;
const icons = { height: '1.5em', width: '1.5em' };
const activeStyle = { borderBottom: '1px solid rgba(255,255,255,.7)' };

export default GuestLinks;
