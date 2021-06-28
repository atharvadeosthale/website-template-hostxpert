import React from "react";
import "./PricingBox.css";

function PricingBox({ price, planName, features, supremeBox }) {
  return (
    <div
      className={`pricingBox w-10/12 bg-white mt-10 md:w-80 ${
        supremeBox && "z-10"
      } flex flex-col items-center p-5 pt-14 pb-14 text-center`}
    >
      <div className="pricingBox__price">
        <b className="text-3xl">$</b>
        <span className="text-6xl">{price}</span>
      </div>
      <div className="pricingBox__name mt-5 text-4xl font-bold">{planName}</div>
      <div className="pricingBox__features mt-5">
        <ul>
          {features.map((feature) => (
            <li className="mt-3">{feature}</li>
          ))}
        </ul>
      </div>
      <a href="#" className="hero__btn mt-10">
        Purchase
      </a>
    </div>
  );
}

export default PricingBox;
