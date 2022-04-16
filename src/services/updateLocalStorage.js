import {getAllPlayers} from "./getAllPlayers";

export async function updateLocalStorage(uid, nickname, gamePoints, level, snakeColor, email, password) {
    let winnersArr = JSON.parse(localStorage.getItem('winners'));
    if (winnersArr && uid) {
        for (let i = 0; i < winnersArr.length; i++) {
            if (winnersArr[i].uid === uid && winnersArr[i].gamePoints < gamePoints) {
                winnersArr[i].gamePoints = gamePoints;
            }
            localStorage.setItem('winners', JSON.stringify(winnersArr));
        }
    } else {
        getAllPlayers().then(data => localStorage.setItem('winners', JSON.stringify(data.gamers)))
    }
    let gamer = JSON.parse(localStorage.getItem('player'));
    if (gamer && ((gamer.gamePoints < gamePoints || gamer.snakeColor !== snakeColor))) {
        const userID = {
            uid, nickname, gamePoints, level, snakeColor, email, password
        }
        localStorage.setItem('player', JSON.stringify(userID));
    }
}

export default updateLocalStorage;