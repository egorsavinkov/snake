import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {fb} from "../config/FareBaseConfig";
import 'firebase/compat/auth';
import {getAuth, updateProfile} from "firebase/auth";
import {changePageAction, userRegistrationAction} from "../actions/gameActions";
import {homePage} from "../utils/Constants";

const Registration = () => {
    const dispatch = useDispatch();
    const [state, setState] = useState({
        nickname: '',
        email: '',
        password: ''
    });

    async function registration(email, password) {
        try {
            const response = await fb.auth().createUserWithEmailAndPassword(email, password);
            console.log(response)
            const info = {
                uid: response.user.uid,
                email: response.user.email,
                nickName: response.user.displayName
            }
            dispatch(userRegistrationAction(info));
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