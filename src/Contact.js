import React from 'react';
import logo from './triangle.png';
import myLogo from "./z3.png";
import './App.css';
import "./topBar.css";
import "./HomeText.css"
import {NavLink} from "react-router-dom";
import * as Maps from "./MainComponents/Maps";
import House from "./House.png";
import LinkedIn from "./iconfinder_Popular_Social_Media-22_2329259.png"
import GitHub from "./GitHub-Mark-120px-plus.png"
import "./Contact.css"

function Contact() {
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
                <div className="email">
                    <h1>Contact Me via Email</h1>
                    <p>I am currently seeking Internship opportunities for experience.</p>
                    <form>
                        <input placeholder="    NAME"/>
                        <input placeholder="    SUBJECT"/>
                    </form>
                </div>
                <div className="emailBox">
                    <form>
                        <input placeholder="    EMAIL"/>
                    </form>
                </div>
                <div className="messageBox">
                    <form>
                        <input placeholder="    MESSAGE"/>
                    </form>
                </div>
            </div>
            <div className="socialMedia">
                <h1>Connect With Me via</h1>
                <div className="title">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a onMouseEnter={colorChangeGit} onMouseLeave={colorChangeBackGit}
                       href="https://github.com/Pipie123" target="_blank">
                        <img id="gitLogo" src={GitHub} alt="GitHub"/></a>
                    <div><h2 id="git">GitHub:</h2><h3 id="git2">Pipie123 (Albert Wang)</h3></div>
                </div>
                <div className="title">
                    {/* eslint-disable-next-line react/jsx-no-target-blank */}
                    <a onMouseEnter={colorChangeLink} onMouseLeave={colorChangeBackLink}
                       href="https://www.linkedin.com/in/albert-wang-278922178/" target="_blank">
                        <img id="linkedLogo" src={LinkedIn} alt="LinkedIn"/></a>
                    <div><h2 id="linked">LinkedIn:</h2><h3 id="linked2">Albert Wang | LinkedIn</h3></div>
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
let colorChangeLink = () => {
    document.getElementById("linkedLogo").classList.toggle("linkedAnimation");
    document.getElementById("linkedLogo").classList.remove("linkedAnimationBack");
    document.getElementById("linked").style.color = "#0099cc";
    document.getElementById("linked").style.transitionDuration = "1s";
    document.getElementById("linked2").style.color = "#0099cc";
    document.getElementById("linked2").style.transitionDuration = "1s";
};
let colorChangeBackLink = () => {
    document.getElementById("linkedLogo").classList.remove("linkedAnimation");
    document.getElementById("linkedLogo").classList.toggle("linkedAnimationBack");
    document.getElementById("linkedLogo").style.animationDuration = "1s";
    document.getElementById("linked").style.color = "#cccccc";
    document.getElementById("linked").style.transitionDuration = "1s";
    document.getElementById("linked2").style.color = "#cccccc";
    document.getElementById("linked2").style.transitionDuration = "1s";
};
let colorChangeGit = () => {
    document.getElementById("git").style.color = "#ff726f";
    document.getElementById("gitLogo").classList.remove("gitAnimationBack");
    document.getElementById("gitLogo").classList.toggle("gitAnimation");
    document.getElementById("git").style.transitionDuration = "1s";
    document.getElementById("git2").style.color = "#ff726f";
    document.getElementById("git2").style.transitionDuration = "1s";
};
let colorChangeBackGit = () => {
    document.getElementById("git").style.color = "#cccccc";
    document.getElementById("gitLogo").classList.remove("gitAnimation");
    document.getElementById("gitLogo").classList.toggle("gitAnimationBack");
    document.getElementById("git").style.transitionDuration = "1s";
    document.getElementById("git2").style.color = "#cccccc";
    document.getElementById("git2").style.transitionDuration = "1s";
};
export default Contact;
