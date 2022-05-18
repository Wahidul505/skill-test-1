// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrFbkJ7CO_n3EUSocx-y6fLe6Icxhvpsg",
    authDomain: "todo-task-5b6f7.firebaseapp.com",
    projectId: "todo-task-5b6f7",
    storageBucket: "todo-task-5b6f7.appspot.com",
    messagingSenderId: "565443064562",
    appId: "1:565443064562:web:1a29f77b6ca8549a7b566b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
