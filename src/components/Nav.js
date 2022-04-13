import React from 'react';
import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import firebase from "firebase/compat/app";
import logo from '../images/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {
    changeGamePointsAction, changeLevelAction, changeLevelPointsAction, changePageAction, changeSnakeColorAction,
    userAuthorizationActionEmail, userAuthorizationActionNickname, userAuthorizationActionPassword,
    userAuthorizationActionUid
} from "../actions/gameActions";
import {
    authorizationPage,
    cabinetPage,
    homePage,
    pageNavArr
} from "../utils/Constants";

const Nav = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const nickname = useSelector(state => state.nickname);
    const password = useSelector(state => state.password);
    const email = useSelector(state => state.email);
    const gamePoints = useSelector(state => state.gamePoints);
    const level = useSelector(state => state.level);
    const snakeColor = useSelector(state => state.snakeColor);
    const uid = useSelector(state => state.uid);
    const temp = pageNavArr.filter(item => item !== page);

    const updateLocalStorage = (uid) => {
        const userID = {
            uid, nickname, gamePoints, level, snakeColor, email, password
        }
        localStorage.setItem(uid, JSON.stringify(userID));
    }

    async function updateUserAccount(uid) {
        try {
            const ref = await fb.firestore().collection('players').doc(uid)
            const doc = await ref.get();
            if (doc.exists) {
                await ref.set({uid: uid, nickname, gamePoints, level, snakeColor, email, password})
            }
        } catch (error) {
            console.log(error)
        }
        try {
            const ref = await fb.firestore().collection('players').doc('winners')
            const doc = await ref.get();
            if (doc.exists) {
                await ref.update({
                    gamers: firebase.firestore.FieldValue.arrayUnion({
                        nickname,gamePoints
                    })
                })
            } else {
                await ref.set({gamers: [{nickname,gamePoints}]})
            }
        } catch (error) {
            console.log(error)
        }
    }

    function logOut() {
        dispatch(userAuthorizationActionNickname(''));
        dispatch(userAuthorizationActionEmail(''));
        dispatch(userAuthorizationActionPassword(''));
        dispatch(userAuthorizationActionUid(''));
        dispatch(changeLevelPointsAction(0));
        dispatch(changeGamePointsAction(0));
        dispatch(changeLevelAction('zero'));
        dispatch(changeSnakeColorAction('black'))
        dispatch(changePageAction(homePage));
        fb.auth().signOut();
    }

    return (
        <div className={'nav'}>
            <div className={'menuAndLogo'}>
                <img className={'logo'} src={logo} alt={'logo'}/>
                <h3>naky Tourister</h3>
                <div className={'menu'}>
                    {temp.map((item, index) => (
                        <button className={'button button_small button_nav'}
                                key={index} onClick={() => dispatch(changePageAction(item))}>{item}</button>
                    ))}
                </div>
            </div>
            {!nickname && <button className={'button button_small button_nav'}
                                  onClick={() => dispatch(changePageAction(authorizationPage))}>
                Sign in
            </button>}
            {nickname && <div>
                <button className={'button button_small button_nav'}
                        onClick={() => dispatch(changePageAction(cabinetPage))}>
                    {nickname}
                </button>
                <button className={'button button_small button_nav'}
                        onClick={() => {
                            updateLocalStorage(uid)
                            updateUserAccount(uid);
                            logOut()
                        }}>
                    Sign out
                </button>
            </div>}
        </div>
    );
}

export default Nav;