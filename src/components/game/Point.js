import React from 'react';
import styleCSS from './game.module.css'
import {useSelector} from "react-redux";

const Point = (props) => {
    const snakeColorState = useSelector(state => state.snakeColor);
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    return (
        <div className={`${styleCSS.snake_point} ${snakeColorState}`} style={style}>
        </div>
    );
};

export default Point;