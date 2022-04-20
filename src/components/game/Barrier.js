import React from 'react';
import styleCSS from './game.module.css';
import {useSelector} from "react-redux";

const Barrier = () => {
    const levelState = useSelector(state => state.level);
    const levelBarrier = useSelector(state => state.barrier[levelState]);

    return (
        <div>
            {levelBarrier.map((dot, index) => {
                const style = {
                    left: `${dot[0]}%`,
                    top: `${dot[1]}%`
                }
                return (
                    <div className={`${styleCSS.snake_barrier}`} key={index} style={style}>
                    </div>
                )
            })}
        </div>
    );
};

export default Barrier;