import React from 'react';
import {useDispatch} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {playPage} from "../utils/Constants";

const Home = () => {
    const dispatch = useDispatch()

    return (
        <div className={'home'}>
            <div>
                <h1>Hello!</h1>
                <h2>Click play to start the game</h2>
            </div>
            <div className={'home_group'}>
                    <button type={'submit'} className={'button button_big'}
                            onClick={() => dispatch(changePageAction(playPage))}>
                        Play
                    </button>
            </div>
        </div>
    );
};

export default Home;