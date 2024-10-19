import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../firebase/firebase.config";
import axios from "axios";
const auth = getAuth(app);
export const AuthContext = createContext(null);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  //   register
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  // login
  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   log out
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      const userEmail=currentUser?.email || user?.email
      const loggedUser = { email: userEmail };

      setUser(currentUser);
      setLoading(false);
      if (currentUser) {
        axios.post('http://localhost:5000/jwt',loggedUser,
        {withCredentials:true})
        .then((res) => {
          console.log('token response',res.data);
        });
      }
      else{
axios.post('http://localhost:5000/logout',loggedUser,{
  withCredentials:true,
})
.then(res=>{
  console.log(res.data);
})
      }
    });
    return () => {
      unSubscribe;
    };
  }, []);

  const info = {
    user,
    loading,
    createUser,
    signIn,
    logOut,
  };

  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
