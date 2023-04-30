import apiConfig from "../api/apiConfig";

const Card = ({ title, image, overview }) => {
  return (
    <div className="grid-item">
      <img src={apiConfig.w500Image(image)} alt="movie image" />
      <p>{title}</p>
      <p className="overview">
        <span>
          <strong>Summary: </strong>
        </span>
        {overview}
      </p>
      <div>
        <a href="#"> Watch later</a>
        <button>Watch Now</button>
      </div>
    </div>
  );
};

export default Card;
