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

            <div
                className='text-primary'
                style={{
                    position: 'absolute',
                    left: '0',
                    right: '0',
                    top: 'auto',
                    bottom: '0',
                    textAlign: 'center',
                    fontSize: '.6rem',
                    padding: '2rem 0',
                    textShadow: '0 0 15px rgba(0,0,0,.6)',
                }}>
                <p>
                    Copyright &copy; 2020 Mongo DB Test Project. All rights
                    reserved.
                </p>
                <p>Web site created and developed by Ivo Kalendarov</p>
            </div>
        </div>
    );
};

export default About;
