const Card = ({id, title, posterUrl }) => {
    return (
        <div className='card' id={id}>
            <h1>{title}</h1>
            <img src={posterUrl} alt={title}/>
            <button>Check it out</button>
        </div>
    )
}

export default Card;
