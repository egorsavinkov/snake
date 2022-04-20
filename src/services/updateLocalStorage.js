import {getUser} from "./getUser";

export async function updateLocalStorage(uidFB, uid, nickname, gamePoints, level, snakeColor, email, password) {
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
        if (player.uid === uidFB) {
            return player
        } else {
            let gamerID = {}
            await getUser(uidFB).then(gamer => {
                gamerID = gamer
                localStorage.setItem('player', JSON.stringify(gamerID))
            });
            return gamerID;
        }
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