import React from 'react'

function FirstTabContent() {
  return (
    <div className="main-homepage-item">
            <div className="row justify-content-center">
                <div className="col-lg-4 col-md-6 col-sm-8 mb-9
                    pr-lg-0">
                    <div className="cpanel-plan side-plan plan-1
                        box-shadow-1 bg-white rounded-left-20
                        text-center pb-10 pt-15 pr-6 pl-6
                        position-relative overflow-hidden mt-12">
                        <h5 className="title coodiv-text-5 mb-7
                            d-inline-block">Hatchling Plan</h5>
                        <div id="pricing-dynamic-deck2" className="mb-9"
                            data-pricing-dynamic=""
                            data-value-active="yearly">
                            <div className="mb-4 d-inline-flex
                                position-relative"
                                id="pricing-dynamic-deck--head2">
                                <a href="" className="btn-toggle active mx-3 price-deck-trigger">
                                    <span className="round"></span>
                                    <span className="year">Yearly</span>
                                    <span className="month">Monthly</span>
                                </a>
                            </div>
                            <div className="d-flex align-items-end
                                justify-content-center mt-1">
                                <span className="currency mr-2
                                    coodiv-text-6 font-weight-bold
                                    line-spacing-none
                                    text-blackish-blue">$</span>
                                <h2 className="price-value coodiv-text-2
                                    font-weight-bold
                                    line-spacing-none mb-0
                                    dynamic-value
                                    text-blackish-blue"
                                    data-active="87"
                                    data-monthly="23"
                                    data-yearly="87">
                                    <span className="d-none">.</span>
                                    <span
                                        className="price-value-little-chifre">.99</span>
                                </h2>
                            </div>
                            <span className="price-bottom-text
                                dynamic-value coodiv-text-11 mt-5
                                text-blackish-blue coodiv-opacity-7
                                d-inline-flex" data-active="billed
                                yearly" data-monthly="billed
                                monthly" data-yearly="billed
                                yearly"></span>
                        </div>
                        <ul className="special-helf-box-list
                            list-style-check mt-7 mt-lg-3">
                            <li className="chacked">
                                <a 
                                    className="popover-host-features"
                                    >
                                    FREE SSL Certificate
                                </a>
                            </li>
                            <li className="chacked">2 TB of Space</li>
                            <li className="chacked">Unlimited Bandwidth</li>
                            <li className="chacked">Full backup Systems</li>
                            <li className="not-chacked">2 TB of Space</li>
                            <li className="not-chacked">Unlimited
                                Bandwidth</li>
                        </ul>
                        <a className="btn btn-warning coodiv-text-9
                            d-block w-100 mt-8" href="#">
                            Get started now
                        </a>
                    </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-8 mb-9
                    pl-lg-0">

                    <div className="cpanel-plan plan-1 box-shadow-1
                        bg-white rounded-20 text-center pb-10 pt-15
                        pr-6 pl-6 position-relative overflow-hidden
                        border-left-separate">
                        <span className="cpanel-plan-recommend">We
                            Recommend</span>
                        <span className="cpanel-plan-off">65% off!</span>
                        <h5 className="title coodiv-text-5 mb-7 mt-5
                            d-inline-block">Business Plan</h5>
                        <div id="pricing-dynamic-deck1" className="mb-9"
                            data-pricing-dynamic=""
                            data-value-active="yearly">
                            <div className="mb-4 d-inline-flex
                                position-relative"
                                id="pricing-dynamic-deck--head1">
                                <a href=""
                                    className="btn-toggle active mx-3
                                    price-deck-trigger"
                                    >
                                    <span className="round"></span>
                                    <span className="year">Yearly</span>
                                    <span className="month">Monthly</span>
                                </a>
                            </div>
                            <div className="d-flex align-items-end
                                justify-content-center mt-1">
                                <span className="currency mr-2
                                    coodiv-text-6 font-weight-bold
                                    line-spacing-none
                                    text-blackish-blue">$</span>
                                <h2 className="price-value coodiv-text-2
                                    font-weight-bold
                                    line-spacing-none mb-0
                                    dynamic-value
                                    text-blackish-blue"
                                    data-active="195"
                                    data-monthly="49"
                                    data-yearly="195">
                                    <span className="d-none">.</span>
                                    <span
                                        className="price-value-little-chifre">.00</span>
                                </h2>
                            </div>
                            <span className="price-bottom-text
                                dynamic-value coodiv-text-11 mt-5
                                text-blackish-blue coodiv-opacity-7
                                d-inline-flex" data-active="billed
                                yearly" data-monthly="billed
                                monthly" data-yearly="billed
                                yearly"></span>
                        </div>
                        <ul className="special-helf-box-list
                            list-style-check mt-7 mt-lg-3">
                            <li className="chacked">
                                <a 
                                    className="popover-host-features"
                                    >
                                    All Important Features
                                </a>
                            </li>
                            <li className="chacked">
                                <a 
                                    className="popover-host-features"
                                    >
                                    FREE SSL Certificate
                                </a>
                            </li>
                            <li className="chacked">2 TB of Space</li>
                            <li className="chacked">Unlimited Bandwidth</li>
                            <li className="chacked">Full backup Systems</li>
                            <li className="not-chacked">2 TB of Space</li>
                            <li className="not-chacked">Unlimited
                                Bandwidth</li>
                            <li className="not-chacked">Full backup
                                Systems</li>
                        </ul>
                        <a className="btn btn-warning coodiv-text-9
                            d-block w-100 mt-8" href="#">
                            Get started now
                        </a>
                    </div>

                </div>
            </div>
        </div>
  )
}

export default FirstTabContent