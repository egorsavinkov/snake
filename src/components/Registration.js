import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import {getAuth, updateProfile} from "firebase/auth";
import {
    changePageAction, userRegistrationActionEmail, userRegistrationActionNickname, userRegistrationActionUid
} from "../actions/gameActions";
import {homePage} from "../utils/Constants";

const Registration = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        nickname: '',
        email: '',
        password: ''
    });

    async function addUser(uid, email, password, nickname) {
        try {
            const ref = await fb.firestore().collection('players').doc(uid);
            await ref.set({
                uid, email, password,
                nickname: state.nickname,
                level: 'zero',
                gamePoints: 0
            })
        } catch (error) {
            console.log(error)
        }
    }

    async function registration(em, pass) {
        try {
            const response = await fb.auth().createUserWithEmailAndPassword(em, pass);
            console.log(response)
            const uid = response.user.uid;
            const email = response.user.email;
            const nickname = response.user.displayName;
            const userID = {
                email, uid,
                nickname: state.nickname,
                password: state.password,
                level: 'zero',
                gamePoints: 0
            }
            localStorage.setItem(uid, JSON.stringify(userID));
            await addUser(uid, email, state.password, nickname);
            dispatch(userRegistrationActionNickname(nickname));
            dispatch(userRegistrationActionEmail(email));
            dispatch(userRegistrationActionUid(uid));
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