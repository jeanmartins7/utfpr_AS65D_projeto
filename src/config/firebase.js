// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
import { FIREBASE_API_KEY } from '@env';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: FIREBASE_API_KEY,
    authDomain: "projeto-as65d.firebaseapp.com",
    projectId: "projeto-as65d",
    storageBucket: "projeto-as65d.firebasestorage.app",
    messagingSenderId: "708525186849",
    appId: "1:708525186849:web:1a75cd7094531e5f23e860",
    measurementId: "G-10MMK8MVH0"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with AsyncStorage
const auth_mod = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export { auth_mod, app }