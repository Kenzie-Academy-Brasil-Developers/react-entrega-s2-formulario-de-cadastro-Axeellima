import { StyledForm } from "../../helpers/style-form";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts";
import { Api } from "../../utils/Api";

function AddModal() {
  const { openModal, setOpenModal, setTechs, token } = useContext(UserContext);
  const { newTech } = useContext(TechContext);
  const formSchema = yup.object().shape({
    title: yup
      .string()
      .min(2, "É necessário 2 caracteres ou mais para a tecnologia")
      .max(12, "Máximo de 12 caracteres excedido")
      .required("Tecnologia obrigatória"),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });
  const onSubmit = async (data) => {
    console.log(data);
    const response = await newTech(data);
    console.log(response);
    if (!response.message) {
      await Api.searchUser(token, setTechs);
      setTimeout(() => {
        setOpenModal(!openModal);
      }, 2500);
    }
  };
  return (
    <>
      <div className="add-tech">
        <div className="back-dash">
          <h1>Cadastrar Tecnologia</h1>
          <button
            onClick={() => {
              setOpenModal(!openModal);
            }}
          >
            X
          </button>
        </div>
        <StyledForm onSubmit={handleSubmit(onSubmit)}>
          <label htmlFor="title">Tecnologia</label>
          <input
            type="text"
            id="title"
            placeholder="Digite a tecnologia/línguagem aqui"
            {...register("title")}
          />
          <p className="error-message">{errors.title?.message}</p>

          <label htmlFor="status">Status</label>
          <select id="status" {...register("status")}>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediario">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </select>

          <button type="Submit">Adicionar</button>
        </StyledForm>
      </div>
    </>
  );
}
export default AddModal;
