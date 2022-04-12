import React, {useState} from 'react';
import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth, updateProfile} from "firebase/auth";
import {
    changePageAction,
    changeSnakeColorAction,
    userAuthorizationActionEmail, userAuthorizationActionGamePoints, userAuthorizationActionLevel,
    userAuthorizationActionNickname,
    userAuthorizationActionPassword, userAuthorizationActionUid
} from "../actions/gameActions";
import {homePage} from "../utils/Constants";
import {useDispatch} from "react-redux";

const Registration = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        nickname: '',
        email: '',
        password: ''
    });

    async function addUser(uid, email, password) {
        try {
            const ref = await fb.firestore().collection('players').doc(uid);
            await ref.set({
                uid, email, password,
                nickname: state.nickname,
                level: 'zero',
                gamePoints: 0,
                snakeColor: 'black'
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function registration(em, pass) {
        try {
            const response = await fb.auth().createUserWithEmailAndPassword(em, pass);
            const uid = response.user.uid;
            const email = response.user.email;
            const userID = {
                email, uid,
                nickname: state.nickname,
                password: state.password,
                level: 'zero',
                gamePoints: 0,
                snakeColor: 'black'
            }
            localStorage.setItem(uid, JSON.stringify(userID));
            await addUser(uid, email, state.password);
            await fb.auth().signInWithEmailAndPassword(em, pass);
            dispatch(userAuthorizationActionEmail(email));
            dispatch(userAuthorizationActionPassword(state.password))
            dispatch(userAuthorizationActionNickname(state.nickname));
            dispatch(userAuthorizationActionUid(uid));
            dispatch(userAuthorizationActionGamePoints(0));
            dispatch(userAuthorizationActionLevel('zero'));
            dispatch(changeSnakeColorAction('black'))
            dispatch(changePageAction(homePage));
        } catch (error) {
            console.log(error);
        }

        const auth = getAuth();
        updateProfile(auth.currentUser, {
            displayName: state.nickname
        }).catch((error) => {
            console.log(error);
        });
    }

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <div>
                    <input type={'text'} className={'input_form'} id={'nickname'}
                           placeholder={'Nickname'} value={state.nickname}
                           onChange={event => setState(state =>
                               ({...state, nickname: event.target.value}))}/>
                </div>
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
                        onClick={() => registration(state.email, state.password)}>
                    Registration
                </button>
            </div>
        </div>
    );
};

export default Registration;