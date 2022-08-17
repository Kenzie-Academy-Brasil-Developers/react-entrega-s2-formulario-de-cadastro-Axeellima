import { createContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../utils/Api";
import { useState } from "react";

export const UserContext = createContext({});

const UserProvider = ({ children }) => {
  const [openModal, setOpenModal] = useState(false);
  const [techs, setTechs] = useState([]);
  const history = useHistory();
  const token = localStorage.getItem("kenzieHub:@token");

  useEffect(() => {
    async function fetchData() {
      await Api.searchUser(token, setTechs);
    }
    fetchData();
  }, []);
  return (
    <UserContext.Provider
      value={{
        openModal,
        setOpenModal,
        history,
        techs,
        setTechs,
        token,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
