import React from 'react';
import logo from './triangle.png';
import myLogo from "./z3.png";
import './App.css';
import "./topBar.css";
import "./HomeText.css"
import {NavLink} from "react-router-dom";
import * as Maps from "./MainComponents/Maps";
import House from "./House.png"
import Quest from "./frndquest.png"
import Spark from "./sparkQs.png"
import Last from "./BigOutlastwhite.png"
import Cars from "./cars.png"


function App() {
    return (
        <div>
            <div id="preLoader" onLoad={loader} className="App">
                <header className="App-header">
                    <img src={logo} className="App-logo" alt="logo"/>
                    <p>Loading...</p>
                </header>
            </div>
            <div>
                <NavLink to="/">
                    <img onMouseEnter={bg} onMouseLeave={bgBack} id="image" src={myLogo} className="logo" alt="logo"/>
                </NavLink>
                <div id="b" className="topBar">
                    <h1 id="hidden">H</h1>
                    <h1 id="hidden1">O</h1>
                    <h1 id="hidden2">M</h1>
                    <h1 id="hidden3">E</h1>
                    <img id="house" className="house" src={House} alt="No work"/>
                    {Maps.topBar}
                </div>
                <div className="font" id="font">
                    <h1 id="hideText" onMouseEnter={hoverMechanic}>HOME</h1>
                    <h2 id="hiddenText">Hi, my name is Albert Z Wang.</h2>
                    <h2 id="hiddenText1">As of recently I am interested in FrontEnd Developing along with UI/UX
                        Design</h2>
                    <h2 id="hiddenText2">Below are some of the previous projects I have worked on.</h2>
                </div>
                <div className="projectsFontRight">
                    <h1>PROJECTS</h1>
                    <span></span>
                    <h2 id="right">Adobe XD Projects</h2>
                    <h3 id="right1">I personally worked on them for a couple of weeks.
                        The purpose of this project is to create an app that aides people in
                        creating conversations with a more approachable method.</h3>
                    <img className="imgRight" id="rightImg" src={Quest} alt="frndquest"/>
                    <img className="imgRight2" id="rightImg2" src={Spark} alt="sparkqs"/>
                </div>
                <div className="projectsFontLeft">
                    <h2 id="left">Logo Designs</h2>
                    <h3 id="left1">For the sake of competitive purposes, I was assigned to design logos
                        to match the theme of products presented. I aim to create simple, yet striking details to
                        effectively
                        convey what is being pitched within presentations.</h3>
                    <img className="imgLeft" id="leftImg" src={Cars} alt="cars"/>
                    <img className="imgLeft2" id="leftImg2" src={Last} alt="outlast"/>
                </div>
            </div>
            <div className="box">
                <h1>meow</h1>
            </div>
        </div>
    );
}

let bg = () => {
    document.getElementById('b').style.backgroundColor = "black";
    document.getElementById("font").style.color = "#cccccc";
    document.getElementById("font").style.transitionDuration = "0.5s";
    document.getElementById("hidden").style.display = "inline";
    document.getElementById("hidden").classList.toggle("moveLeft");
    document.getElementById("hidden1").style.display = "inline";
    document.getElementById("hidden1").classList.toggle("moveLeft");
    document.getElementById("hidden2").style.display = "inline";
    document.getElementById("hidden2").classList.toggle("moveLeft");
    document.getElementById("hidden3").style.display = "inline";
    document.getElementById("hidden3").classList.toggle("moveLeft");
    document.getElementById("house").classList.toggle("houseOpacity");
    document.getElementById("b").style.transitionDuration = "1s";
    document.getElementById("image").classList.toggle("rotate");
    document.getElementById("image").classList.remove("rotated");
};

let bgBack = () => {
    document.getElementById("hidden").style.display = "none";
    document.getElementById("hidden").classList.remove("moveLeft");
    document.getElementById("hidden1").style.display = "none";
    document.getElementById("hidden1").classList.remove("moveLeft");
    document.getElementById("hidden2").style.display = "none";
    document.getElementById("hidden2").classList.remove("moveLeft");
    document.getElementById("hidden3").style.display = "none";
    document.getElementById("hidden3").classList.remove("moveLeft");
    document.getElementById("house").classList.remove("houseOpacity");
    document.getElementById('b').style.backgroundColor = "#cccccc";
    document.getElementById("font").style.color = "black";
    document.getElementById("font").style.transitionDuration = "0.5s";
    document.getElementById("b").style.transitionDuration = "0.5s";
    document.getElementById("image").classList.toggle("rotated");
    document.getElementById("image").style.animationDuration = "0.5s";
};

let hoverMechanic = () => {
    document.getElementById("hideText").style.color = "#282c34";
    document.getElementById("hideText").style.transitionDuration = "1s";
    document.getElementById("hiddenText").style.color = "black";
    document.getElementById("hiddenText").style.transitionDuration = "1s";
    document.getElementById("hiddenText1").style.color = "gray";
    document.getElementById("hiddenText1").style.transitionDuration = "1s";
    document.getElementById("hiddenText1").style.transitionDelay = "1s";
    document.getElementById("hiddenText2").style.color = "#cccccc";
    document.getElementById("hiddenText2").style.transitionDuration = "1s";
    document.getElementById("hiddenText2").style.transitionDelay = "2s";

};

let loader = () => {
    document.getElementById("preLoader").style.display = "none";
};
export default App;

window.onscroll = function () {
    scrollTest()
};
let scrollCounter = 0;
let scrollTest = () => {
    if ((document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) && scrollCounter < 1) {
        scrollCounter++;
        document.getElementById("right").classList.toggle("transitionLeft");
        document.getElementById("rightImg").classList.toggle("imageAppear");
        document.getElementById("rightImg2").classList.toggle("imageAppear");
        document.getElementById("right1").classList.toggle("transitionLeft2");
    }
    if ((document.body.scrollTop > 1200 || document.documentElement.scrollTop > 1200) && scrollCounter < 2) {
        scrollCounter++;
        document.getElementById("left").classList.toggle("transitionRight");
        document.getElementById("leftImg").classList.toggle("imageAppear");
        document.getElementById("leftImg2").classList.toggle("imageAppear");
        document.getElementById("left1").classList.toggle("transitionRight2");
    }
};
