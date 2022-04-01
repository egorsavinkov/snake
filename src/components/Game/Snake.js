import React from 'react';
import styleCSS from './game.module.css'

const Snake = (props) => {
    return (
        <div>
            {props.snakeDots.map((dot, index) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`

                }
                return (
                    <div className={`${styleCSS.snake_dot}`} key={index} style={style}>
                    </div>
                )
            })}
        </div>
    );
};

export default Snake;