import React, { useState, useEffect, createContext } from "react";
import { auth } from "../services/fireConfig";

export const UserContext = createContext();

const UserContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const userContext = {
    user: user,
    isLoading: isLoading
  };

  useEffect(() => {
    auth.onAuthStateChanged(user => {
      setUser(user);
      if (user) {
        console.log("User is signIn", user);
        setIsLoading(false);
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
