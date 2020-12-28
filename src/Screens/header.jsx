import React from "react";

export const Header = () => {
    return (
        <header>
            <nav className="topbar navbar navbar-default navbar-fixed-top clearfix" id="top-nav">
                <div className="">
                    <div className="logo-image">
                        <a href="#"><img src="assets/img/logo.png" alt="150x50"/></a>
                    </div>
                    <div className="navbar-right nav">
                        <div className="navbar-header">
                            <button type="button" className="navbar-toggle collapsed" data-toggle="collapse"
                                    data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
                                <span className="sr-only">Toggle navigation</span>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                                <span className="icon-bar"/>
                            </button>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li className="menu active">
                                        <a href="#">Home</a>
                                    </li>
                                    <li className="menu">
                                        <a href="#">About</a>
                                    </li>
                                    <li className="menu">
                                        <a href="#">Services</a>
                                    </li>
                                    <li className="menu">
                                        <a href="#">Contact Us</a>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
};
