import React, { createContext, ReactNode, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Api } from "../utils/Api";
import { useState } from "react";
import { Dispatch } from "react";

interface ITechs {
  created_at: String;
  id: String;
  status: String;
  title: String;
  update_at: String;
}
interface IUserContext {
  openModal: boolean;
  setOpenModal: Dispatch<React.SetStateAction<boolean>>;
  history: any;
  token: string | null;
  techs: ITechs[];
  setTechs: Dispatch<React.SetStateAction<ITechs[]>>;
}
export const UserContext = createContext<IUserContext>({} as IUserContext);

interface IUserProviderProps {
  children: ReactNode;
}
const UserProvider = ({ children }: IUserProviderProps) => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [techs, setTechs] = useState<ITechs[]>([]);
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
