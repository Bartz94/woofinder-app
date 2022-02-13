
import { initializeApp } from 'firebase/app'
import { getFirestore } from '@firebase/firestore'

export const firebaseConfig = {
    apiKey: "AIzaSyBcBvRIR4ox95483Pc07ypo8smOb2Ph_RY",
    authDomain: "woofinder-82555.firebaseapp.com",
    projectId: "woofinder-82555",
    storageBucket: "woofinder-82555.appspot.com",
    messagingSenderId: "127640692355",
    appId: "1:127640692355:web:40b760db4eb6a6d57f9db6"
};

const app = initializeApp(firebaseConfig)

export const db = getFirestore(app)