import { createContext, useContext, useState } from "react";

const userContext = createContext(null);

export const useUserContext = () => {
  return useContext(userContext);
};

export const UserProvider = (props) => {
  const [userID, setUserID] = useState("");
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(true);

  return (
    <userContext.Provider value={{userID, setUserID, role, setRole, loading, setLoading}}>{props.children}</userContext.Provider>
  );
};
