import React, {useEffect} from 'react';
import {fb} from "../../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import logo from '../../images/logo.jpg';
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
} from "../../actions/gameActions";
import {
    authorizationPage, cabinetPage, homePage, pageNavArr
} from "../../utils/Constants";
import {updateFirebaseWinners} from "../../services/updateFirebaseWinners";
import updateLocalStorage from "../../services/updateLocalStorage";
import {updateFirebasePlayer} from "../../services/updateFirebasePlayer";
import {getAllPlayers} from "../../services/getAllPlayers";

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

    async function sessionUpdate() {
        try {
            await fb.auth().onAuthStateChanged(function (player) {
                if (player && !uid) {
                    updateLocalStorage(player.uid, '', '', '', '', '', '', '')
                        .then(gamer => changeStoreUser(gamer.email, gamer.password, gamer.nickname,
                            gamer.uid, gamer.level, gamer.gamePoints, gamer.snakeColor));
                }
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        sessionUpdate();
    }, []);

    return (
        <div className={'nav'}>
            <div className={'logo'}>
                <img id={'logo'} src={logo} alt={'logo'}/>
            </div>
            <div className={'menu'}>
                {temp.map((item, index) => (
                    <li className={'button button_menu button_nav'}
                        key={index} onClick={() => {
                        updateLocalStorage('', uid, nickname, gamePoints, level, snakeColor, email, password);
                        dispatch(changePageAction(item));
                        dispatch(changeLevelPointsAction(0));
                    }}>{item}</li>
                ))}
            </div>
            <div className={'login_exit'}>
                {!nickname && <button className={'button button_big button_nav'}
                                      onClick={() => {
                                          dispatch(changeLevelPointsAction(0));
                                          dispatch(changePageAction(authorizationPage))
                                      }}>
                    Sign in
                </button>}
                {nickname && <div>
                    <button className={'button button_big button_nav'}
                            onClick={() => {
                                updateLocalStorage('', uid, nickname, gamePoints, level, snakeColor, email, password);
                                dispatch(changeLevelPointsAction(0));
                                dispatch(changePageAction(cabinetPage));
                            }}>
                        {nickname}
                    </button>
                    <li className={'button button_menu button_nav li_login_exit'}
                        onClick={() => {
                            updateLocalStorage('', uid, nickname, gamePoints, level, snakeColor, email, password);
                            updateFirebasePlayer(uid, nickname, gamePoints, level, snakeColor, email, password);
                            getAllPlayers().then(data => {
                                updateFirebaseWinners(uid, gamePoints, data.gamers)
                            });
                            logOut();
                        }}>
                        Save & exit
                    </li>
                </div>}
            </div>
        </div>
    );
}

export default Nav;