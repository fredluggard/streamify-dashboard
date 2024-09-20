import React, { createContext, useState, useContext } from "react";
import { FormatNum } from "../utils/FormatNum";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [totalUsers, setNumberOfUsers] = useState(0);
  const [activeUsers, setActiveUsers] = useState(0);

  const updateNumberOfUsers = (newNumber) => {
    setNumberOfUsers(FormatNum(newNumber));
  };

  const updateActiveUsers = (newNumber) => {
    setActiveUsers(FormatNum(newNumber));
  };

  return (
    <UserContext.Provider
      value={{
        totalUsers,
        updateNumberOfUsers,
        activeUsers,
        updateActiveUsers,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};
