// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth' 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBUfIz5JYTtpstn6QzcEVmOodkPsI_ojts",
  authDomain: "support-hub-72c79.firebaseapp.com",
  projectId: "support-hub-72c79",
  storageBucket: "support-hub-72c79.appspot.com",
  messagingSenderId: "392532809765",
  appId: "1:392532809765:web:2938d1b1c6a99f6bf5c7cc",
  measurementId: "G-5T98YFMJ70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider()

export  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
        .then((result) => {
            const name = result.user.displayName;
            const email = result.user.email;
            const profilePic = result.user.photoURL; 

            localStorage.setItem("name", name)
            localStorage.setItem("email", email)
            localStorage.setItem("profilePic", profilePic)
        }) 
        .catch((error) => {
            console.log(error);
        });
};

export const signOut = () => {
    auth.signOut()
      .then(() => {
        localStorage.removeItem("name")
        localStorage.removeItem("email")
        localStorage.removeItem("profilePic")
      })
      .catch((error) => {
        console.log(error);
      });
  };