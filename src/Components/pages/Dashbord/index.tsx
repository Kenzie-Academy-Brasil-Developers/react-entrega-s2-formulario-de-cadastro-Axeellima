import { DashMain } from "../../../helpers/style-dashboard";
import { useContext } from "react";
import { UserContext } from "../../../contexts";
import { IoIosAdd } from "react-icons/io";
import { CgTrash } from "react-icons/cg";
import AddModal from "../../AddModal";
import { ToastContainer } from "react-toastify";
import { TechContext } from "../../../contexts/TechContext";
import { Api } from "../../../utils/Api";

function Dashboard() {
  const { openModal, setOpenModal, history, techs, setTechs, token } =
    useContext(UserContext);
  const { delTech } = useContext(TechContext);
  return (
    <DashMain>
      {localStorage.getItem("kenzieHub:@token") !== null ? (
        <>
          <div className="backpage">
            <div>
              <h1
                onClick={() => {
                  history.push("/dashboard");
                }}
              >
                Kenzie Hub
              </h1>
              <button
                className="go-out"
                onClick={() => {
                  localStorage.clear();
                  history.push("/");
                }}
              >
                Sair
              </button>
            </div>
          </div>
          <section className="user-page">
            <div className="user-information">
              <h1>
                Olá, seja bem vindo{" "}
                {localStorage.getItem("kenzieHub:@username")} !
              </h1>
              <p className="user-module">
                {localStorage.getItem("kenzieHub:@module")}
              </p>
            </div>
            <div className="add-button">
              <h3>Tecnologias</h3>
              <IoIosAdd
                onClick={() => {
                  setOpenModal(!openModal);
                }}
                className="button"
              ></IoIosAdd>
            </div>
            {openModal ? <AddModal></AddModal> : <></>}
            {techs.length > 0 ? (
              <ul className="techs">
                {techs.map((item, index) => (
                  <li key={index}>
                    <h3>{item.title}</h3>
                    <div>
                      <p>{item.status}</p>
                      <CgTrash
                        onClick={async () => {
                          await delTech({ id: item.id });
                          await Api.searchUser(token, setTechs);
                        }}
                        size={20}
                      ></CgTrash>
                    </div>
                  </li>
                ))}
              </ul>
            ) : (
              <div>
                <h1>Sem tecnologias aprendidas por aqui</h1>
                <p>Adicione novas tecnologias</p>
              </div>
            )}
          </section>
        </>
      ) : (
        <div className="error-div">
          <h1>Ops... Parece que alguma coisa deu errado</h1>
          <p
            onClick={() => {
              history.push("/");
            }}
          >
            Já possui conta? Faça login <strong>aqui</strong>
          </p>
          <p>
            Não possui conta?
            <strong
              onClick={() => {
                history.push("/register");
              }}
            >
              {" "}
              Cadastre-se
            </strong>
          </p>
        </div>
      )}
      <ToastContainer></ToastContainer>
    </DashMain>
  );
}
export default Dashboard;
