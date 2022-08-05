import FormRegister from "../../formRegister";
import { DivLogin } from "../../../helpers/style-login";
function Register({ history }) {
  return (
    <main>
      <div className="backpage">
        <div className="backpage-register">
          <h1
            onClick={() => {
              history.push("/");
            }}
          >
            Kenzie Hub
          </h1>
          <button className="go-back" onClick={() => history.push("/")}>
            Voltar
          </button>
        </div>
      </div>
      <DivLogin>
        <FormRegister history={history}></FormRegister>
      </DivLogin>
    </main>
  );
}

export default Register;
