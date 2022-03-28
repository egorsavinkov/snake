import React, {useEffect, useState} from 'react';
import logo from '../images/logo.svg';
import {useDispatch, useSelector} from "react-redux";
import {changePageAction} from "../actions/gameActions";
import {authorizationPage, pageNavArr} from "../utils/Constants";

const Nav = () => {
    const dispatch = useDispatch()
    const [user, setUser] = useState('')
    const page = useSelector(state => state.page)
    const temp = pageNavArr.filter(item => item !== page)

    // useEffect(() => {
    //     let person = JSON.parse(localStorage.getItem('user'))
    //     if (person) {
    //         setUser(person)
    //     }
    // }, [])

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
            <button className={'button button_small button_nav'}
                    onClick={() => dispatch(changePageAction(authorizationPage))}>
                Sign in
            </button>
        </div>
    );
}


// else
// {
//     return (
//         <div className={'nav'}>
//             <div className={'menuAndLogo'}>
//                 <img className={'logo'} src={logo} alt={'logo'}/>
//                 <h3>naky Tourister</h3>
//                 <div className={'menu'}>
//                     <button className={'btn btn-outline-primary btn_nav'}
//                             onClick={() => dispatch(changePageAction(homePage))}>
//                         Home
//                     </button>
//                     <button className={'btn btn-outline-primary btn_nav'}
//                             onClick={() => dispatch(changePageAction(tutorialPage))}>
//                         Tutorial
//                     </button>
//                     <button className={'btn btn-outline-primary btn_nav'}
//                             onClick={() => dispatch(changePageAction(winnersPage))}>
//                         Winners
//                     </button>
//                 </div>
//             </div>
//             <button className={'btn btn-outline-primary btn_nav'}>
//                 {user.nickname}
//             </button>
//         </div>
//     );
// };

export default Nav;