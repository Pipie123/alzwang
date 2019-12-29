import React from 'react';
import logo from './triangle.png';
import myLogo from "./z3.png";
import "./About.css";
import './App.css';
import "./topBar.css";
import "./HomeText.css"
import {NavLink} from "react-router-dom";
import * as Maps from "./MainComponents/Maps";
import House from "./House.png";


function About() {
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
                <div className="about">
                    <h1>About Me</h1>
                    <h2>I am currently an undergraduate student working for a degree in Computer Science.</h2>
                    <h2>I am a problem solver who is willing to take on new challenges who is very attentive to
                        detail.</h2>
                    <h2>During my life, I am exposed and influenced by graphic design, thus I am aiming to
                        focus more of the front end aspect. I also acknowledge the impact of future technologies,
                        such as AR and VR, thus I aim to learn to work with those features.</h2>
                    <h2>To gain more experience, I seek to work in frontend and hopefully work in a
                        healthy and friendly environment.</h2>
                </div>
            </div>
        </div>
    );
}

let bg = () => {
    document.getElementById('b').style.backgroundColor = "black";
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
    document.getElementById("b").style.transitionDuration = "0.5s";
    document.getElementById("image").classList.toggle("rotated");
    document.getElementById("image").style.animationDuration = "0.5s";

};
let loader = () => {
    document.getElementById("preLoader").style.display = "none";
};
export default About;
