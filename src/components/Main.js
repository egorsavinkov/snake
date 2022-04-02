import React from 'react';
import {useSelector} from "react-redux";
import Home from "./Home";
import Play from "./Play";
import Game from "./game/Game";
import Authorization from "./Authorization";
import Winners from "./Winners";
import Tutorial from "./Tutorial";
import Nav from "./Nav";
import Cabinet from "./Cabinet";
import GameOver from "./game/GameOver";
import Level from "./level/Level";
import {
    authorizationPage, cabinetPage, gameOverPage, gamePage,
    homePage, nextLevelPage, playPage, tutorialPage, winnersPage
} from "../utils/Constants";

const Main = () => {
    const page = useSelector(state => state.page)

    switch (page) {
        case homePage:
            return <div><Nav/><Home/></div>
        case playPage:
            return <div><Nav/><Play/></div>
        case gameOverPage:
            return <div><Nav/><GameOver/></div>
        case cabinetPage:
            return <div><Nav/><Cabinet/></div>
        case gamePage:
            return <div><Nav/><Game/></div>
        case nextLevelPage:
            return <div><Nav/><Level/></div>
        case authorizationPage:
            return <div><Nav/><Authorization/></div>
        case tutorialPage:
            return <div><Nav/><Tutorial/></div>
        case winnersPage:
            return <div><Nav/><Winners/></div>
        default:
            return <div><Nav/><Home/></div>
    }
};

export default Main;