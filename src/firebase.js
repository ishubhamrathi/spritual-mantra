import { initializeApp } from "firebase/app";

import {getAuth} from "firebase/auth"
const firebaseConfig = {
  apiKey: "AIzaSyAJ_jrWN2bzqrDs8oz6KupnvkmOf_46hZA",
  authDomain: "codeathon-37626.firebaseapp.com",
  projectId: "codeathon-37626",
  storageBucket: "codeathon-37626.appspot.com",
  messagingSenderId: "410021325302",
  appId: "1:410021325302:web:bd4af178fa4a3eab677fd7",
  measurementId: "G-WDG3LQ4R5G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export {app, auth};