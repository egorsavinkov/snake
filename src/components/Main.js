import React, {useEffect} from 'react';
import {useSelector} from "react-redux";
import Home from "./Home";
import Play from "./Play";
import Game from "./game/Game";
import Authorization from "./Authorization";
import Registration from "./Registration";
import Winners from "./Winners";
import Tutorial from "./Tutorial";
import Nav from "./Nav";
import Cabinet from "./Cabinet";
import GameOver from "./game/GameOver";
import Level from "./level/Level";
import {
    authorizationPage, cabinetPage, gameOverPage, gamePage,
    homePage, nextLevelPage, playPage, registrationPage, tutorialPage, winnersPage
} from "../utils/Constants";
import updateLocalStorage from "../services/updateLocalStorage";

const Main = () => {
    const page = useSelector(state => state.page)
    const gamePoints = useSelector(state => state.gamePoints);
    const uid = useSelector(state => state.uid);
    const nickname = useSelector(state => state.nickname);
    const password = useSelector(state => state.password);
    const email = useSelector(state => state.email);
    const level = useSelector(state => state.level);
    const snakeColor = useSelector(state => state.snakeColor);

    useEffect(() => {
        updateLocalStorage(uid, nickname, gamePoints, level, snakeColor, email, password);
    })
    switch (page) {
        case homePage:
            return <div><Nav/><Home/></div>
        case playPage:
            return <div><Nav/><Play/></div>
        case registrationPage:
            return <div><Nav/><Registration/></div>
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