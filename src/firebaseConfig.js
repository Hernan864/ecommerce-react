import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyCFbI1BytSjLkUMiIbH6OY7PuSQ5K4RlgI",
    authDomain: "ecommerce-react-2023.firebaseapp.com",
    projectId: "ecommerce-react-2023",
    storageBucket: "ecommerce-react-2023.appspot.com",
    messagingSenderId: "260281416215",
    appId: "1:260281416215:web:7840433250bb440dcb7a52"
};




const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)