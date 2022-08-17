import { createContext } from "react";
import { Api } from "../../utils/Api";

export const TechContext = createContext({});

const TechProvider = ({ children }) => {
  const token = localStorage.getItem("kenzieHub:@token");

  const newTech = async (data) => {
    const create = await Api.createTech(token, data);
    return create;
  };
  const delTech = async (id) => {
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
