import React, {useEffect} from 'react';
import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from '../images/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {
    changeGamePointsAction,
    changeLevelAction,
    changeLevelPointsAction,
    changePageAction,
    changeSnakeColorAction,
    userAuthorizationActionEmail,
    userAuthorizationActionGamePoints, userAuthorizationActionLevel,
    userAuthorizationActionNickname,
    userAuthorizationActionPassword,
    userAuthorizationActionUid
} from "../actions/gameActions";
import {
    authorizationPage,
    cabinetPage,
    homePage,
    pageNavArr
} from "../utils/Constants";
import {updateFirebase} from "../services/updateFirebase";
import updateLocalStorage from "../services/updateLocalStorage";

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

    const lSUpdate = async function (uid) {
        try {
            const ref = await fb.firestore().collection('players').doc(uid).get();
            const user = {
                email: ref.data().email,
                password: ref.data().password,
                nickname: ref.data().nickname,
                uid: ref.data().uid,
                level: ref.data().level,
                snakeColor: ref.data().snakeColor,
                gamePoints: ref.data().gamePoints
            }
            localStorage.setItem('player', JSON.stringify(user));
            changeStoreUser(user.email, user.password, user.nickname,
                user.uid, user.level, user.gamePoints, user.snakeColor);
        } catch (error) {
            console.log(error)
        }
    }

    const sessionUpdate = async function () {
        try {
            await fb.auth().onAuthStateChanged(function (player) {
                if (player && !uid) {
                    let gamer = JSON.parse(localStorage.getItem('player'));
                    if (gamer) {
                        changeStoreUser(gamer.email, gamer.password, gamer.nickname,
                            gamer.uid, gamer.level, gamer.gamePoints, gamer.snakeColor);
                    } else {
                        lSUpdate(player.uid)
                    }
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        sessionUpdate();
    });

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
                            updateLocalStorage(uid, nickname, gamePoints, level, snakeColor, email, password);
                            updateFirebase(uid, nickname, gamePoints, level, snakeColor, email, password);
                            logOut();
                        }}>
                    Sign out
                </button>
            </div>}
        </div>
    );
}

export default Nav;