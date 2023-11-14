import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut,  } from "firebase/auth";
import app from "../Firebase/firebase.init";
export  const AuthContext = createContext(null)
const auth = getAuth(app);

const AuthProvider = ({children}) => {
 const [ user , setUser] = useState("")
  const  [ loding , setLoding] = useState(true)

 const googleProvider = new GoogleAuthProvider();

 const googleLogin = () => {
    setLoding(true)
    return signInWithPopup( auth , googleProvider)
 }

 
const createUser= ( email , password) => {
  setLoding(true)
   return createUserWithEmailAndPassword( auth , email , password )
}

const userLogin = (email , password) =>{
  setLoding(true)
    return signInWithEmailAndPassword(  auth , email,  password)
}

const logOut = () =>{
  setLoding(true)
    return signOut( auth)
}

useEffect( () => {
    onAuthStateChanged( auth , currentUser=>{
        setUser(currentUser)
        setLoding(false)
        console.log("Ok done" , currentUser);
    })
}, [])


  const authInfo = {
     user,
     createUser,
    googleLogin ,
     userLogin,
     logOut,
     loding
  }
  return (
    <AuthContext.Provider value={authInfo}>
       {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;