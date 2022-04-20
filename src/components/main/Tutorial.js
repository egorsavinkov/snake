import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fb} from "../../config/FareBaseConfig";
import 'firebase/compat/firestore';
import {changePageAction, changeTutorialAction} from "../../actions/gameActions";
import {playPage} from "../../utils/Constants";

const Tutorial = () => {
    const dispatch = useDispatch();
    const tutorial = useSelector(state => state.tutorial);

    async function getDescription() {
        try {
            const doc = await fb.firestore().collection('content').doc('tutorial').get();
            if (doc.exists) {
                return doc.data();
            } else {
                return {description: []};
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        let tutorialLocalStorage = JSON.parse(localStorage.getItem('tutorial'));
        if (tutorialLocalStorage) {
            dispatch(changeTutorialAction(tutorialLocalStorage));
        } else {
            getDescription().then(data => {
                localStorage.setItem('tutorial', JSON.stringify(data))
                dispatch(changeTutorialAction(data))
            })
        }
    }, [])

    return (
        <div className={'box_one'}>
            <div className={'box_two'}>
                <h1 id={'tutorial_h1'}>Tutorial</h1>
                <div id={'tutorial'}>
                    {!tutorial.description[0] && <h2>...Loading</h2>}
                    {tutorial.description.map((item, index) => <h5 id={'tutorial_h5'} key={index}>{item}</h5>)}
                </div>
                <button className={'button button_big button_tutorial_autorization_play'}
                        onClick={() => dispatch(changePageAction(playPage))}>
                    Play
                </button>
            </div>
        </div>
    );
};

export default Tutorial;