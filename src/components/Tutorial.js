import React from 'react';
import {useDispatch} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {playPage} from "../utils/Constants";

const Tutorial = () => {
    const dispatch = useDispatch()

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <h5>
                    <p>
                        Snaky travels around Israel and wants to discover new sights. One can only envy his curiosity!
                    </p>
                    <p>
                        Control the snake with the up, down, left and right keys to change the trajectory of
                        movement.
                        Increase points by passing through points on the playing field. Touching the edge of the
                        field or
                        the snake itself will end the level with the current score.
                        Repeat the game to increase the score.
                    </p>
                    <p>
                        For registered players, upon reaching a certain number of points for one level, a bonus card
                        is
                        opened. To advance to a new level and receive the next bonus, Snaky must collect the
                        specified
                        number of points. And also you can see yourself in the list of winners who scored the
                        maximum
                        number of points for the entire time of the game.
                    </p>
                    <p>
                        Good luck and happy travels!
                    </p>
                </h5>
                <button className={'btn btn-outline-primary btn_big'}
                        onClick={() => dispatch(changePageAction(playPage))}>
                    Play
                </button>
            </div>
        </div>
    );
};

export default Tutorial;