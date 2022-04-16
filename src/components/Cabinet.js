import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePageAction, changeSnakeColorAction} from "../actions/gameActions";
import {bonusCard, homePage, levelArr} from "../utils/Constants";
import BonusCard from "./BonusCard";

const Cabinet = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState('');
    const gamePoints = useSelector(state => state.gamePoints);
    const levelState = useSelector(state => state.level);
    const [tempLevel, setTempLevel] = useState(levelState);

    const temp = function searchBonusCard(value) {
        let lvl = levelArr.indexOf(value);
        return bonusCard[lvl];
    }

    const previousBonusCard = (value) => {
        if (value === 'zero') {
            return
        }
        let lvlTemp = levelArr.indexOf(value);
        if (lvlTemp <= 1) {
            return
        }
        let lvl = levelArr.indexOf(value);
        setTempLevel(levelArr[lvl - 1])
    }

    const nextBonusCard = (value) => {
        if (value === 'finish') {
            return
        }
        let lvlTemp = levelArr.indexOf(value);
        let lvlState = levelArr.indexOf(levelState);
        if (lvlTemp >= lvlState) {
            return
        }
        let lvl = levelArr.indexOf(value);
        setTempLevel(levelArr[lvl + 1])
    }

    const changeSnakeColor = (color) => {
        switch (color) {
            case 'black':
                return dispatch(changeSnakeColorAction('black'));
            case 'blue':
                return dispatch(changeSnakeColorAction('blue'));
            case 'red':
                return dispatch(changeSnakeColorAction('red'));
            case 'yellow':
                return dispatch(changeSnakeColorAction('yellow'));
            case 'green':
                return dispatch(changeSnakeColorAction('green'));
        }
    }

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <div id="bonusCard">
                    <h2>Bonus card</h2>
                    <div className={'bonusCard'}>
                        <button className={'button button_small'}
                                onClick={() => previousBonusCard(tempLevel)}
                        >Previous
                        </button>
                        <BonusCard card={temp(tempLevel)}/>
                        <button className={'button button_small'}
                                onClick={() => nextBonusCard(tempLevel)}
                        >Next
                        </button>
                    </div>
                </div>
                <h4 id="pointsCabinet">You scored {gamePoints} points for the entire game</h4>
                <div id="formChangeSnakeColor">
                    <select id="changeSnakeColor" defaultValue={'DEFAULT'} onChange={(event) =>
                        setColor(event.target.value)}>
                        <option value="DEFAULT" disabled>Select snake color</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <button type={'submit'} className={'button button_small button_cabinet'}
                            onClick={(event) => {
                                changeSnakeColor(color);
                                dispatch(changePageAction(homePage))
                            }}
                    >Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cabinet;