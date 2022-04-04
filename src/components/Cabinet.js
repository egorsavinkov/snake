import React from 'react';
import showplace_1 from "../images/showplace_1.jpg";

const Cabinet = () => {
    // function logOut() {
    //     fb.auth().signOut();
    // }

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <div id="bonusCard">
                    <h2>Bonus card</h2>
                    <div className={'bonusCard'}>
                        <button className={'button button_small'}>Past</button>
                        <div id="card">
                            <img className={'cardImage'} src={showplace_1} alt={'showplace'}/>
                            <div className={'cardText'}>
                                <h5>Up to the next level </h5>
                                <h6>Up to the next level 150 points Up to the next level 150 points Up to the next level
                                    150 points</h6>
                            </div>
                        </div>
                        <button className={'button button_small'}>Next</button>
                    </div>
                </div>
                <h4 id="pointsCabinet">You scored 150 points for the entire game</h4>
                <form id="formChangeSnakeColor">
                    <select id="changeSnakeColor">
                        <option selected disabled>Select snake color</option>
                        <option value="green">Green</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="black">Black</option>
                        <option value="yellow">Yellow</option>
                    </select>
                    <button className={'button button_small button_cabinet'}>
                        Save
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Cabinet;