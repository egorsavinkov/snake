import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function updateFirebase(uid, nickname, gamePoints, level, snakeColor, email, password, arrWinners) {
    try {
        let player = JSON.parse(localStorage.getItem('player'));
        const ref = await fb.firestore().collection('players').doc('winners');
        if (player && uid) {
            await ref.set({gamers: [...tempArr]});
            try {
                const ref = await fb.firestore().collection('players').doc(uid)
                const doc = await ref.get();
                if (doc.exists) {
                    await ref.set({uid: uid, nickname, gamePoints, level, snakeColor, email, password})
                }
            } catch (error) {
                console.log(error)
            }
        }
        const tempArr = arrWinners;
        if (player && uid) {
            for (let i = 0; i < tempArr.length; i++) {
                if (tempArr[i].uid === player.uid &&
                    tempArr[i].gamePoints < player.gamePoints) {
                    tempArr[i].gamePoints = player.gamePoints;
                }
            }
        }
        for (let i = 0; i < tempArr.length; i++) {
            for (let j = 1; j < tempArr.length; j++) {
                if (tempArr[i].gamePoints < tempArr[j].gamePoints) {
                    const temp = tempArr[i];
                    tempArr[i] = tempArr[j];
                    tempArr[j] = temp;
                }
            }
        }
        return tempArr;
    } catch (error) {
        console.log(error)
    }
}