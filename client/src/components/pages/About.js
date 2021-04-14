import Copyright from '../layout/Copyright';

const About = () => {
    return (
        <div className='text-secondary' style={{ marginTop: '2rem' }}>
            <h1>About this page</h1>
            <p className='my-1'>
                This is a full stack React App for DataBase Testing.
            </p>
            <p className='bg-light-2 p-1'>Version: 2.0.1</p>
            <Copyright />
        </div>
    );
};

export default About;
