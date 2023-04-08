// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'Firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAm_T7mOOYmaxOBjFmh0xhiSRQtuwdah5k',
  authDomain: 'fir-auth-28933.firebaseapp.com',
  projectId: 'fir-auth-28933',
  storageBucket: 'fir-auth-28933.appspot.com',
  messagingSenderId: '822390421432',
  appId: '1:822390421432:web:a84358ec36e4724e29814d',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {auth};
