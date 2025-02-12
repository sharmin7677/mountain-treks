import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  updateProfile,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import auth from "../firebase.config";



export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider()


    const createUser = (email, password, name, photo)=>{
        
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password, name, photo);
    }

    const updateUser = ( name, photo)=>{
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        });
    }

    const signInUser = (email, password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const signInGoogle = ()=>{
        return signInWithPopup(auth, googleProvider)
    }

    const signOutUser = () =>{
        setLoading(true);
       return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, currentUser =>{
            console.log(currentUser)
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
        signInGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
           {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;