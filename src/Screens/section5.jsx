import React from "react";

export const Section5 = () => {
    return (
        <section className="section-padding section-1-bg chatbot" id="news">
            <div className="container">
                <div className="heading-div-1 head-h-div text-center">
                    <h2>AI Assistants/ Chatbots</h2>
                    <p className="text">Scale your business by adding a virtual assistant with Artificial
                        Intelligence</p>
                    <div className="underline"/>
                </div>
                <div className="row news-row-1">
                    <div className="col-sm-4">
                        <div className="news-img">
                            <img src="assets/img/chatbot.jpg" alt="chatbot" className="img-responsive"/>
                        </div>
                    </div>
                    <div className="col-sm-8">
                        <div className="news-col">

                            <h4><a href="#">On Prem or Cloud</a></h4>

                            <p>Host wherever you prefer – at GCP, AWS, Azure, or your premises
                            </p>

                        </div>
                        <div className="news-col">

                            <h4><a href="#">State of the Art</a></h4>

                            <p>Self learning, neural network based design producing fast and consistent responses.
                            </p>

                        </div>
                        <div className="news-col">

                            <h4><a href="#">Privacy & Secure</a></h4>

                            <p>No 3rd party APIs. Your data and your learning – 100% yours and not shared with anyone!
                            </p>

                        </div>
                        <div className="news-col">

                            <h4><a href="#">Omni channel</a></h4>

                            <p>Chat with your product via multiple channels or just provide customer support.
                                Conversations across all channels – web, sms, email, text, whatsapp, etc.
                            </p>

                        </div>
                    </div>

                </div>


            </div>
        </section>
    );
};
