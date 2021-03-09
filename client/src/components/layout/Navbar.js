import GuestLinks from '../links/GuestLinks';
import UserLinks from '../links/UserLinks';

const Navbar = ({ userID, errors }) => {
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
                    <div className='navbar'>
                        {!userID ? <GuestLinks /> : <UserLinks />}
                    </div>
                    <div className='empty'></div>
                </>
            )}
        </>
    );
};

export default Navbar;
