import GuestLinks from '../links/GuestLinks';
import UserLinks from '../links/UserLinks';

const Navbar = ({ user, errors }) => {
    return (
        <div>
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
                        {!user ? <GuestLinks /> : <UserLinks />}
                    </div>
                    <div className='empty'></div>
                </>
            )}
        </div>
    );
};

export default Navbar;
