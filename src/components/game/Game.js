import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useInterval} from "../../utils/useInterval";
import styleCSS from './game.module.css'
import Snake from "./Snake";
import Point from "./Point";
import {
    changeGamePointsAction,
    changeLevelAction,
    changeLevelPointsAction,
    changePageAction
} from "../../actions/gameActions";
import showplace_1 from '../../images/showplace_1.jpg';
import {DOWN, gameOverPage, LEFT, nextLevelPage, RIGHT, UP} from "../../utils/Constants";

const Game = () => {
    const gamePoints = useSelector(state => state.gamePoints);
    const levelPoints = useSelector(state => state.levelPoints);
    const levelState = useSelector(state => state.level);
    const dispatch = useDispatch()

    const getRandomCoordinates = () => {
        let min = 1;
        let max = 98;
        let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
        let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2;
        return [x, y];
    }

    const [point, setPoint] = useState(getRandomCoordinates());
    const [speed, setSpeed] = useState(200);
    const [direction, setDirection] = useState(RIGHT);
    const [snakeDots, setSnakeDots] = useState([[0, 0], [2, 0], [4, 0]]);

    const onKeyDown = (e) => {
        e = e || window.event;
        let dir = direction;
        if ((e.keyCode === 38 && dir === DOWN) || (e.keyCode === 40 && dir === UP) ||
            (e.keyCode === 37 && dir === RIGHT) || (e.keyCode === 39 && dir === LEFT)) {
            return;
        }
        switch (e.keyCode) {
            case 38:
                setDirection(UP);
                break;
            case 40:
                setDirection(DOWN);
                break;
            case 37:
                setDirection(LEFT);
                break;
            case 39:
                setDirection(RIGHT);
                break;
        }
    }

    const moveSnake = () => {
        let dots = [...snakeDots];
        let head = dots[dots.length - 1];
        switch (direction) {
            case RIGHT:
                head = [head[0] + 2, head[1]];
                break;
            case LEFT:
                head = [head[0] - 2, head[1]];
                break;
            case DOWN:
                head = [head[0], head[1] + 2];
                break;
            case UP:
                head = [head[0], head[1] - 2];
                break;
        }
        dots.push(head);
        dots.shift();
        setSnakeDots(dots);
    }

    const checkIfOutBorders = () => {
        let head = snakeDots[snakeDots.length - 1];
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            dispatch(changePageAction(gameOverPage))
        }
    }

    const checkIfOutCollapsed = () => {
        let snake = [...snakeDots];
        let head = snake[snake.length - 1];
        snake.pop();
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1]) {
                dispatch(changePageAction(gameOverPage))
            }
        })
    }

    const checkIfEat = () => {
        let head = snakeDots[snakeDots.length - 1];
        let p = point;
        if (head[0] === p[0] && head[1] === p[1]) {
            setPoint(getRandomCoordinates());
            enlargeSnake();
            dispatch(changeLevelPointsAction(levelPoints + 1))
            dispatch(changeGamePointsAction(gamePoints + 1))
            increaseSpeed();
        }
    }

    const enlargeSnake = () => {
        let newSnake = [...snakeDots];
        newSnake.unshift([]);
        setSnakeDots(newSnake);
    }

    const increaseSpeed = () => {
        if (speed > 10) {
            setSpeed(speed - 10);
        }
    }

    const changeLevel = (level) => {
        switch (level) {
            case 0:
                setSpeed(200);
                break;
            case 1:
                setSpeed(150);
                break;
            default:
                setSpeed(200);
                break;
        }
    }

    useEffect(() => {
        document.onkeydown = onKeyDown;
        checkIfOutBorders();
        checkIfOutCollapsed();
        checkIfEat();
        changeLevel(levelState);
    })

    useInterval(() => moveSnake(), speed);

    return (
        <div>
            <div className={`${styleCSS.level}`}>
                <div>
                    <img className={'showplace'} src={showplace_1} alt={'showplace'}/>
                    {levelPoints < 3 && <h6>Up to the next level {3 - levelPoints} points</h6>}
                    {levelPoints >= 3 && <h6>You have {levelPoints} points per level</h6>}
                </div>
                {levelPoints >= 3 &&
                <button className={`button button_small ${styleCSS.button_next_level}`}
                        onClick={() => {
                            dispatch(changePageAction(nextLevelPage))
                            dispatch(changeLevelAction(levelState + 1))
                        }}>
                    Next level
                </button>
                }
            </div>
            <div className={`${styleCSS.game_area}`}>
                <Snake snakeDots={snakeDots}/>
                <Point dot={point}/>
            </div>
        </div>
    );
};

export default Game;