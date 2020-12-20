import { Fragment } from 'react';
import spinner from './spinner.svg';

const Spinner = () => {
    return (
        <Fragment>
            <img src={spinner} style={spinnerStyle} alt='Loading...' />
        </Fragment>
    );
};

const spinnerStyle = {
    width: '8rem',
    paddingTop: '9rem',
    margin: 'auto',
    display: 'block',
};

export default Spinner;
