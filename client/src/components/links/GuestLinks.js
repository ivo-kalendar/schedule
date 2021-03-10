import { NavLink } from 'react-router-dom';

const GuestLinks = () => {
    return (
        <ul className='list'>
            <li>
                <NavLink activeStyle={activeStyle} exact to='/login'>
                    Најавa
                </NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle} exact to='/register'>
                    Регистрација
                </NavLink>
            </li>
            <li>
                <NavLink activeStyle={activeStyle} exact to='/about'>
                    За Сајтот
                </NavLink>
            </li>
        </ul>
    );
};

const activeStyle = { borderBottom: '1px solid rgba(255,255,255,.7)' };

export default GuestLinks;
