import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
  import React, { useContext, useState, useEffect, createContext } from "react";
  import { auth } from "../service/firebase";
  import { db } from "../service/firebase";
  import { doc, getDoc, setDoc } from "firebase/firestore";
  
  const AuthContext = createContext();
  
  export const useAuth = () => useContext(AuthContext);
  
  export function Context({ children }) {
    const [user, setUser] = useState(null); 
    const [userDetails, setUserDetails] = useState({}); 
  
    useEffect(() => {
      const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
        setUser(currentUser); 
     
          const userDoc = doc(db, "users", currentUser.uid);
          const docSnap = await getDoc(userDoc);
           
            setUserDetails({
              username: docSnap.data().username,
              number: docSnap.data().number,
            });


      });
  
      return () => unsubscribe();
    }, []);
  
    const signIn = async (email, password, username, number) => {
      try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
  
        await setDoc(doc(db, "users", user.uid), {
          username,
          number,
        });
  
        setUserDetails({ username, number });
  
        return user;
      } catch (error) {
        throw new Error(error.message);
      }
    };
  
    const logIn = (email, password) => {
      return signInWithEmailAndPassword(auth, email, password);
    };
  

    const logOut = () => {
      setUserDetails({});
      return signOut(auth);
    };
  
    return (
      <AuthContext.Provider value={{ user, userDetails, signIn, logIn, logOut }}>
        {children}
      </AuthContext.Provider>
    );
  }
  
  export default Context;
  