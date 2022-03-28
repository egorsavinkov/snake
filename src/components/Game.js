import React from 'react';
import showplace_1 from '../images/showplace_1.jpg';

const Game = () => {
    return (
        <div>
            <div className={'level'}>
                <img className={'showplace'} src={showplace_1} alt={'showplace'}/>
                <h6>Up to the next level 150 points</h6>
            </div>
            <div className={'game'}>
            </div>
        </div>
    );
};

export default Game;