import React from "react";
import { useState } from "react";
import { fooLogo } from "../index"
import faqData from "../FAQs/FAQData";
import FaqAccorionItems from "../FAQs/FaqAccorionItems";

function FAQ(props) {
    const [clicked, setClicked] = useState("0");
    const handleToggle = (index) => {
        if (clicked === index) {
           
         return setClicked("0");
         
        }
        setClicked(index);
       };
  return (
    <div>
      <div
        className="faq-section pt-13 pt-lg-25 pb-15
    pb-md-20 pb-lg-32 white-mode-texts
    with-planet-bg overflow-hidden position-relative
    border-top"
      >
        <svg className="bg-wave-box-end-z1" viewBox="0 0 1440 320">
          <defs>
            <linearGradient id="footer-gradient">
              <stop offset="0%" stopColor="#212433" />
              <stop offset="39%" stopColor="#242837" />
              <stop offset="100%" stopColor="#0e1019" />
            </linearGradient>
          </defs>
          <path
            fill="#171a26"
            d="M0,128L80,138.7C160,149,320,171,480,192C640,213,800,235,960,234.7C1120,235,1280,213,1360,202.7L1440,192L1440,320L1360,320C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320L0,320Z"
          ></path>
        </svg>

        <div className="container">
          <div
            className="row
                        justify-content-center"
          >
            <div
              className="col-xl-8
                            col-lg-9"
            >
              <div
                className="px-md-12
                                text-center mb-9
                                mb-lg-13"
              >
                <h2
                  className="title
                                    coodiv-text-4
                                    mb-8"
                >
                  FREQUENTLY ASKED QUESTIONS
                </h2>
                <p
                  className="coodiv-text-8
                                    mb-0"
                >
                  Below you'll find answers to the questions we get asked the
                  most about our services.
                </p>
              </div>
            </div>
          </div>

          <div
            className="row
                        justify-content-center"
          >
            <div
              className="col-xl-8
                            col-lg-9"
            >
              <div className="accordion">
                {
                    faqData.map((faqVal, index) =>(
                    <FaqAccorionItems key={index} faqVal={faqVal} onToggle={() => handleToggle(index)} active={clicked === index}/>
                    ))
                }
              </div>
            </div>

            <div
              className="reviews-overview
                            text-center mt-9 mb-0"
            >
              <p
                className="color-blackish-blue-opacity
                                coodiv-text-10
                                d-lg-flex
                                align-items-center"
              >
                <img className="website-logo" src={fooLogo} alt="main logo" />{" "}
                is rated
                <strong>Excellent</strong>
                <span
                  className="reviews-stars
                                    ml-5"
                >
                  <i
                    className="feather
                                        icon-star-on"
                  ></i>
                  <i
                    className="feather
                                        icon-star-on"
                  ></i>
                  <i
                    className="feather
                                        icon-star-on"
                  ></i>
                  <i
                    className="feather
                                        icon-star-on"
                  ></i>
                  <i
                    className="feather
                                        icon-star-on"
                  ></i>
                </span>
                <strong>4.89</strong>&nbsp;out of 5 based on
                <strong>3,432 reviews</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
