import React, {useEffect, useState} from 'react';
import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {useDispatch} from "react-redux";
import {
    changePageAction, changeSnakeColorAction,
    userAuthorizationActionEmail, userAuthorizationActionGamePoints, userAuthorizationActionLevel,
    userAuthorizationActionNickname,
    userAuthorizationActionPassword, userAuthorizationActionUid
} from "../actions/gameActions";
import {homePage} from "../utils/Constants";
import {getUser} from "../services/getUser";
import updateLocalStorage from "../services/updateLocalStorage";

const Authorization = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        nickname: '',
        email: '',
        password: '',
        uid: ''
    });

    async function authorization(em, pass) {
        try {
            const response = await fb.auth().signInWithEmailAndPassword(em, pass);
            const uidPlayer = response.user.uid;
            updateLocalStorage(uidPlayer, '', '', '', '', '', '', '')
                .then(gamer => changeStoreUser(gamer.email, gamer.password, gamer.nickname,
                    gamer.uid, gamer.level, gamer.gamePoints, gamer.snakeColor));
            // let player = JSON.parse(localStorage.getItem('player'));
            // if (!player) {
            //     const user = await getUser(uidPlayer);
            //     localStorage.setItem('player', JSON.stringify(user));
            //     changeStoreUser(user.email, user.password, user.nickname,
            //         user.uid, user.level, user.gamePoints, user.snakeColor);
            // } else {
            //     changeStoreUser(player.email, player.password, player.nickname,
            //         player.uid, player.level, player.gamePoints, player.snakeColor);
            // }
        } catch (error) {
            console.log(error);
        }
    }

    const changeStoreUser = (email, password, nickname, uid, level, gamePoints, snakeColor) => {
        dispatch(userAuthorizationActionEmail(email));
        dispatch(userAuthorizationActionPassword(password))
        dispatch(userAuthorizationActionNickname(nickname));
        dispatch(userAuthorizationActionUid(uid));
        dispatch(userAuthorizationActionGamePoints(gamePoints));
        dispatch(userAuthorizationActionLevel(level));
        dispatch(changeSnakeColorAction(snakeColor));
        dispatch(changePageAction(homePage));
    }

    useEffect(() => {
        let pl = JSON.parse(localStorage.getItem('player'));
        if (pl) {
            setState(state => ({...state, password: pl.password, email: pl.email}));
        }
    }, []);

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