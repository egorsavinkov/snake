import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/firestore';

export async function getAllPlayers() {
    try {
        const doc = await fb.firestore().collection('players').doc('winners').get();
        if (doc.exists) {
            return doc.data()
        } else {
            return {gamers: []}
        }
    } catch (error) {
        console.log(error)
    }
}