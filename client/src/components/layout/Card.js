const Card = ({ userArr }) => {
    return (
        <>
            {userArr.map((el, i) => (
                <div
                    style={{
                        wordBreak: 'break-all',
                        display: 'grid',
                        gridTemplateColumns: '1fr 3fr',
                        padding: '.2rem',
                    }}
                    key={i}>
                    <span className='text-secondary'>{el.key}: </span>
                    <span>{el.value}</span>
                    <div
                        style={{
                            width: '145%',
                            borderBottom: '1px solid rgba(51, 156, 255, .3)',
                        }}></div>
                </div>
            ))}
        </>
    );
};

export default Card;
