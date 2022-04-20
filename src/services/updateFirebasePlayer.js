import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function updateFirebasePlayer(uid, nickname, gamePoints, level, snakeColor, email, password) {
    try {
        let player = JSON.parse(localStorage.getItem('player'));
        if (player && uid) {
            try {
                const ref = await fb.firestore().collection('players').doc(uid);
                const doc = await ref.get();
                if (doc.exists) {
                    await ref.set({uid: uid, nickname, gamePoints, level, snakeColor, email, password});
                }
            } catch (error) {
                console.log(error);
            }
        }
    } catch (error) {
        console.log(error);
    }
}