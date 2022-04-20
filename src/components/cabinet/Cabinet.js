import React, {useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePageAction, changeSnakeColorAction} from "../../actions/gameActions";
import {black, blue, bonusCard, homePage, indigo, lemon, levelArr, orange, pink, violet} from "../../utils/Constants";
import BonusCard from "./BonusCard";
import updateLocalStorage from "../../services/updateLocalStorage";

const Cabinet = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState('');
    const gamePoints = useSelector(state => state.gamePoints);
    const levelState = useSelector(state => state.level);
    const nickname = useSelector(state => state.nickname);
    const password = useSelector(state => state.password);
    const email = useSelector(state => state.email);
    const uid = useSelector(state => state.uid);
    const [tempLevel, setTempLevel] = useState(levelState);

    const temp = function searchBonusCard(value) {
        let lvl = levelArr.indexOf(value);
        return bonusCard[lvl];
    }

    const previousBonusCard = (value) => {
        if (value === 'zero') {
            return;
        }
        let lvlTemp = levelArr.indexOf(value);
        if (lvlTemp <= 1) {
            return;
        }
        let lvl = levelArr.indexOf(value);
        setTempLevel(levelArr[lvl - 1]);
    }

    const nextBonusCard = (value) => {
        if (value === 'finish') {
            return;
        }
        let lvlTemp = levelArr.indexOf(value);
        let lvlState = levelArr.indexOf(levelState);
        if (lvlTemp >= lvlState) {
            return;
        }
        let lvl = levelArr.indexOf(value);
        setTempLevel(levelArr[lvl + 1]);
    }

    const changeSnakeColor = (color) => {
        switch (color) {
            case black:
                dispatch(changeSnakeColorAction('black'));
                break;
            case indigo:
                dispatch(changeSnakeColorAction('indigo'));
                break;
            case blue:
                dispatch(changeSnakeColorAction('blue'));
                break;
            case pink:
                dispatch(changeSnakeColorAction('pink'));
                break;
            case violet:
                dispatch(changeSnakeColorAction('violet'));
                break;
            case orange:
                dispatch(changeSnakeColorAction('orange'));
                break;
            case lemon:
                dispatch(changeSnakeColorAction('lemon'));
                break;
        }
    }

    return (
        <div className={'box_one_cabinet'}>
            <div className={'box_two'}>
                <div id="bonusCard">
                    <h2 id="bonusCard_h2">Bonus card</h2>
                    <div className={'bonusCard'}>
                        <button className={'button button_small'}
                                onClick={() => previousBonusCard(tempLevel)}
                        >{'<'}
                        </button>
                        <BonusCard card={temp(tempLevel)}/>
                        <button className={'button button_small'}
                                onClick={() => nextBonusCard(tempLevel)}
                        >{`>`}
                        </button>
                    </div>
                </div>
                <h4 id="pointsCabinet">You scored {gamePoints} points for the entire game</h4>
                <div id="formChangeSnakeColor">
                    <select id="changeSnakeColor" defaultValue={'DEFAULT'} onChange={(event) =>
                        setColor(event.target.value)}>
                        <option value='DEFAULT' disabled>Select snake color</option>
                        <option value='orange'>Epicurean Orange</option>
                        <option value='violet'>Dark Royalty</option>
                        <option value='pink'>Brusque Pink</option>
                        <option value='black'>Black</option>
                        <option value='blue'>Blue Elemental</option>
                        <option value='indigo'>Electric Indigo</option>
                        <option value='lemon'>Lemon Chrome</option>
                    </select>
                    <button type={'submit'} className={'button button_big button_cabinet'}
                            onClick={() => {
                                changeSnakeColor(color);
                                updateLocalStorage('', uid, nickname, gamePoints, levelState, color, email, password);
                                dispatch(changePageAction(homePage));
                            }}
                    >Save
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cabinet;