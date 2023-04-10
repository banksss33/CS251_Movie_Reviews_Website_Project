import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../style/reviewbox.css"

const Stars = ({ stars, reviews }) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {stars >= index + 1 ? (
          <FaStar className="icon-star" />
        ) : stars >= number ? (
          <FaStarHalfAlt className="icon-star" />
        ) : (
          <AiOutlineStar className="icon-star" />
        )}
      </span>
    );
  });

  return (
    <div>
        <div className="">
            {ratingStar}
        </div>
    </div>
  )
};

export default Stars;
