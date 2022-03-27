import React, {useEffect, useState} from 'react';
import logo from '../images/logo.svg';
import {useDispatch} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {authorizationPage, homePage, tutorialPage, winnersPage} from "../utils/Constants";

const Nav = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState('')

    useEffect(() => {
        let person = JSON.parse(localStorage.getItem('user'))
        if (person) {
            setUser(person)
        }
    }, [])

    if (user) {
        return (
            <div className={'nav'}>
                <div className={'menuAndLogo'}>
                    <img className={'logo'} src={logo} alt={'logo'}/>
                    <h3>naky Tourister</h3>
                    <div className={'menu'}>
                        <button className={'btn btn-outline-primary btn_nav'}
                                onClick={() => dispatch(changePageAction(homePage))}>
                            Home
                        </button>
                        <button className={'btn btn-outline-primary btn_nav'}
                                onClick={() => dispatch(changePageAction(tutorialPage))}>
                            Tutorial
                        </button>
                        <button className={'btn btn-outline-primary btn_nav'}
                                onClick={() => dispatch(changePageAction(winnersPage))}>
                            Winners
                        </button>
                    </div>
                </div>
                <button className={'btn btn-outline-primary btn_nav'}>
                    {user.nickname}
                </button>
            </div>
        );
    } else {
        return (
            <div className={'nav'}>
                <div className={'menuAndLogo'}>
                    <img className={'logo'} src={logo} alt={'logo'}/>
                    <h3>naky Tourister</h3>
                    <div className={'menu'}>
                        <button className={'btn btn-outline-primary btn_nav'}
                                onClick={() => dispatch(changePageAction(homePage))}>
                            Home
                        </button>
                        <button className={'btn btn-outline-primary btn_nav'}
                                onClick={() => dispatch(changePageAction(tutorialPage))}>
                            Tutorial
                        </button>
                        <button className={'btn btn-outline-primary btn_nav'}
                                onClick={() => dispatch(changePageAction(winnersPage))}>
                            Winners
                        </button>
                    </div>
                </div>
                <button className={'btn btn-outline-primary btn_nav'}
                        onClick={() => dispatch(changePageAction(authorizationPage))}>
                    Sign in
                </button>
            </div>
        );
    }

};

export default Nav;