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
                    <div className={'form-floating mb-3'}>
                        <input type={'text'} className={'form-control'}
                               id={'floatingInput'} placeholder={'@nickname'}
                               onChange={event => setNickName(event.target.value)}/>
                        <label htmlFor={'floatingInput'}>Nickname</label>
                    </div>
                    <div className={'form-floating'}>
                        <input type={'password'} className={'form-control'}
                               id={'floatingPassword'} placeholder={'Password'}
                               onChange={event => setPassword(event.target.value)}/>
                        <label htmlFor={'floatingPassword'}>Password</label>
                    </div>
                    <button type={'submit'} className={'btn btn-outline-primary btn_big'}
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