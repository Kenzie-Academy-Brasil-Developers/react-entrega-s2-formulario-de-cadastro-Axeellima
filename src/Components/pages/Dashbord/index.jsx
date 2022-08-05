import { DashMain } from "../../../helpers/style-dashboard";

function Dashboard({ history }) {
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
            <div>
              <h3>Que pena! Estamos em desenvolvimento :(</h3>
              <p>
                Nossa aplicação está em desenvolvimento, em breve teremos
                novidades
              </p>
            </div>
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
