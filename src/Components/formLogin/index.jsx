import { StyledForm } from "../../helpers/style-form";
import { useForm } from "react-hook-form";
import { Api } from "../../utils/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";
import { useContext } from "react";
import { UserContext } from "../../contexts";

function FormLogin() {
  const { history, setTechs } = useContext(UserContext);
  const formSchema = yup.object().shape({
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Insira um e-mail válido"
      )
      .required("Email obrigatório"),
    password: yup
      .string()
      .min(6, "Senha inválida")
      .required("Senha obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  async function onSubmit(data) {
    const response = await Api.loginUser(data, setTechs);
    console.log(response);
    if (!response.message) {
      setTimeout(async () => {
        history.push("/dashboard");
      }, 3000);
      await Api.searchUser(response.data.token, setTechs);
    }
  }
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="email">Email</label>
      <input
        type="text"
        placeholder="Digite aqui seu email de acesso"
        id="email"
        {...register("email")}
      />
      <p className="error-message">{errors.email?.message}</p>

      <label htmlFor="password">Senha</label>
      <input
        type="password"
        id="password"
        placeholder="Digite aqui sua senha de acesso"
        {...register("password")}
      />
      <p className="error-message">{errors.password?.message}</p>
      <button className="button-login" type="submit">
        Entrar
      </button>
      <ToastContainer autoClose={2000} />
    </StyledForm>
  );
}
export default FormLogin;
