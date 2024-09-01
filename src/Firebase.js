import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB1Ws89ZwFPMWi3Zs-CrODvSORiVpTciRM",
    authDomain: "clone-a06f.firebaseapp.com",
    projectId: "clone-a06f",
    storageBucket: "clone-a06f.appspot.com",
    messagingSenderId: "96157046480",
    appId: "1:96157046480:web:745a5569317ae21d3f70d5",
    measurementId: "G-G40F77D85M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize services
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
