import React, { createContext, useState, useContext } from "react";
import { FormatNum } from "../utils/FormatNum";
import { useFetchUsersData } from "../hooks/useFetchUsersData";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const onError = (error) => {
    console.log("Error:", error);
  };

  const enabled = true;
  const endpoint = "growthData";
  const { data } = useFetchUsersData({ endpoint, enabled, onError });

  const totalUser = data?.data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.users;
  }, 0);

  const totalActiveUsers = data?.data.reduce((accumulator, currentItem) => {
    return accumulator + currentItem.activeUsers;
  }, 0);

  const [totalUsers, setNumberOfUsers] = useState(Number(totalUser));
  const [activeUsers, setActiveUsers] = useState(Number(totalActiveUsers));
  const [percentActiveUsers, setPercentActiveUsers] = useState(0);
  const [totalStreams, setTotalStreams] = useState(0);

  const updateNumberOfUsers = (newNumber) => {
    setNumberOfUsers(FormatNum(newNumber));
  };

  const updateActiveUsers = (newNumber) => {
    setActiveUsers(FormatNum(newNumber));
  };

  const calculatePercent = (activeUsers, totalUsers) => {
    return (parseFloat(activeUsers) / parseFloat(totalUsers)) * 100;
  };

  const updatePercentActiveUsers = (newNumber) => {
    setPercentActiveUsers(FormatNum(newNumber));
  };

  const updateTotalStreams = (newNumber) => {
    setTotalStreams(FormatNum(newNumber));
  };

  return (
    <UserContext.Provider
      value={{
        totalUsers,
        updateNumberOfUsers,
        activeUsers,
        updateActiveUsers,
        percentActiveUsers,
        updatePercentActiveUsers,
        totalStreams,
        updateTotalStreams,
        calculatePercent,
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
