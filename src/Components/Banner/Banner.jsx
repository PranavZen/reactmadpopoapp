import React from "react";
import Pricecard from "../PriceCard/Pricecard";

import TypedComponent from "../TypedComponent";

function Banner() {
  return (
    <div>
      <TypedComponent />
      <div className="header-hero-pricing-plans position-relative">
        <Pricecard />
      </div>
      <svg className="bg-wave-box-end-z1 newSVG" viewBox="0 0 1440 320">
                    <path fill="#fff" d="M0,64L34.3,90.7C68.6,117,137,171,206,186.7C274.3,203,343,181,411,176C480,171,549,181,617,170.7C685.7,160,754,128,823,149.3C891.4,171,960,245,1029,250.7C1097.1,256,1166,192,1234,176C1302.9,160,1371,192,1406,208L1440,224L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"></path>
                </svg>
    </div>
  );
}

export default Banner;
