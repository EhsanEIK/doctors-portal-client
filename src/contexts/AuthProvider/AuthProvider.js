import React, { createContext } from 'react';
import app from '../../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {

    // create user
    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    // sign in 
    const logIn = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    }

    // update user profile
    const updateUserProfile = profile => {
        return updateProfile(auth.currentUser, profile);
    }

    const authInfo = {
        createUser,
        logIn,
        updateUserProfile,
    };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;