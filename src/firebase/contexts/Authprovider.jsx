import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { Authcontext } from "./Authcontext";
import { Auth } from "../firebase.config";
import { useEffect, useState } from "react";

function Authprovider({ children }) {
  const [currentUser, setUser] = useState(null);

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

const provider = new GoogleAuthProvider();


  const GoogleSign=()=>{
    return signInWithPopup(Auth,provider)
  }

  const LoggOut=()=>{
    signOut(Auth)
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      
    });

    return () => unsubscribe();
  }, []);

  const authInfo = {
    SignUp,
    signIn,
    currentUser,
    GoogleSign,
    LoggOut
  };
  return <Authcontext value={authInfo}>{children}</Authcontext>;
}

export default Authprovider;
