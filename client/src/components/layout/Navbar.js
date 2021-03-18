import { useEffect, useState } from 'react';
import GuestLinks from '../links/GuestLinks';
import UserLinks from '../links/UserLinks';

const Navbar = ({ userID, errors }) => {
    const [scrollDown, setScrollDown] = useState('');
    let position = 0;

    const handleScrollDown = (event) => {
        if (
            window.pageYOffset > position &&
            position > window.innerHeight / 4
        ) {
            setScrollDown('navbar-scroll-down');
        }
        if (window.pageYOffset < position) {
            setScrollDown('');
        }
        position = window.pageYOffset;
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollDown);

        // cleanup this component
        return () => {
            window.removeEventListener('scroll', handleScrollDown);
        };
        // eslint-disable-next-line
    }, []);

    return (
        <>
            {errors ? (
                <div className='navbar-alert'>
                    <ul>
                        {errors.map((err, i) => (
                            <li key={`error ${i}`} className='alert'>
                                {err}
                            </li>
                        ))}
                    </ul>
                </div>
            ) : (
                <>
                    <div className={`navbar ${scrollDown}`}>
                        {!userID ? <GuestLinks /> : <UserLinks />}
                    </div>
                    <div className='empty'></div>
                </>
            )}
        </>
    );
};

export default Navbar;
