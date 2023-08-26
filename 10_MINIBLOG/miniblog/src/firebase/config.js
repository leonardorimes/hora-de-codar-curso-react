import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"



const firebaseConfig = {
  apiKey: "AIzaSyAkcnfwkui9amFj_T8FDVLJM9cRyeNHl7M",
  authDomain: "miniblog-17d1f.firebaseapp.com",
  projectId: "miniblog-17d1f",
  storageBucket: "miniblog-17d1f.appspot.com",
  messagingSenderId: "351419559273",
  appId: "1:351419559273:web:b4b9068ed96f9ebdabe1f8"
};


const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export { db }