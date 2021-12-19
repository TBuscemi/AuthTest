import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
  apiKey: "AIzaSyAu6gbnypN47cHh5fI2pvkCfk5eiCMbx5w",
  authDomain: "bag-of-holding-30cd3.firebaseapp.com",
  projectId: "bag-of-holding-30cd3",
  storageBucket: "bag-of-holding-30cd3.appspot.com",
  messagingSenderId: "245656537292",
  appId: "1:245656537292:web:645526b94f33d822bf1a69",
  measurementId: "G-GPQVHSXX0X"
})

export const auth = app.auth()
export default app
