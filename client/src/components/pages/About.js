import Copyright from '../layout/Copyright';

const About = () => {
    return (
        <div style={{ marginTop: '2rem' }}>
            <h1>About this page</h1>
            <p className='my-1'>
                This is a full stack React App for DataBase Testing.
            </p>
            <p className='bg-light p-1'>
                <strong>Version: </strong> 1.0.0
            </p>
            <Copyright />
        </div>
    );
};

export default About;
