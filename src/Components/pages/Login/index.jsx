import FormLogin from "../../formLogin";
import { DivLogin } from "../../../helpers/style-login";

function Login({ history }) {
  return (
    <main>
      <div className="backpage">
        <h1
          onClick={() => {
            history.push("/");
          }}
        >
          Kenzie Hub
        </h1>
      </div>
      <DivLogin>
        <h2 className="action-name">Login</h2>
        <FormLogin history={history}></FormLogin>

        <p>Ainda não possui uma conta?</p>
        <button
          className="go-register"
          onClick={() => history.push("/register")}
        >
          Cadastre-se
        </button>
      </DivLogin>
    </main>
  );
}

export default Login;
