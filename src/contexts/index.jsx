import { createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../utils/Api";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const history = useHistory();

  useEffect(() => {
    const token = localStorage.getItem("kenzieHub:@token");
    Api.searchUser(token);
  });
  return (
    <UserContext.Provider value={{ history }}>{children}</UserContext.Provider>
  );
};

export default UserProvider;
