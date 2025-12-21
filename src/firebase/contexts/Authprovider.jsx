import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { Authcontext } from "./Authcontext";
import { Auth } from "../firebase.config";
import { useEffect, useState } from "react";
import LoadingPage from "../../components/Loader/LoadingPage";

function Authprovider({ children }) {
  const [currentUser, setUser] = useState(null);


  const [loader,setLoader]=useState(true)

 

  const SignUp = (email, password) => {
    return createUserWithEmailAndPassword(Auth, email, password);
    
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(Auth, email, password);
  };

  const provider = new GoogleAuthProvider();

  const GoogleSign = () => {
    return signInWithPopup(Auth, provider);
  };

  const LoggOut = () => {
    signOut(Auth);
  };

  const ProfileUpdate = (UpdateUserData) => {
    return updateProfile(Auth.currentUser, UpdateUserData);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(Auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
      setLoader(false)
    });

    return () => unsubscribe();
  }, []);



  if(loader){
    return  <LoadingPage></LoadingPage>
  }



  const authInfo = {
    SignUp,
    signIn,
    currentUser,
    GoogleSign,
    LoggOut,
    ProfileUpdate,
  };
  return <Authcontext value={authInfo}>{children}</Authcontext>;
}

export default Authprovider;
