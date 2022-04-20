import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function updateFirebaseWinners(uid, gamePoints, arrWinners) {
    try {
        let player = JSON.parse(localStorage.getItem('player'));
        if (player && uid) {
            for (let i = 0; i < arrWinners.length; i++) {
                if (arrWinners[i].uid === player.uid &&
                    arrWinners[i].gamePoints < player.gamePoints) {
                    arrWinners[i].gamePoints = player.gamePoints;
                }
            }
        }
        arrWinners.sort(function cumPair(one, two) {
            if (one.gamePoints > two.gamePoints) {
                return -1;
            }
            if (one.gamePoints < two.gamePoints) {
                return 1;
            }
            return 0;
        })
        if (player && uid) {
            try {
                const ref = await fb.firestore().collection('players').doc('winners');
                const doc = await ref.get();
                if (doc.exists) {
                    await ref.set({gamers: [...arrWinners]});
                }
            } catch (error) {
                console.log(error);
            }
        }
        return arrWinners;
    } catch (error) {
        console.log(error);
    }
}