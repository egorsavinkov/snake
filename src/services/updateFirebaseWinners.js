import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function updateFirebaseWinners(uid, gamePoints, arrWinners) {
    try {
        let player = JSON.parse(localStorage.getItem('player'));
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
        if (player && uid) {
            const ref = await fb.firestore().collection('players').doc('winners');
            await ref.set({gamers: [...tempArr]});
        }
        return tempArr;
    } catch (error) {
        console.log(error)
    }
}