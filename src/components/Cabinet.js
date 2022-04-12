import React, {useState} from 'react';
import bc1 from "../images/bc1.jpg";
import {useDispatch, useSelector} from "react-redux";
import {changePageAction, changeSnakeColorAction} from "../actions/gameActions";
import {homePage} from "../utils/Constants";

const Cabinet = () => {
    const dispatch = useDispatch();
    const [color, setColor] = useState('');
    const gamePoints = useSelector(state => state.gamePoints);

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
                        <button className={'button button_small'}>Past</button>
                        <div id="card">
                            <img className={'cardImage'} src={bc1} alt={'showplace'}/>
                            <div className={'cardText'}>
                                <h5>Up to the next level </h5>
                                <h6>Up to the next level 150 points Up to the next level 150 points Up to the next level
                                    150 points</h6>
                            </div>
                        </div>
                        <button className={'button button_small'}>Next</button>
                    </div>
                </div>
                <h4 id="pointsCabinet">You scored {gamePoints} points for the entire game</h4>
                <div id="formChangeSnakeColor">
                    <select id="changeSnakeColor" onChange={(event) =>
                        setColor(event.target.value)}>
                        <option defaultValue={'none'} disabled>Select snake color</option>
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