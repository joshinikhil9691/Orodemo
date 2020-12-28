import React from "react";

export const Section8 = () => {
    return (
        <div className="footer-section section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-4 footer-col">
                        <div className="footer-logo">
                            <a href="#"><img src="assets/img/footer-img.png" alt="logo"
                                             className="img-responsive"/></a>
                        </div>

                    </div>
                    <div className="col-sm-4 footer-col-1">

                        <div id="mc_embed_signup" className="subscribe-form">
                            <h4>Search </h4>
                            <form
                                action="http://evethemes.us11.list-manage.com/subscribe/post?u=a795532c55a578843e04b09c0&amp;id=fa362f029a"
                                method="post" id="mc-embedded-subscribe-form" name="mc-embedded-subscribe-form"
                                className="validate form7 clearfix" noValidate>

                                <input className="subscribe-input" type="email" name="EMAIL" value=""
                                       id="mce-EMAIL"
                                       placeholder="Please Enter Email"/>
                                <div className="subscribe-btn">
                                    <button className="btn btn-1" id="mc-embedded-subscribe" type="submit">
                                        Search
                                    </button>
                                </div>

                                <div id="mce-responses">
                                    <div className="response response-msg" id="mce-error-response"/>
                                    <div className="response response-msg" id="mce-success-response"/>
                                </div>
                            </form>
                            <div id="ResultMsg" className="message">
                                <p className="SuccessMsg"/>
                                <p className="FailureMsg"/>
                            </div>
                        </div>

                    </div>
                    <div className="col-sm-4">
                        <div className="contact-div">
                            <ul className="content-ul contact-address contact-address-space">
                                <li><img src="assets/images/32x32x5.png" alt="32x32x5"/></li>
                                <li>
                                    <p><a href="#">info@oronetworks.com</a></p>
                                </li>
                            </ul>
                            <ul className="content-ul contact-address contact-address-space">
                                <li><img src="assets/images/32x32x6.png" alt="32x32x6"/></li>
                                <li>
                                    <p>3141 Stevens Creek Blvd San Jose CA 95117</p>
                                </li>
                            </ul>

                            <ul className="content-ul contact-address">
                                <li><img src="assets/images/32x32x8.png" alt="32x32x8"/></li>
                                <li>
                                    <p> +1 408-203-5641</p>
                                </li>
                            </ul>
                        </div>
                        <ul className="content-ul footer1-icon">
                            <li><a href="https://twitter.com/oronetworks">
                                <img src="assets/images/twitter.png"
                                     alt="40x40x2"  className="socialIcontwitter"/></a></li>
                            <li>
                                <a href="https://www.linkedin.com/company/oronetworks/">
                                    <img src="assets/images/linked.png" alt="40x40x1" className="socialIconlinkedin"/></a></li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};
