import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import ListsRoutes from '../links/ListsRoutes';

const Lists = () => {
    const [scrollDown, setScrollDown] = useState('list-links');
    let position = 0;

    const handleScrollDown = (event) => {
        if (
            window.pageYOffset > position &&
            position > window.innerHeight / 4
        ) {
            setScrollDown('list-links-scrolled-down');
        }
        if (window.pageYOffset < position) {
            setScrollDown('list-links');
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
            <div className={`navbar ${scrollDown}`}>
                <ul className='list' style={{ flexWrap: 'wrap' }}>
                    <li style={{ padding: '.5em 1em' }}>
                        <NavLink exact to='/lists/korisnici'>
                            Корисници
                        </NavLink>
                    </li>
                    <li style={{ padding: '.5em 1em' }}>
                        <NavLink exact to='/lists/vraboteni'>
                            Вработени
                        </NavLink>
                    </li>
                </ul>
            </div>
            <ListsRoutes />
        </>
    );
};

export default Lists;
