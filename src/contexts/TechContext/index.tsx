import React, { ReactNode } from "react";
import { useContext } from "react";
import { createContext } from "react";
import { UserContext } from "..";
import { Api } from "../../utils/Api";

interface INewTech {
  data: { title: String; status: String };
}
interface IDelTech {
  id: String;
}
interface ITechContextProps {
  newTech: ({ data }: INewTech) => Promise<any>;
  delTech: ({ id }: IDelTech) => Promise<any>;
}

interface ITechProviderProps {
  children: ReactNode;
}

export const TechContext = createContext<ITechContextProps>(
  {} as ITechContextProps
);

const TechProvider = ({ children }: ITechProviderProps) => {
  const { token } = useContext(UserContext);

  const newTech = async ({ data }: INewTech) => {
    const create = await Api.createTech(token, data);
    return create;
  };
  const delTech = async ({ id }: IDelTech) => {
    const del = await Api.deleteTech(id, token);
    return del;
  };
  return (
    <TechContext.Provider value={{ newTech, delTech }}>
      {children}
    </TechContext.Provider>
  );
};

export default TechProvider;
