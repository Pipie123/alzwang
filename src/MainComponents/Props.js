import React from "react";
import {NavLink} from "react-router-dom";

export let Props = (props) => {
    return <a href={props.page}><h2>{props.name}</h2></a>
};

export let Navigation = (props) => {
    return <NavLink to={props.page}><h2>{props.name}</h2></NavLink>
};

export let TopBarOn = (props) => {
    return document.getElementById(props.element).classList.toggle(props.token);
};
export let TopBarOnDisplay = (props) => {
    return document.getElementById(props.element).style.props.display = props.effect;
};
