import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

export async function getUser(uidPlayer) {
    try {
        const ref = await fb.firestore().collection('players').doc(uidPlayer);
        const doc = await ref.get();
        return {
            email: doc.data().email,
            password: doc.data().password,
            nickname: doc.data().nickname,
            uid: doc.data().uid,
            level: doc.data().level,
            snakeColor: doc.data().snakeColor,
            gamePoints: doc.data().gamePoints
        }
    } catch (error) {
        console.log(error)
    }
}