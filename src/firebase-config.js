import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getDatabase } from "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyBiuei5_VLza_KxruNm3rkMMG_8kAK5oXI",
    authDomain: "tech-interview-planless.firebaseapp.com",
    databaseURL: "https://tech-interview-planless-default-rtdb.firebaseio.com",
    projectId: "tech-interview-planless",
    storageBucket: "tech-interview-planless.appspot.com",
    messagingSenderId: "574611786724",
    appId: "1:574611786724:web:e873b751ed303dd02e55f1",
    measurementId: "G-L835RVE4JV"
  };

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);
export default db;