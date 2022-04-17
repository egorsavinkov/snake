import {getAllPlayers} from "./getAllPlayers";
import {fb} from "../config/FareBaseConfig";
import {getUser} from "./getUser";

export async function updateLocalStorage(uidFB, uid, nickname, gamePoints, level, snakeColor, email, password) {
    // let winnersArr = JSON.parse(localStorage.getItem('winners'));
    // if (winnersArr && uid) {
    //     for (let i = 0; i < winnersArr.length; i++) {
    //         if (winnersArr[i].uid === uid && winnersArr[i].gamePoints < gamePoints) {
    //             winnersArr[i].gamePoints = gamePoints;
    //         }
    //         localStorage.setItem('winners', JSON.stringify(winnersArr));
    //     }
    // } else {
    //     getAllPlayers().then(data => localStorage.setItem('winners', JSON.stringify(data.gamers)))
    // }
    // let gamer = JSON.parse(localStorage.getItem('player'));
    // if (gamer && ((gamer.gamePoints < gamePoints || gamer.snakeColor !== snakeColor))) {
    //     const userID = {
    //         uid, nickname, gamePoints, level, snakeColor, email, password
    //     }
    //     localStorage.setItem('player', JSON.stringify(userID));
    // }
    // let winnersArr = JSON.parse(localStorage.getItem('winners'));






    let player = JSON.parse(localStorage.getItem('player'));
    if (!player && uidFB) {
        let gamerID = {}
        await getUser(uidFB).then(gamer => {
            gamerID = gamer
            localStorage.setItem('player', JSON.stringify(gamerID))
        });
        return gamerID;
    }
    if (player && uidFB) {
            return player
    }
    if (uid && player && (player.gamePoints < gamePoints || player.snakeColor !== snakeColor)) {
        const userID = {
            uid, nickname, gamePoints, level, snakeColor, email, password
        }
        localStorage.setItem('player', JSON.stringify(userID));
    }
    if (uid && !player) {
        await getUser(uid).then(gamer => {
            if (gamer.gamePoints < gamePoints || gamer.snakeColor !== snakeColor) {
                const userID = {
                    uid, nickname, gamePoints, level, snakeColor, email, password
                }
                localStorage.setItem('player', JSON.stringify(userID));
            }
        });
    }


}

export default updateLocalStorage;

// есть юайди, нет юйди, есть куки, нет кук, авто, не авто