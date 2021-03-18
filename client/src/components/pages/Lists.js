import { useState, useEffect } from 'react';
import {
    BrowserRouter as Router,
    NavLink,
    Switch,
    Route,
} from 'react-router-dom';
import KorisniciView from '../layout/KorisniciView';
import VraboteniView from '../layout/VraboteniView';

const Lists = () => {
    const [scrollDown, setScrollDown] = useState(listLinks);
    let position = 0;

    const handleScrollDown = (event) => {
        if (
            window.pageYOffset > position &&
            position > window.innerHeight / 4
        ) {
            setScrollDown(listLinksScrollDown);
        }
        if (window.pageYOffset < position) {
            setScrollDown(listLinks);
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
        <Router>
            <div className={'navbar'} style={scrollDown}>
                <ul className='list' style={ulLinks}>
                    <li style={liLinks}>
                        <NavLink
                            activeStyle={activeStyle}
                            exact
                            to='/lists/korisnici'>
                            Корисници
                        </NavLink>
                    </li>
                    <li style={liLinks}>
                        <NavLink
                            activeStyle={activeStyle}
                            exact
                            to='/lists/vraboteni'>
                            Вработени
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div style={phone ? phoneRoutes : pcRoutes}>
                <Switch>
                    <Route
                        exact
                        path='/lists/korisnici'
                        component={KorisniciView}
                    />
                    <Route
                        exact
                        path='/lists/vraboteni'
                        component={VraboteniView}
                    />
                </Switch>
            </div>
        </Router>
    );
};
const activeStyle = { borderBottom: '1px solid rgba(255,255,255,.7)' };
const phone = window.innerWidth < 700;
const listLinks = {
    top: phone ? '3.3em' : '4.35em',
    left: '0',
};
const listLinksScrollDown = {
    top: '-5rem',
    left: '0',
    transition: 'top 1s ease-in',
};
const ulLinks = { flexWrap: 'wrap' };
const liLinks = { padding: '.5em 1em' };

const phoneRoutes = { marginTop: '5em' };
const pcRoutes = {
    marginTop: '6em',
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
};

export default Lists;
