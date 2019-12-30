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
                    <h2>I am a Junior at Auburn University pursuing a B.S. degree in Computer Science.</h2>

                    <h2>I am a problem solver who is willing to take on new challenges while being very attentive to
                        details.</h2>

                    <h2>Throughout my life, I have been exposed to and influenced by graphic designs; thus,
                        I have a keen interest in UI/UX designs focusing on front-end development.
                        I acknowledge the impact of future technologies as well as visual designs on customer
                        experience,
                        and I strive to create the best products by combining the two.</h2>

                    <h2>While at Auburn, I have developed several projects through collaborating with designers and
                        engineers, and I am currently looking for internship opportunities to gain further
                        experience in UI/UX and front-end development.</h2>

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
