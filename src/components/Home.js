import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {gamePage, playPage} from "../utils/Constants";

const Home = () => {
    const dispatch = useDispatch();
    const nickname = useSelector(state => state.nickname);

    return (
        <div className={'home'}>
            <div>
                <h1>Hello!</h1>
                <h2>Click play to start the game</h2>
            </div>
            <div className={'home_group'}>
                {!nickname && <button type={'submit'} className={'button button_big'}
                                      onClick={() => dispatch(changePageAction(playPage))}>
                    Play
                </button>}
                {nickname && <button type={'submit'} className={'button button_big'}
                                     onClick={() => dispatch(changePageAction(gamePage))}>
                    Play
                </button>}
            </div>
        </div>
    );
};

export default Home;