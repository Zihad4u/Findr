import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";

export const AutoContext = createContext(null);
/* eslint-disable react/prop-types */
const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([]);
    console.log(user)

        // login with email and password
        const loginWithemail = (email, password) => {
            setLoading(true);
            return signInWithEmailAndPassword(auth, email, password);
        };


    // registration
    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    };

    // all user store
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false); // End loading after user state is set
        });

        return () => {
            unSubscribe();
        };
    }, []);

    const authInfo = {
        createUser,
        loading,
        user,
        loginWithemail
    };
    return (
        <AutoContext.Provider value={authInfo}>
            {children}
        </AutoContext.Provider>
    );
};

export default AuthContext;