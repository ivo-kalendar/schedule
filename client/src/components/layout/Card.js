const Card = ({ userArr }) => {
    return (
        <div className='card-list'>
            {userArr.map((el, i) => (
                <p style={{ wordBreak: 'break-all' }} key={i}>
                    <span className='text-secondary'>{el.key}: </span>
                    <span>{el.value}</span>
                </p>
            ))}
        </div>
    );
};

export default Card;
