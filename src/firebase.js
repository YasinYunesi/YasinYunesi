import firebase from "firebase/compat/app";
import "firebase/compat/database";

const firebaseConfig = {
  apiKey: "AIzaSyDQcStkmWLEwhQhREjGOaHlSZAUjVLZ7kU",
  authDomain: "yasin-yunesi-portfolio-3d85e.firebaseapp.com",
  projectId: "yasin-yunesi-portfolio-3d85e",
  storageBucket: "yasin-yunesi-portfolio-3d85e.appspot.com",
  messagingSenderId: "338404529058",
  appId: "1:338404529058:web:13ff73398ad0db5e6bd8fb",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.database();

export { db };
export default firebase;
