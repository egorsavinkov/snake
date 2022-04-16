import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function updateFirebase(uid, nickname, gamePoints, level, snakeColor, email, password) {
    let winnersArr = JSON.parse(localStorage.getItem('winners'));
    try {
        const ref = await fb.firestore().collection('players').doc('winners');
        const doc = await ref.get();
        if (doc.exists && winnersArr) {
            const tempArr = doc.data().gamers;
            for (let i = 0; i < tempArr.length; i++) {
                if (tempArr[i].uid === uid && tempArr[i].uid === winnersArr[i].uid
                    && tempArr[i].gamePoints < winnersArr[i].gamePoints) {
                    tempArr[i].gamePoints = winnersArr[i].gamePoints;
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
            await ref.set({gamers: [...tempArr]});
            if (uid) {
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
            return tempArr;
        }
    } catch (error) {
        console.log(error)
    }
}