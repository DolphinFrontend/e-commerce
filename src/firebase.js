import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";
import {getFirestore} from  "firebase/firestore"
import {getStorage} from "firebase/storage"



const firebaseConfig = {
  apiKey: "AIzaSyDprjt2-Yy7oGzZqJDzn4a7E8LKaXvsEV4",
  authDomain: "e-commerce-1026c.firebaseapp.com",
  projectId: "e-commerce-1026c",
  storageBucket: "e-commerce-1026c.appspot.com",
  messagingSenderId: "140522669465",
  appId: "1:140522669465:web:70b0fc5103d30be5b9ff08"
};


 export const app = initializeApp(firebaseConfig);
 export const auth = getAuth(app);
 export const db = getFirestore(app)
 export const storage = getStorage(app)