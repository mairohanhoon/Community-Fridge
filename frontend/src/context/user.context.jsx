import { createContext, useContext, useState } from "react";

const userContext = createContext(null);

export const useUserContext = () => {
  return useContext(userContext);
};

export const userProvider = (props) => {
  const [userID, setUserID] = useState(null);
  const [role, setRole] = useState(null);

  return (
    <userContext.Provider value={{}}>{props.children}</userContext.Provider>
  );
};
