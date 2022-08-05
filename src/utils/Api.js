import axios from "axios";
import { Toast } from "./toast";

export class Api {
  static async registerUser(data) {
    const register = await axios
      .post("https://kenziehub.herokuapp.com/users", data)
      .then(function (response) {
        Toast.sucess("Cadastro realizado com sucesso");
        return response;
      })
      .catch(function (error) {
        console.log(error);
        console.log(error.response.data.message);
        Toast.failed("Algo deu errado! Verifique os dados e tente novamente");
      });

    return register;
  }
  static async loginUser(data) {
    const login = await axios
      .post("https://kenziehub.herokuapp.com/sessions", data)
      .then(function (response) {
        localStorage.setItem("kenzieHub:@token", `${response.data.token}`);
        localStorage.setItem(
          "kenzieHub:@username",
          `${response.data.user.name}`
        );
        localStorage.setItem(
          "kenzieHub:@module",
          `${response.data.user.course_module}`
        );
        localStorage.setItem("kenzieHub:@id", `${response.data.user.id}`);

        Toast.sucess("Login bem-sucedido");

        return response;
      })
      .catch(function (error) {
        console.log(error);
        Toast.failed("Algo deu errado!");
      });
    return login;
  }
}
