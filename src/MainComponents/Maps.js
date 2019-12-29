import React from "react";
import * as Information from "./Information";
import * as Props from "./Props";

export const sideBar = Information.SideBarInformation.map(props =>
    <Props.Props key={props.id} name={props.name} image={props.image} page={props.page}/>);
export const sideBarContact = Information.SideBarInformationContact.map(props =>
    <Props.Props key={props.id} name={props.name} image={props.image} page={props.page}/>);
export const sideBarAbout = Information.SideBarInformationAbout.map(props =>
    <Props.Props key={props.id} name={props.name} image={props.image} page={props.page}/>);
export const topBar = Information.TopBarInformation.map(props =>
    <Props.Navigation id="top" key={props.id} name={props.name} page={props.page}/>);
export const topBarOn = Information.TransitionTopBarOn.map(props =>
    <Props.TopBarOn key={props.id} element={props.element} token={props.token}/>);
export const topBarDisplay = Information.DisplayTopBarOn.map(props =>
    <Props.TopBarOnDisplay key={props.id} element={props.element} display={props.display} effect={props.effect}/>);
