import React from "react";

export const Section1 = () => {
    return (
        <section className="section-padding section-1-bg">
            <div className="container">

                <div className="row">
                    <div className="col-sm-12 col-md-6 col-md-push-6 features-image res-space">
                        <img src="assets/img/555x590.jpg" alt="555x590" className="img-responsive"/>
                    </div>
                    <div className="col-sm-12 col-md-6 col-md-pull-6 features-col">
                        <h4>Rapid enablement of AI</h4>
                        <h3><span>in EDGE or CLOUD</span></h3>
                        <h4>25x to 100x times faster!</h4>
                    </div>
                </div>
            </div>
        </section>
    );
};
