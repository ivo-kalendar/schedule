import { Link, useLocation } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import LocaleTime from './LocaleTime';

const Footer = ({ user }) => {
    const { pathname } = useLocation();

    const goBackBtn = (
        <>
            <Link className='go-home-icon' to='/'>
                <RiArrowGoBackLine />{' '}
            </Link>
            <Link className='go-home-span-link' to='/'>
                <span className='go-home-span'>
                    {!user ? 'login ' : 'home '}
                </span>
            </Link>
        </>
    );

    return (
        <div
            className='timebar grid-2'
            style={{
                gridTemplateColumns: '3fr auto',
            }}>
            <div>
                {pathname === '/login' || pathname === '/home' ? (
                    <div style={{ marginBottom: '1.6rem' }}></div>
                ) : (
                    goBackBtn
                )}
            </div>
            <LocaleTime />
        </div>
    );
};

export default Footer;
