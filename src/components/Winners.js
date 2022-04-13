import React, {useEffect, useState} from 'react';
import 'firebase/compat/firestore';
import {fb} from "../config/FareBaseConfig";
import {useSelector} from "react-redux";

const Winners = () => {
    const [state, setState] = useState({gamers: []});
    const nickname = useSelector(state => state.nickname);

    async function getAllPlayers() {
        const doc = await fb.firestore().collection('players').doc('winners').get();
        if (doc.exists) {
            return doc.data()
        } else {
            return {gamers: []}
        }
    }

    useEffect(() => {
        getAllPlayers().then(data => setState(state => ({...state, gamers: data.gamers})))
    }, [])

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <h1>Winners!</h1>
                {!state.gamers[0] &&
                <h2>Loading...</h2>}
                {state.gamers[0] && <table>
                    <thead>
                    {state.gamers.map((item, index) => {
                        if (nickname === item.nickname) {
                            return (
                            <tr key={index}>
                                <th>
                                    <h4 className={'yellow'}>{`${item.nickname} ___________________________________________________________ 
                                ${item.gamePoints}`}</h4>
                                </th>
                            </tr>
                            )
                        } else {
                            return (
                                <tr key={index}>
                                <th>
                                    <h4>{`${item.nickname} ___________________________________________________________ 
                                ${item.gamePoints}`}</h4>
                                </th>
                            </tr>
                            )
                        }
                    }
                        ).sort()}
                    </thead>
                </table>}
            </div>
        </div>
    );
};

export default Winners;