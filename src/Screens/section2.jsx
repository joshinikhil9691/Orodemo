import React from "react";

export const Section2 = () => {
    return (
        <section className="section-padding bgimage-property" id="services">
            <div className="container">
                <div className="heading-div-1 head-h-div text-center">
                    <h2>AI/IOT Cloud</h2>
                    <p>Rapidly connect and cloud manage any hardware for smart control, monitoring and actionable
                        insights. Use our public cloud or host anywhere (GCP, Azure, AWS, private cloud or bare
                        metal).</p>
                    <div className="underline"/>
                </div>

                <div className="row services-row">
                    <div
                        className="col-xs-6 col-sm-6 col-md-3 text-center services-space-2 services-space-3 onecolumn-res">
                        <div className="services-div">
                            <img src="assets/img/48x48x1.png" alt="48x48x1" className="image-bottom-space1"/>
                            <h5><a href="#">Turn any device into a Cloud Managed Intelligent Device</a></h5>
                            <p className="content-top-space1">Device Management, Multi tenant cloud, Data isolation and
                                encryption, Distributors, VARs, Resellers</p>
                        </div>
                    </div>
                    <div
                        className="col-xs-6 col-sm-6 col-md-3 text-center services-space-2 services-space-3 onecolumn-res">
                        <div className="services-div">
                            <img src="assets/img/48x48x2.png" alt="48x48x2" className="image-bottom-space1"/>
                            <h5><a href="#">Deploy AI pipelines on your IoT data at scale in minutes</a></h5>
                            <p className="content-top-space1">Data Lake, Manage all your data, Forecast, Anomaly,
                                Classify, Pre-built models or build your own</p>
                        </div>
                    </div>
                    <div
                        className="col-xs-6 col-sm-6 col-md-3 text-center services-space-1 services-space-2 onecolumn-res">
                        <div className="services-div">
                            <img src="assets/img/48x48x3.png" alt="48x48x3" className="image-bottom-space1"/>
                            <h5><a href="#">App Store – Select from ready made apps or build your own</a></h5>
                            <p className="content-top-space1">Visualization, Reporting, Alerts & Notifications, AI &
                                Analytics</p>
                        </div>
                    </div>
                    <div
                        className="col-xs-6 col-sm-6 col-md-3 text-center  services-space-1 services-space-2 onecolumn-res">
                        <div className="services-div">
                            <img src="assets/img/48x48x4.png" alt="48x48x4" className="image-bottom-space1"/>
                            <h5><a href="#">Mobile Apps (iOS/Android) for end user or the administrator</a></h5>
                            <p className="content-top-space1">Self signup, Notifications, Free/Premium</p>
                        </div>
                    </div>


                </div>


            </div>
        </section>
    );
};
