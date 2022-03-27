import React from 'react';
import {useDispatch} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {gamePage, winnersPage} from "../utils/Constants";

const Finish = () => {
    const dispatch = useDispatch()

    return (
        <div>
            <div className={'box_one'}>
                <div className={'box_two'}>
                    <h1>Finish</h1>
                    <h3>Your result 122 points</h3>
                </div>
                <div>
                    <button className={'btn btn-outline-primary btn_finish'}
                            onClick={() => dispatch(changePageAction(winnersPage))}>
                        Winners
                    </button>
                    <button className={'btn btn-outline-primary btn_finish'}
                            onClick={() => dispatch(changePageAction(gamePage))}>
                        Try again
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Finish;