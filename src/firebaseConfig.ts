import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyAyTUyNz9QpF0pK8jjmHIlCqwGHzUcAPVY",
    authDomain: "iot-final-23bc2.firebaseapp.com",
    databaseURL: "https://iot-final-23bc2-default-rtdb.firebaseio.com",
    projectId: "iot-final-23bc2",
    storageBucket: "iot-final-23bc2.firebasestorage.app",
    messagingSenderId: "581048197564",
    appId: "1:581048197564:web:3709429c855d3de115cbb9",
    measurementId: "G-NMRNH141Z4"
};

const app = initializeApp(firebaseConfig);

const database = getDatabase(app);

export {database}