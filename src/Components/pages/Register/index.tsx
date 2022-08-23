import { useContext } from "react";
import FormRegister from "../../formRegister";
import { DivLogin } from "../../../helpers/style-login";
import { UserContext } from "../../../contexts";
function Register() {
  const { history } = useContext(UserContext);
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
        <FormRegister></FormRegister>
      </DivLogin>
    </main>
  );
}

export default Register;
