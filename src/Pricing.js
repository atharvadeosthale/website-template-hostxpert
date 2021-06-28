import React from "react";
import "./Pricing.css";
import PricingBox from "./PricingBox";

function Pricing() {
  return (
    <div className="pricing p-5 md:pl-36 md:pr-36 md:h-screen flex md:items-center justify-center">
      <div className="pricing__container flex items-center flex-col lg:flex-row w-full justify-center">
        <PricingBox
          price="1.99"
          planName="Starter"
          features={[
            "cPanel Access",
            "200MB SSD Storage",
            "5TB Bandwidth",
            "3 E-Mail Accounts",
            "E-mail Support",
          ]}
          supremeBox={false}
        />
        <PricingBox
          price="9.99"
          planName="Supreme"
          features={[
            "cPanel Access",
            "Unlimited Storage",
            "Unlimited Bandwidth",
            "Unlimited E-Mail Accounts",
            "SSH Access",
            "E-mail Support",
            "Chat Support",
          ]}
          supremeBox={true}
        />
        <PricingBox
          price="4.99"
          planName="Premium"
          features={[
            "cPanel Access",
            "1GB SSD Storage",
            "10TB Bandwidth",
            "5 E-Mail Accounts",
            "E-mail Support",
          ]}
          supremeBox={false}
        />
      </div>
    </div>
  );
}

export default Pricing;
