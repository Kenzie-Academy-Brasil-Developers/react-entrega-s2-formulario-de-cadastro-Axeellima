import { StyledForm } from "../../helpers/style-form";
import { useForm } from "react-hook-form";
import { Api } from "../../utils/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";

function FormLogin({ history }) {
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
    const response = await Api.loginUser(data);

    if (!response.message) {
      setTimeout(() => {
        history.push("/dashboard");
      }, 3000);
      console.log(response);
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
