import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDU-r9rxmlvBU5ovHHLhf5Bn9ZYLWOm79U",
  authDomain: "curso-5a783.firebaseapp.com",
  projectId: "curso-5a783",
  storageBucket: "curso-5a783.firebasestorage.app",
  messagingSenderId: "786609976633",
  appId: "1:786609976633:web:ce4ebf148e95608643a4e8",
  measurementId: "G-2BBBW6R9PC"
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);
const auth = getAuth(firebaseApp);

export { db, auth };