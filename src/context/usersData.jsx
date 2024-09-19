import React, { createContext, useState, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [totalUsers, setNumberOfUsers] = useState(0);

  const updateNumberOfUsers = (newNumber) => {
    setNumberOfUsers(newNumber);
  };

  return (
    <UserContext.Provider value={{ totalUsers, updateNumberOfUsers }}>
      {children}
    </UserContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useUserContext = () => {
  return useContext(UserContext);
};
