import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeLevelPointsAction, changePageAction} from "../../actions/gameActions";
import {gamePage, homePage} from "../../utils/Constants";
import styleCSS from './level.module.css'
import updateLocalStorage from "../../services/updateLocalStorage";

const Level = () => {
    const levelPoints = useSelector(state => state.levelPoints);
    const levelState = useSelector(state => state.level);
    const uid = useSelector(state => state.uid);
    const nickname = useSelector(state => state.nickname);
    const password = useSelector(state => state.password);
    const email = useSelector(state => state.email);
    const gamePoints = useSelector(state => state.gamePoints);
    const snakeColor = useSelector(state => state.snakeColor);
    const dispatch = useDispatch();

    return (
        <div>
            {levelState !== 'finish' && uid && <div className={'box_one'}>
                <div className={'box_two'}>
                    <h1>Level passed!</h1>
                    <h3>A new bonus card has appeared in your personal account!<br/>Your result {levelPoints} points.
                    </h3>
                </div>
                <div>
                    <button className={`button button_big ${styleCSS.button_level}`}
                            onClick={() => {
                                updateLocalStorage('', uid, nickname, gamePoints, levelState, snakeColor, email, password);
                                dispatch(changePageAction(gamePage))
                                dispatch(changeLevelPointsAction(0));
                            }}>
                        Next level
                    </button>
                </div>
            </div>}
            {levelState !== 'finish' && !uid && <div className={'box_one'}>
                <div className={'box_two'}>
                    <h1>Level passed!</h1>
                    <h3>Your result {levelPoints} points.</h3>
                </div>
                <div>
                    <button className={`button button_big ${styleCSS.button_level}`}
                            onClick={() => {
                                updateLocalStorage('', uid, nickname, gamePoints, levelState, snakeColor, email, password);
                                dispatch(changePageAction(gamePage))
                                dispatch(changeLevelPointsAction(0));
                            }}>
                        Next level
                    </button>
                </div>
            </div>}
            {levelState === 'finish' && <div className={'box_one'}>
                <div className={'box_two'}>
                    <h1>The game is over!</h1>
                    <h3>The next levels are under development. <br/>The game will start from the initial difficulty
                        level.
                        <br/>Your result {levelPoints} points!</h3>
                </div>
                <div>
                    <button className={`button button_big ${styleCSS.button_level}`}
                            onClick={() => {
                                updateLocalStorage('', uid, nickname, gamePoints, levelState, snakeColor, email, password);
                                dispatch(changePageAction(homePage))
                                dispatch(changeLevelPointsAction(0))
                            }}>
                        Home
                    </button>
                </div>
            </div>}
        </div>
    );
};

export default Level;