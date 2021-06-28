import React from "react";
import "./WCUCard.css";

function WCUCard({ Logo, heading, content }) {
  return (
    <div className="wcucard w-10/12 mt-10 md:w-80 lg:h-96 flex flex-col items-center p-5 pt-14 pb-14 text-center">
      <Logo style={{ height: 80, width: 80 }} />
      <div className="wcucard__heading mt-5 font-bold text-xl">{heading}</div>
      <div className="wcucard__content mt-5 text-lg">{content}</div>
    </div>
  );
}

export default WCUCard;
