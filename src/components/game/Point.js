import React from 'react';
import styleCSS from './game.module.css'

const Point = (props) => {
    const style = {
        left: `${props.dot[0]}%`,
        top: `${props.dot[1]}%`
    }

    return (
        <div className={`${styleCSS.snake_point}`} style={style}>
        </div>
    );
};

export default Point;