import React, { useEffect, useState } from 'react';
import { AuthContext } from './AuthContex';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/Firebase.config';

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loader, setLoader] = useState(true);

    const register = (email, password) => {
        setLoader(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const login = (email, password) => {
        setLoader(true)
        return signInWithEmailAndPassword(auth, email, password);
    }
    const logOuth = () => {
        setLoader(true);
        return signOut(auth);
    }

    const googleSignIn = () => {
        setLoader(true)
        return signInWithPopup(auth, googleProvider);
    }
    const updateUserProfile = (profile) => {
        return updateProfile(auth.currentUser, profile)
    }
    
    useEffect(()=>{
       const unSubscribe = onAuthStateChanged(auth, (currentUser)=> {
            setUser(currentUser);
            setLoader(false);
        })
        return () => {
            unSubscribe();
        }
    }, [])

    const authData = {
        user,
        loader,
        register,
        login,
        logOuth,
        googleSignIn,
        updateUserProfile
    }

    return <AuthContext value={authData}>
        {children}
    </AuthContext>
};

export default AuthProvider;