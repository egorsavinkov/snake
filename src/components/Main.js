import React from 'react';
import Home from "./Home";
import Play from "./Play";
import Finish from "./Finish";
import Game from "./Game";
import Authorization from "./Authorization";
import Winners from "./Winners";
import {useSelector} from "react-redux";
import Tutorial from "./Tutorial";
import {
    authorizationPage,
    finishPage,
    gamePage,
    homePage,
    playPage,
    tutorialPage,
    winnersPage
} from "../utils/Constants";

const Main = () => {
    const page = useSelector(state => state.page)

    switch (page) {
        case homePage:
            return <Home/>
        case playPage:
            return <Play/>
        case finishPage:
            return <Finish/>
        case gamePage:
            return <Game/>
        case authorizationPage:
            return <Authorization/>
        case tutorialPage:
            return <Tutorial/>
        case winnersPage:
            return <Winners/>
        default:
            return <Home/>
    }
};

export default Main;