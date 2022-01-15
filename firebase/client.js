import { initializeApp } from "firebase/app";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  getDocs,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCEmjb_jGVpVKbK7Jf6HDF0HWBGyGeVWwc",
  authDomain: "iafcj-d2818.firebaseapp.com",
  projectId: "iafcj-d2818",
  storageBucket: "iafcj-d2818.appspot.com",
  messagingSenderId: "826341334050",
  appId: "1:826341334050:web:e6f5dce39ccb1636d07e7b",
  measurementId: "G-E47ZYFPL0Q",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth();

export const loginEmail = ({ email, password }) => {
  return signInWithEmailAndPassword(auth, email, password);
};

export const onChangeAuth = (onChange) => {
  onAuthStateChanged(auth, (user) => {
    const normalizedUser = user ? user : null;
    onChange(normalizedUser);
  });
};

export async function getDataUser({ email }) {
  const q = query(collection(db, "users"), where("email", "==", email));
  const querySnapshot = await getDocs(q);
  let userData = null;
  querySnapshot.forEach((doc) => {
    console.log(doc.data());
    userData = doc.data();
  });
  return userData;
}

export const signOutMethod = () => {
  return signOut(auth);
};
