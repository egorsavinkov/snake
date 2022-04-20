import React from 'react';
import styleCSS from './game.module.css'
import {useSelector} from "react-redux";

const Snake = (props) => {
    const snakeColorState = useSelector(state => state.snakeColor);
    return (
        <div>
            {props.snakeDots.map((dot, index) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className={`${styleCSS.snake_dot} ${snakeColorState}`} key={index} style={style}>
                    </div>
                )
            })}
        </div>
    );
};

export default Snake;