import { StyledForm } from "../../helpers/style-form";
import { useForm } from "react-hook-form";
import { Api } from "../../utils/Api";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ToastContainer } from "react-toastify";

function FormRegister({ history }) {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .min(4, "É necessário 4 caracteres ou mais para o nome")
      .required("Nome obrigatório"),
    email: yup
      .string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        "Insira um e-mail válido"
      )
      .required("Email obrigatório"),
    password: yup
      .string()
      .trim()
      .required("Senha obrigatória")
      .matches(
        /^(?=.*\d)(?=.*[a-z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$/,
        "A senha deve contar 8 dígitos e um caractere especial"
      ),
    confirm_password: yup
      .string()
      .required("Digite novamente sua senha")
      .oneOf([yup.ref("password")], "As senhas não conferem"),
    bio: yup
      .string()
      .min(4, "É necessário 6 caracteres ou mais para a bio")
      .required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = async (data) => {
    const register = await Api.registerUser(data);

    if (!register.message) {
      setTimeout(() => {
        history.push("/");
      }, 3000);
    }
  };
  return (
    <StyledForm onSubmit={handleSubmit(onSubmit)} action="">
      <label htmlFor="name">Nome</label>
      <input
        type="text"
        placeholder="Digite aqui seu nome"
        id="name"
        {...register("name")}
      />
      <p className="error-message">{errors.name?.message}</p>

      <label htmlFor="email">E-mail</label>
      <input
        type="text"
        placeholder="Digite aqui seu e-mail"
        id="email"
        {...register("email")}
      />
      <p className="error-message">{errors.email?.message}</p>

      <label htmlFor="senha">Senha</label>
      <input
        type="password"
        placeholder="Digite aqui sua senha"
        id="senha"
        {...register("password")}
      />
      <p className="error-message">{errors.password?.message}</p>

      <label htmlFor="confirm_password">Confirme a senha</label>
      <input
        type="password"
        placeholder="Digite novamente a senha"
        id="confirm_password"
        {...register("confirm_password")}
      />
      <p className="error-message">{errors.confirm_password?.message}</p>

      <label htmlFor="bio">Bio</label>
      <input
        type="text"
        placeholder="Fale sobre você"
        id="bio"
        {...register("bio")}
      />
      <p className="error-message">{errors.bio?.message}</p>

      <label htmlFor="contact">Contato</label>
      <input
        type="text"
        placeholder="Opção de contato"
        id="contact"
        {...register("contact")}
      />
      <p className="error-message">{errors.contact?.message}</p>

      <label htmlFor="course_module">Selecionar módulo</label>
      <select id="course_module" {...register("course_module")}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend Avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend Avançado)">Quarto módulo</option>
      </select>

      <button className="register-button" type="Submit">
        Cadastrar
      </button>
      <ToastContainer autoClose={2000} />
    </StyledForm>
  );
}
export default FormRegister;
