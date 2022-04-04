import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import {changePageAction, userAuthorizationAction} from "../actions/gameActions";
import {homePage} from "../utils/Constants";


const Authorization = () => {
    const dispatch = useDispatch();
    const userState = useSelector(state => state.user);
    const [state, setState] = useState({
        nickname: '',
        email: '',
        password: ''
    });

    async function authorization(email, password) {
        try {
            const response = await fb.auth().signInWithEmailAndPassword(email, password);
            console.log(response)
            const info = {
                uid: response.user.uid,
                email: response.user.email,
                nickName: response.user.displayName
            }
            dispatch(userAuthorizationAction(info))
            dispatch(changePageAction(homePage));
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fb.auth().onAuthStateChanged(function (user) {
            if (user) {
                const info = {
                    uid: user.uid,
                    email: user.email,
                    nickName: user.displayName
                }
                dispatch(userAuthorizationAction(info))
            }
        });
    }, [])

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                {userState.email &&
                <div>
                    <div>
                        <input type={'email'} className={'input_form'} id={'email'}
                               placeholder={'Email'} value={userState.email}
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
                {!userState.email &&
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