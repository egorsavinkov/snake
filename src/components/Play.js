import React from 'react';
import {useDispatch} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {authorizationPage, gamePage} from "../utils/Constants";

const Play = () => {
    const dispatch = useDispatch()

    return (
        <div className={'box_one'}>
            <div className={'play_group'}>
                <div className={'box_two'}>
                    <h3>Register, play and follow your results in the list of winners</h3>
                    <button className={'btn btn-outline-primary btn_big'}
                            onClick={() => dispatch(changePageAction(authorizationPage))}>
                        Registration
                    </button>
                </div>
                <div className={'box_two'}>
                    <h3>Play without registration and the ability to track your points</h3>
                    <button className={'btn btn-outline-primary btn_big'}
                            onClick={() => dispatch(changePageAction(gamePage))}>
                        Play
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Play;