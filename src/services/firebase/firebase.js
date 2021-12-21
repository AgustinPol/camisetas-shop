import * as firebase from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyCtHzdDqu9iiDDxlOl-TyMKvGsgdfsRMKI",
    authDomain: "camisetas-shop.firebaseapp.com",
    projectId: "camisetas-shop",
    storageBucket: "camisetas-shop.appspot.com",
    messagingSenderId: "165812124241",
    appId: "1:165812124241:web:84a860700c1dbeb7745670"
  };



const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);