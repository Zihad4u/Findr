import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase";

export const AutoContext = createContext(null);
/* eslint-disable react/prop-types */
const AuthContext = ({ children }) => {
    const [loading, setLoading] = useState(true)
    const [user, setUser] = useState([]);
    // console.log(user)

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
        const unSubscribe = onAuthStateChanged(auth,async (currentUser) => {
            console.log('current value of the current user', currentUser);
            setUser(currentUser);
            setLoading(false); // End loading after user state is set
            if (currentUser) {
                const userData = {
                    email: currentUser.email,
                    displayName: currentUser.displayName
                };

                try {
                    const response = await fetch('http://localhost:5000/addUser', {
                        method: 'POST',
                        headers: {
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify(userData)
                    });
                    const data = await response.json();
                    console.log(data);
                } catch (error) {
                    console.error('Error adding user:', error);
                }
            }
        });

        return () => {
            unSubscribe();
        };
    }, []);

    // const userData = { email: user.email, displayName: user.displayName };
    // console.log(userData)

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