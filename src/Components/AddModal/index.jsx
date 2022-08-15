import { StyledForm } from "../../helpers/style-form";
import { useState } from "react";
import { IoIosAdd } from "react-icons/io";

function AddModal() {
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      {openModal ? (
        <div className="add-tech">
          <h1>Cadastrar Tecnologia</h1>

          <StyledForm>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              id="name"
              placeholder="Digite a tecnologia/línguagem aqui"
            />

            <label htmlFor="status">Status</label>
            <select name="Iniciante" id="status">
              <option value="Iniciante">Iniciante</option>
              <option value="Intermedi">Intermediário</option>
              <option value="Intermedi">Avançado</option>
            </select>

            <button>Adicionar</button>
          </StyledForm>
        </div>
      ) : (
        <div className="techs">
          <div>
            <h3>Que pena! Você ainda não tem nenhuma tecnologia por aqui :(</h3>
            <IoIosAdd
              onClick={() => {
                setOpenModal(!openModal);
                console.log("gay");
              }}
              className="add-button"
            />
          </div>
          <p>Adicione suas tecnologias e seu nível de conhecimento!</p>
        </div>
      )}
    </>
  );
}
export default AddModal;
