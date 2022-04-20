import React from 'react';

const BonusCard = (props) => {

    return (
        <div id="card">
            <img className={'cardImage'} src={props.card[2]} alt={'showplace'}/>
            <div className={'cardText'}>
                <h5 id={'bonusCard_h5'}>{props.card[0]}</h5>
                <h6 id={'bonusCard_h6'}>{props.card[1]}</h6>
            </div>
        </div>
    );
};

export default BonusCard;