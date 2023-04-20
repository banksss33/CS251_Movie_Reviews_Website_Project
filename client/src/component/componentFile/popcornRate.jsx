import { FaStar, FaStarHalfAlt } from "react-icons/fa";
import { AiOutlineStar } from "react-icons/ai";
import "../style/reviewbox.css"

const Popcorn = ({ popcorn}) => {
  const ratingStar = Array.from({ length: 5 }, (elem, index) => {
    let number = index + 0.5;

    return (
      <span key={index}>
        {popcorn >= index + 1 ? (
          <FaStar className="icon-popcorn" />
        ) : popcorn >= number ? (
          <FaStarHalfAlt className="icon-popcorn" />
        ) : (
          <AiOutlineStar className="icon-popcorn" />
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

export default Popcorn;
