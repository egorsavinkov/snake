import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {homePage} from "../utils/Constants";

const Authorization = () => {
    const dispatch = useDispatch()
    const [nickname, setNickName] = useState('')
    const [password, setPassword] = useState('')

    const setLoginAndPassword = (nickname, password) => {
        let user = {
            nickname, password
        }
        localStorage.setItem('user', JSON.stringify(user))
        dispatch(changePageAction(homePage))
    }

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <form>
                    <div>
                        <input type={'text'} className={'input_form'} id={'nickname'} placeholder={'Nickname'}
                               onChange={event => setNickName(event.target.value)}/>
                    </div>
                    <div>
                        <input type={'email'} className={'input_form'} id={'email'} placeholder={'Email'}
                               onChange={event => setNickName(event.target.value)}/>
                    </div>
                    <div>
                        <input type={'password'} className={'input_form'} id={'password'} placeholder={'Password'}
                               onChange={event => setPassword(event.target.value)}/>
                    </div>
                    <button type={'submit'} className={'button button_big button_tutorial_autorization_play'}
                            onClick={event => {
                                event.preventDefault()
                                setLoginAndPassword(nickname, password)
                            }}>
                        Sign in
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Authorization;