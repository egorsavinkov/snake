import firebase from "firebase/compat/app";

const firebaseConfig = {
    apiKey: "AIzaSyAXKCSfAstXf9pDblFEdoDL1vxu4RFisl4",
    authDomain: "snaky-tourister.firebaseapp.com",
    projectId: "snaky-tourister",
    storageBucket: "snaky-tourister.appspot.com",
    messagingSenderId: "832718026890",
    appId: "1:832718026890:web:32a560410222fbf664d573"
};

export const fb = firebase.initializeApp(firebaseConfig);