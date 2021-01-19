import React, { useState, useEffect, createContext } from "react";
import { auth, firestore } from "../services/fireConfig";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [username, setUsername] = useState("");

  const userContext = {
    user: user,
    isLoading: isLoading,
    username: username
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      if (user) {
        console.log("User is signIn", user);
        setIsLoading(false);
        return firestore.collection("users").doc(user.uid).get()
        .then(res => {
          if(res.exists){
            const data = res.data();
            setUsername(data.username);
          }
        })
        .catch(err => console.log("Error", err))
      } else {
        console.log("User is signOut", user);
        setIsLoading(false);
      }
    });
  }, []);

  return (
    <UserContext.Provider value={userContext}>{children}</UserContext.Provider>
  );
};

export default UserContextProvider;
