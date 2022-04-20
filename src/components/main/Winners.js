import React, {useEffect, useState} from 'react';
import 'firebase/compat/firestore';
import {useSelector} from "react-redux";
import {updateFirebaseWinners} from "../../services/updateFirebaseWinners";
import {getAllPlayers} from "../../services/getAllPlayers";
import updateLocalStorage from "../../services/updateLocalStorage";
import {updateFirebasePlayer} from "../../services/updateFirebasePlayer";

const Winners = () => {
    const [state, setState] = useState({gamers: []});
    const email = useSelector(state => state.email);
    const nickname = useSelector(state => state.nickname);
    const password = useSelector(state => state.password);
    const uid = useSelector(state => state.uid);
    const gamePoints = useSelector(state => state.gamePoints);
    const level = useSelector(state => state.level);
    const snakeColor = useSelector(state => state.snakeColor);

    useEffect(() => {
        updateLocalStorage('', uid, nickname, gamePoints, level, snakeColor, email, password);
        updateFirebasePlayer(uid, nickname, gamePoints, level, snakeColor, email, password)
            .then(() => getAllPlayers()
                    .then(data => updateFirebaseWinners(uid, gamePoints, data.gamers)
                            .then(winnersArr => setState(state => ({...state, gamers: winnersArr})))
                        .catch(error => console.log(error))))
    }, [])

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <h1 id={'winners_h1'}>Winners!</h1>
                {!state.gamers[0] &&
                <h2>Loading...</h2>}
                {state.gamers[0] && <table>
                    <thead id={'scroll'} className={'table_thead'}>
                    {state.gamers.map((item, index) => {
                            if (uid === item.uid) {
                                return (
                                    <tr key={index}>
                                        <th className={'basis_color'}><h4
                                            className={'winners_h4_white'}>{item.nickname}</h4></th>
                                        <th><h4 className={'winners_h4'}>_______________________________</h4></th>
                                        <th className={'basis_color'}><h4
                                            className={'winners_h4_white'}>{item.gamePoints}</h4></th>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={index}>
                                        <th><h4 className={'winners_h4'}>{item.nickname}</h4></th>
                                        <th><h4 className={'winners_h4'}>_______________________________</h4></th>
                                        <th><h4 className={'winners_h4'}>{item.gamePoints}</h4></th>
                                    </tr>
                                )
                            }
                        }
                    )}
                    </thead>
                </table>}
            </div>
        </div>
    );
};

export default Winners;