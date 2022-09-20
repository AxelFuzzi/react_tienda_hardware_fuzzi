import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDkcZ2BJX_CxAT3iH0Kj0b_Bqi924VGgbM",
  authDomain: "reacttiendahardware.firebaseapp.com",
  projectId: "reacttiendahardware",
  storageBucket: "reacttiendahardware.appspot.com",
  messagingSenderId: "707251883498",
  appId: "1:707251883498:web:65677eefd00f8baefc3693"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)