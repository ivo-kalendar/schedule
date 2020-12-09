import { Link, useLocation } from 'react-router-dom';
import { RiArrowGoBackLine } from 'react-icons/ri';
import LocaleTime from './LocaleTime';

const Footer = ({ user }) => {
    const { pathname } = useLocation();

    return (
        <div>
            <div
                className='timebar grid-2'
                style={{
                    gridTemplateColumns: '3fr auto',
                }}>
                <div>
                    {pathname === '/login' || pathname === '/home' ? (
                        <div></div>
                    ) : (
                        <Link
                            to='/'
                            style={{
                                fontSize: '1rem',
                                marginLeft: '.3rem',
                                marginTop: '.2rem',
                            }}>
                            <RiArrowGoBackLine />{' '}
                            <span className='go-home-span'>
                                {user ? 'login ' : 'home '}
                            </span>
                        </Link>
                    )}
                </div>
                <LocaleTime />
            </div>
        </div>
    );
};

export default Footer;
