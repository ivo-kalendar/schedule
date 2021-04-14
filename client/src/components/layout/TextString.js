const TextString = ({ el }) => {
    return (
        <div className='form-group'>
            <div
                className='btn btn-link btn-primary'
                style={{
                    background: 'rgba(51, 156, 255, .5)',
                    margin: ' .2rem 0 0 0',
                    display: 'grid',
                    gridTemplateColumns: '1fr 3fr auto',
                }}>
                <p
                    style={{
                        margin: '0 .5rem',
                    }}>
                    {el.key}:{' '}
                </p>
                <p> {el.value}</p>
            </div>
        </div>
    );
};

export default TextString;
