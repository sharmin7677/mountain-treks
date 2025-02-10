import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
} from "firebase/auth";
import auth from "../firebase.config";



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const createUser = (email, password, name, photoURL)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name, photoURL);
    }

    const updateUser = (user, name, photoURL)=>{
        return updateProfile(auth,user, {
            displayName: name,
            photoURL: photoURL,
        });
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signOutUser = () =>{
        setLoading(true);
       return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
        console.log('currently logged user', currentUser);
                setUser(currentUser);
                setLoading(false);
            
          })
          return () =>{
            unsubscribe();
          }
    }, [])

    const authInfo ={
        user,
        loading,
        createUser,
        signInUser,
        signOutUser,
        updateUser,

    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;