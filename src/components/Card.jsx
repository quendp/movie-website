import apiConfig from "../api/apiConfig";

const Card = ({ title, image }) => {
  return (
    <div className="grid-item">
      <img src={apiConfig.w500Image(image)} alt="movie image" />
      <p>{title}</p>
    </div>
  );
};

export default Card;
