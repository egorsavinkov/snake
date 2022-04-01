import React from 'react';
import Home from "./Home";
import Play from "./Play";
import Finish from "./Finish";
import Game from "./Game/Game";
import Authorization from "./Authorization";
import Winners from "./Winners";
import {useSelector} from "react-redux";
import Tutorial from "./Tutorial";
import Nav from "./Nav";
import Cabinet from "./Cabinet";
import {
    authorizationPage, cabinetPage, finishPage, gamePage, homePage, playPage, tutorialPage, winnersPage
} from "../utils/Constants";

const Main = () => {
    const page = useSelector(state => state.page)

    switch (page) {
        case homePage:
            return (<div><Nav/><Home/></div>)
        case playPage:
            return (<div><Nav/><Play/></div>)
        case finishPage:
            return (<div><Nav/><Finish/></div>)
        case cabinetPage:
            return (<div><Nav/><Cabinet/></div>)
        case gamePage:
            return (<div><Nav/><Game/></div>)
        case authorizationPage:
            return (<div><Nav/><Authorization/></div>)
        case tutorialPage:
            return (<div><Nav/><Tutorial/></div>)
        case winnersPage:
            return (<div><Nav/><Winners/></div>)
        default:
            return (<div><Nav/><Home/></div>)
    }
};

export default Main;