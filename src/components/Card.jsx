import { useEffect, useRef, useState } from "react";
import apiConfig from "../api/apiConfig";

const Card = ({ title, image, overview }) => {
  const ref = useRef();
  const [inView, setInView] = useState(false);

  useEffect(() => {
    let observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (ref?.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="grid-item">
      <img
        ref={ref}
        src={inView ? apiConfig.originalImage(image) : ""}
        alt="movie image"
      />
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
