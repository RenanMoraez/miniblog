import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyAP0fuGzc06NVIKBePvuPqjEp8s2iFbdtA",
  authDomain: "miniblog-5609f.firebaseapp.com",
  projectId: "miniblog-5609f",
  storageBucket: "miniblog-5609f.appspot.com",
  messagingSenderId: "38329154287",
  appId: "1:38329154287:web:a33fbadd560cb72e4e391a"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


const db = getFirestore(app);

export {db};