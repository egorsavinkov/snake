import React from 'react';
import logo from '../images/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {authorizationPage, pageNavArr} from "../utils/Constants";

const Nav = () => {
    const dispatch = useDispatch();
    const page = useSelector(state => state.page);
    const nickname = useSelector(state => state.nickname)
    const temp = pageNavArr.filter(item => item !== page);

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
            {nickname && <button className={'button button_small button_nav'}
                                 onClick={() => dispatch(changePageAction(authorizationPage))}>
                {nickname}
            </button>}
        </div>
    );
}

export default Nav;