import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import {
    changePageAction, userAuthorizationActionEmail, userAuthorizationActionGamePoints,
    userAuthorizationActionLevel, userAuthorizationActionNickname, userAuthorizationActionUid
} from "../actions/gameActions";
import {homePage} from "../utils/Constants";


const Authorization = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        nickname: '',
        email: '',
        password: '',
        uid: ''
    });

    async function getUser(uidPlayer) {
        try {
            const ref = await fb.firestore().collection('players').doc(uidPlayer);
            const doc = await ref.get();
            return {
                email: doc.data().email,
                password: doc.data().password,
                nickname: doc.data().nickname,
                uid: doc.data().uid,
                level: doc.data().level,
                gamePoints: doc.data().gamePoints
            }
        } catch (error) {
            console.log(error)
        }
    }

    const changeStore = (email, nickname, uid, level, gamePoints) => {
        dispatch(userAuthorizationActionEmail(email));
        dispatch(userAuthorizationActionNickname(nickname));
        dispatch(userAuthorizationActionUid(uid));
        dispatch(userAuthorizationActionGamePoints(gamePoints));
        dispatch(userAuthorizationActionLevel(level))
        dispatch(changePageAction(homePage));
    }

    async function authorization(em, pass) {
        try {
            const response = await fb.auth().signInWithEmailAndPassword(em, pass);
            console.log(response)
            const uidPlayer = response.user.uid;
            let userID = JSON.parse(localStorage.getItem(uidPlayer));
            if (!userID) {
                const user = await getUser(uidPlayer);
                localStorage.setItem(uidPlayer, JSON.stringify(user));
                changeStore(user.email, user.nickname, user.uid, user.level, user.gamePoints);
            } else {
                changeStore(userID.email, userID.nickname, userID.uid, userID.level, userID.gamePoints);
            }
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fb.auth().onAuthStateChanged(function (u) {
            if (u) {
                let gamer = JSON.parse(localStorage.getItem(u.uid))
                setState(state => ({
                    ...state,
                    password: gamer.password,
                    email: gamer.email,
                    gamePoints: gamer.gamePoints,
                    level: gamer.level,
                    nickname: gamer.nickname,
                    uid: gamer.uid
                }))
            }
        });
    }, [])

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                {state.email &&
                <div>
                    <div>
                        <input type={'email'} className={'input_form'} id={'email'}
                               placeholder={'Email'} value={state.email}
                               onChange={event => setState(state =>
                                   ({...state, email: event.target.value}))}
                        />
                    </div>
                    <div>
                        <input type={'password'} className={'input_form'} id={'password'}
                               placeholder={'Password'} value={state.password}
                               onChange={event => setState(state =>
                                   ({...state, password: event.target.value}))}/>
                    </div>
                    <button type={'submit'}
                            className={'button button_big button_tutorial_autorization_play'}
                            onClick={() => authorization(state.email, state.password)}>
                        Sign in
                    </button>
                </div>}
                {!state.email &&
                <div>
                    <div>
                        <input type={'email'} className={'input_form'} id={'email'}
                               placeholder={'Email'} value={state.email}
                               onChange={event => setState(state =>
                                   ({...state, email: event.target.value}))}/>
                    </div>
                    <div>
                        <input type={'password'} className={'input_form'} id={'password'}
                               placeholder={'Password'} value={state.password}
                               onChange={event => setState(state =>
                                   ({...state, password: event.target.value}))}/>
                    </div>
                    <button type={'submit'}
                            className={'button button_big button_tutorial_autorization_play'}
                            onClick={() => authorization(state.email, state.password)}>
                        Sign in
                    </button>
                </div>}
            </div>
        </div>
    );
};

export default Authorization;