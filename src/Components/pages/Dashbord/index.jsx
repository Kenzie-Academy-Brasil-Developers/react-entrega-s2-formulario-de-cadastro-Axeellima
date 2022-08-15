import { DashMain } from "../../../helpers/style-dashboard";
import { useContext } from "react";
import { UserContext } from "../../../contexts";
import AddModal from "../../AddModal";

function Dashboard() {
  const { history } = useContext(UserContext);
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
            <AddModal></AddModal>
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
    </DashMain>
  );
}
export default Dashboard;
