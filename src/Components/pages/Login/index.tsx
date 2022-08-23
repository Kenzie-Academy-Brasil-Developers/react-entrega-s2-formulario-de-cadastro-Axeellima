import FormLogin from "../../formLogin";
import { DivLogin } from "../../../helpers/style-login";
import { useContext } from "react";
import { UserContext } from "contexts";

function Login() {
  const { history } = useContext(UserContext);
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
        <FormLogin></FormLogin>

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
