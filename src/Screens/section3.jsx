import React from "react";

export const Section3 = () => {
    return (
        <section className="section-2-bg two-left-right-bg">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-12 col-md-6 two-left-bgimage bgimage-property">

                    </div>
                    <div className="container">
                        <div className="col-sm-12 col-md-6 two-left-div">
                            <h3 className="head-text">Real-time Edge AI</h3>
                            <h6 className="text">Cloud is just too far, unreliable, & slow for real-time analysis and
                                action. Use local intelligence at the edge for vision, sound and sensor data:</h6>
                            <div className="underline-1"/>
                            <ul className="ul-text">
                                <li><p>Identifying human emotions and behavior</p></li>
                                <li><p>Recognizing human actions and interactions</p></li>
                                <li><p>Understanding surroundings</p></li>
                                <li><p>Predicting the intent as well as what’s next</p></li>
                                <li><p>Multiple patterns and objects in parallel</p></li>
                                <li><p>Small footprints fit for IOT devices</p></li>
                            </ul>
                            <div className="btn-top-space">
                                <a href="#inprogress" className="btn btn-1 tryBtn">Learn more </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};
