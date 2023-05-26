import React, { useEffect, useState } from "react";

// images popcorn coin
import coin_0star from "../images/Corn-0stars.PNG"
import coin_1star from "../images/Corn-1stars.PNG"
import coin_2star from "../images/Corn-2stars.PNG"
import coin_3star from "../images/Corn-3stars.PNG"
import coin_4star from "../images/Corn-4stars.PNG"
import coin_5star from "../images/Corn-5stars.PNG"



const PopcornCoinRate = ({ score }) => {

    const [imgCoinStar, setImgCoinStar] = useState(coin_0star);
    useEffect(() => {
        const changeImgPopcornCoin = () => {
            if (score >= 5 ) {
                setImgCoinStar(coin_5star);
            } else if (score >= 4) {
                setImgCoinStar(coin_4star);
            } else if (score >= 3) {
                setImgCoinStar(coin_3star);
            } else if (score >= 2) {
                setImgCoinStar(coin_2star);
            } else if (score >= 1) {
                setImgCoinStar(coin_1star);
            } else {
                setImgCoinStar(coin_0star);
            }
        }

        changeImgPopcornCoin();
      }, [score]);

  return (
    <div>
        <div className="">
            <img src={imgCoinStar} alt="popcorn coin" width="80px" height="80px" className="p-0 m-0"/>
        </div>
    </div>
  )
};

export default PopcornCoinRate;