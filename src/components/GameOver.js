import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeLevelPointsAction, changePageAction} from "../actions/gameActions";
import {gamePage} from "../utils/Constants";
import updateLocalStorage from "../services/updateLocalStorage";

const GameOver = () => {
    const levelPoints = useSelector(state => state.levelPoints);
    const dispatch = useDispatch();
    const nickname = useSelector(state => state.nickname);
    const password = useSelector(state => state.password);
    const email = useSelector(state => state.email);
    const gamePoints = useSelector(state => state.gamePoints);
    const level = useSelector(state => state.level);
    const snakeColor = useSelector(state => state.snakeColor);
    const uid = useSelector(state => state.uid);

    return (
        <div>
            <div className={'box_one'}>
                <div className={'box_two'}>
                    <h1 className={'gameOver_level_h1'}>Game Over</h1>
                    <h3 className={'gameOver_level_h3'}>Your result {levelPoints} points!</h3>
                </div>
                <div>
                    <button className={'button button_big button_finish'}
                            onClick={() => {
                                updateLocalStorage('', uid, nickname, gamePoints, level, snakeColor, email, password);
                                dispatch(changePageAction(gamePage))
                                dispatch(changeLevelPointsAction(0))
                            }}>
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default GameOver;