import React from "react";
import WCUCard from "./WCUCard";
import "./WhyChooseUs.css";
import { ReactComponent as FastLogo } from "./resources/fast.svg";
import { ReactComponent as SupportLogo } from "./resources/support.svg";
import { ReactComponent as UptimeLogo } from "./resources/uptime.svg";

function WhyChooseUs() {
  return (
    <div className="whyChooseUs p-5 md:pl-36 md:pr-36 md:h-screen text-center lg:text-left">
      <div className="whyChooseUs__heading underline text-5xl font-bold mt-20">
        Why choose us?
      </div>
      <div className="whyChooseUs__cards flex lg:justify-between items-center flex-col lg:flex-row mt-14">
        <WCUCard
          Logo={FastLogo}
          heading="Fast Loading Speed"
          content="We put in time and ensure our servers are super fast so that your website get the fastest loading speed ever."
        />
        <WCUCard
          Logo={UptimeLogo}
          heading="99.9% Server Uptime"
          content="Our customers matter to us and we spend a lot of time ensuring that your websites are always up with no downtimes."
        />
        <WCUCard
          Logo={SupportLogo}
          heading="24/7 Support Service"
          content="Our support team is online 24/7. If you need assistance or require some special feature, we will always be there for you."
        />
      </div>
    </div>
  );
}

export default WhyChooseUs;
