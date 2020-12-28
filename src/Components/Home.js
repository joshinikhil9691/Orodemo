import React, {Component} from "react";
import {Header} from "../Screens/header";
import {Dashboard} from "../Screens/home";
import {Section1} from "../Screens/section1";
import {Section2} from "../Screens/section2";
import {Section3} from "../Screens/section3";
import {Section5} from "../Screens/section5";
import {Section6} from "../Screens/section6";
import {Section8} from "../Screens/section8";
import {Section9} from "../Screens/section9";
import {Section4} from "../Screens/section4";



export default class Home extends Component {
    render() {
        return (
            <div data-spy="scroll" data-target=".navbar-fixed-top" data-offset="100">
                <Header/>
                <Dashboard/>
                <Section1/>
                <Section2/>
                <Section3/>
                <Section4/>
                <Section5/>
                <Section6/>
                <Section8/>
                <Section9/>
            </div>
        );
    }
}
