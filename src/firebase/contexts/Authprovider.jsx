import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { Authcontext } from "./Authcontext";
import { Auth } from "../firebase.config";
import { useEffect, useState } from "react";

function Authprovider({ children }) {

   const [currentUser,setUser]=useState(null)

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
  };

  const signIn =(email, password)=>{
        return signInWithEmailAndPassword(Auth,email,password)
  }


  useEffect(() => {
  const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
    setUser(currentUser);
  });

  return () => unsubscribe();
}, []);




  const authInfo = {
    SignUp,
    signIn,
    currentUser
  };
  return <Authcontext value={authInfo}>{children}</Authcontext>;
}

export default Authprovider;
