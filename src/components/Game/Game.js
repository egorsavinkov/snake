import React, {useEffect, useState} from 'react';
import showplace_1 from '../../images/showplace_1.jpg';
import styleCSS from './game.module.css'
import Snake from "./Snake";
import Point from "./Point";
import {DOWN, LEFT, RIGHT, UP} from "../../utils/Constants";
import {useInterval} from "./useInterval";

// const getRandomCoordinates = () => {
//     let min = 1;
//     let max = 98;
//     let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
//     let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
//     return [x, y]
// }
//
// const initialState = {
//     point: getRandomCoordinates(),
//     speed: 100,
//     direction: 'RIGHT',
//     snakeDots: [
//         [0, 0],
//         [2, 0],
//         [4, 0]
//     ]
// }
//
// class Game extends Component {
//     state = initialState
//
//     componentDidMount() {
//         document.onkeydown = this.onKeyDown
//         setInterval(this.moveSnake, this.state.speed)
//     }
//
//
//     componentDidUpdate(prevProps, prevState, snapshot) {
//         this.checkIfOutBorders()
//         this.checkIfOutCollapsed()
//         this.checkIfEat()
//     }
//
//     onKeyDown = (e) => {
//         e = e || window.event;
//         let direction = this.state.direction;
//         if ((e.keyCode === 38 && direction === 'DOWN') || (e.keyCode === 40 && direction === 'UP') ||
//             (e.keyCode === 37 && direction === 'RIGHT') || (e.keyCode === 39 && direction === 'LEFT')) {
//             return
//         }
//         switch (e.keyCode) {
//             case 38:
//                 this.setState({direction: 'UP'});
//                 break;
//             case 40:
//                 this.setState({direction: 'DOWN'});
//                 break;
//             case 37:
//                 this.setState({direction: 'LEFT'});
//                 break;
//             case 39:
//                 this.setState({direction: 'RIGHT'});
//                 break;
//         }
//     }
//
//     moveSnake = () => {
//         let dots = [...this.state.snakeDots]
//         let head = dots[dots.length - 1]
//         switch (this.state.direction) {
//             case 'RIGHT':
//                 head = [head[0] + 2, head[1]]
//                 break
//             case 'LEFT':
//                 head = [head[0] - 2, head[1]]
//                 break
//             case 'DOWN':
//                 head = [head[0], head[1] + 2]
//                 break
//             case 'UP':
//                 head = [head[0], head[1] - 2]
//                 break
//         }
//         dots.push(head)
//         dots.shift()
//         this.setState({
//             snakeDots: dots
//         })
//     }
//
//     checkIfOutBorders() {
//         let head = this.state.snakeDots[this.state.snakeDots.length - 1]
//         if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
//             this.onGameOver()
//         }
//     }
//
//     checkIfOutCollapsed() {
//         let snake = [...this.state.snakeDots]
//         let head = snake[snake.length - 1]
//         snake.pop()
//         snake.forEach(dot => {
//             if (head[0] === dot[0] && head[1] === dot[1])
//                 this.onGameOver()
//         })
//     }
//
//     checkIfEat() {
//         let head = this.state.snakeDots[this.state.snakeDots.length - 1]
//         let point = this.state.point
//         if (head[0] === point[0] && head[1] === point[1]) {
//             this.setState({
//                 point: getRandomCoordinates()
//             })
//             this.enlargeSnake()
//             // this.increaseSpeed()
//         }
//     }
//
//     enlargeSnake() {
//         let newSnake = [...this.state.snakeDots]
//         newSnake.unshift([])
//         this.setState({
//             snakeDots: newSnake
//         })
//     }
//
//     increaseSpeed() {
//         if (this.state.speed > 10) {
//             this.setState({
//                 speed: this.state.speed - 10
//             })
//         }
//     }
//
//     onGameOver() {
//         alert(`Game Over. Snake length is ${this.state.snakeDots.length}`)
//         this.setState(initialState)
//     }
//
//     render() {
//         return (
//             <div>
//                 {/*<div className={`${styleCSS.level}`}>*/}
//                 {/*    <img className={'showplace'} src={showplace_1} alt={'showplace'}/>*/}
//                 {/*    <h6>Up to the next level 150 points</h6>*/}
//                 {/*</div>*/}
//                 <div className={`${styleCSS.game_area}`}>
//                     <Snake snakeDots={this.state.snakeDots}/>
//                     <Point dot={this.state.point}/>
//                 </div>
//             </div>
//         );
//     }
// }
//
// export default Game;

const Game = () => {

    const getRandomCoordinates = () => {
        let min = 1;
        let max = 98;
        let x = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
        let y = Math.floor((Math.random() * (max - min + 1) + min) / 2) * 2
        return [x, y]
    }

    const [point, setPoint] = useState(getRandomCoordinates());
    const [speed, setSpeed] = useState(100);
    const [direction, setDirection] = useState(RIGHT)
    const [snakeDots, setSnakeDots] = useState([[0, 0], [2, 0], [4, 0]])

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
        let dots = [...snakeDots]
        let head = dots[dots.length - 1]
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
        setSnakeDots(dots)
    }

    const checkIfOutBorders = () => {
        let head = snakeDots[snakeDots.length - 1]
        if (head[0] >= 100 || head[1] >= 100 || head[0] < 0 || head[1] < 0) {
            onGameOver()
        }
    }

    const checkIfOutCollapsed = () => {
        let snake = [...snakeDots]
        let head = snake[snake.length - 1]
        snake.pop()
        snake.forEach(dot => {
            if (head[0] === dot[0] && head[1] === dot[1])
                onGameOver()
        })
    }

    const checkIfEat = () => {
        let head = snakeDots[snakeDots.length - 1]
        let p = point
        if (head[0] === p[0] && head[1] === p[1]) {
            setPoint(getRandomCoordinates())
            enlargeSnake()
            // increaseSpeed()
        }
    }

    // const increaseSpeed = () => {
    //     if (speed > 10) {
    //         setSpeed(speed - 10)
    //     }
    // }

    const enlargeSnake = () => {
        let newSnake = [...snakeDots]
        newSnake.unshift([])
        setSnakeDots(newSnake)
    }

    const onGameOver = () => {
        alert(`Game Over. Snake length is ${snakeDots.length}`);
        setPoint(getRandomCoordinates());
        setSpeed(100);
        setDirection(RIGHT);
        setSnakeDots([[0, 0], [2, 0], [4, 0]]);
    }

    useEffect(() => {
        document.onkeydown = onKeyDown;
        // setInterval(moveSnake, speed)
        checkIfOutBorders();
        checkIfOutCollapsed();
        checkIfEat();
    })

    useInterval(() => moveSnake(), speed)

    return (
        <div>
            {/*<div className={`${styleCSS.level}`}>*/}
            {/*    <img className={'showplace'} src={showplace_1} alt={'showplace'}/>*/}
            {/*    <h6>Up to the next level 150 points</h6>*/}
            {/*</div>*/}
            <div className={`${styleCSS.game_area}`}>
                <Snake snakeDots={snakeDots}/>
                <Point dot={point}/>
            </div>
        </div>
    );
};

export default Game;