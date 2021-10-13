import { initializeApp } from "firebase/app"
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth"

const provider = new GoogleAuthProvider()

const firebaseConfig = {
  apiKey: "AIzaSyCEmjb_jGVpVKbK7Jf6HDF0HWBGyGeVWwc",
  authDomain: "iafcj-d2818.firebaseapp.com",
  projectId: "iafcj-d2818",
  storageBucket: "iafcj-d2818.appspot.com",
  messagingSenderId: "826341334050",
  appId: "1:826341334050:web:e6f5dce39ccb1636d07e7b",
  measurementId: "G-E47ZYFPL0Q",
}

initializeApp(firebaseConfig)

const mapUser = (user) => {
  const { displayName, email, photoURL } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
  }
}

export const onAuthChanged = (setUser) => {
  const auth = getAuth()
  onAuthStateChanged(auth, (user) => {
    if (user) {
      const normalizedUser = mapUser(user)
      setUser(normalizedUser)
    } else {
      // User is signed out
      setUser(null)
    }
  })
}

export const loginGoogle = (setUser) => {
  const auth = getAuth()
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      /* const credential = GoogleAuthProvider.credentialFromResult(result) */
      /* const token = credential.accessToken */
      // The signed-in user info.
      const user = result.user
      setUser(user)
    })
    .catch((error) => {
      console.log(error)
      // Handle Errors here.
      /* const errorCode = error.code
      const errorMessage = error.message */
      // The email of the user's account used.
      /* const email = error.email */
      // The AuthCredential type that was used.
      /* const credential = GoogleAuthProvider.credentialFromError(error) */
      // ...
    })
}

export const login = ({ email, password }) => {
  const auth = getAuth()
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user
      console.log(user)
      // ...
    })
    .catch((error) => {
      console.log(error)
      /*  const errorCode = error.code;
      const errorMessage = error.message; */
    })
}
