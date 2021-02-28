const Card = ({ id, title, posterUrl, onClick }) => {
  return (
    <div className="card" id={id}>
      <h1>{title}</h1>
      <img src={posterUrl} alt={title} />
      <button id={id} onClick={(e) => onClick(e)}>Check it out</button>
    </div>
  );
};

export default Card;
