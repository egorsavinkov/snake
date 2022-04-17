import React, {useEffect, useState} from 'react';
import 'firebase/compat/firestore';
import {useSelector} from "react-redux";
import {updateFirebase} from "../services/updateFirebase";
import {getAllPlayers} from "../services/getAllPlayers";
import updateLocalStorage from "../services/updateLocalStorage";

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
        updateLocalStorage('', uid, nickname, gamePoints, level, snakeColor, email, password)
        getAllPlayers().then(data => {
            updateFirebase(uid, nickname, gamePoints, level, snakeColor, email, password, data.gamers)
                .then(winnersArr => {
                    setState(state => ({...state, gamers: winnersArr}));
                })
        }).catch(error => console.log(error));
    }, [])

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <h1>Winners!</h1>
                {!state.gamers[0] &&
                <h2>Loading...</h2>}
                {state.gamers[0] && <table>
                    <thead>
                    {state.gamers.sort().map((item, index) => {
                            if (uid === item.uid) {
                                return (
                                    <tr key={index}>
                                        <th className={'yellow'}><h4>{item.nickname}</h4></th>
                                        <th><h4>___________________________________________________________</h4></th>
                                        <th className={'yellow'}><h4>{item.gamePoints}</h4></th>
                                    </tr>
                                )
                            } else {
                                return (
                                    <tr key={index}>
                                        <th><h4>{item.nickname}</h4></th>
                                        <th><h4>___________________________________________________________</h4></th>
                                        <th><h4>{item.gamePoints}</h4></th>
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