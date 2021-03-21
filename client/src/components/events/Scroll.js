import { useContext, useEffect } from 'react';
import AuthContext from '../../context/authContext';

const Scroll = () => {
    const authContext = useContext(AuthContext);
    const { handleScrollDown } = authContext;
    // const [scrollDown, setScrollDown] = useState('');
    // let position = 0;

    // const handleScrollDown = (event) => {
    //     if (
    //         window.pageYOffset > position &&
    //         position > window.innerHeight / 4
    //     ) {
    //         setScrollDown('navbar-scroll-down');
    //     }
    //     if (window.pageYOffset < position) {
    //         setScrollDown('');
    //     }
    //     position = window.pageYOffset;
    // };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollDown);

        // cleanup this component
        return () => {
            window.removeEventListener('scroll', handleScrollDown);
        };
        // eslint-disable-next-line
    }, []);

    return <></>;
};

export default Scroll;
