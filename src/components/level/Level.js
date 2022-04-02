import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changeLevelPointsAction, changePageAction} from "../../actions/gameActions";
import {gamePage} from "../../utils/Constants";
import styleCSS from './level.module.css'

const Level = () => {
    const levelPoints = useSelector(state => state.levelPoints)
    const dispatch = useDispatch()

    return (
        <div>
            <div className={'box_one'}>
                <div className={'box_two'}>
                    <h1>Level passed!</h1>
                    <h3>Your result {levelPoints} points</h3>
                </div>
                <div>
                    <button className={`button button_big ${styleCSS.button_level}`}
                            onClick={() => {
                                dispatch(changePageAction(gamePage))
                                dispatch(changeLevelPointsAction(0))
                            }}>
                        Next level
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Level;