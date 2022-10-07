
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyB_gfFw0F6OIfMHbeSPYKt0v-ikPg0zX9o",
  authDomain: "ecommerce-libros.firebaseapp.com",
  projectId: "ecommerce-libros",
  storageBucket: "ecommerce-libros.appspot.com",
  messagingSenderId: "811687900683",
  appId: "1:811687900683:web:c9015755e26b2e7b8ef90e"
};


const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)