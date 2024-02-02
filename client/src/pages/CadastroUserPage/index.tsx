import { IUsuarioCadastro } from "@/commons/interfaces";
import { ButtonWithProgress } from "@/components/ButtonWithProgress";
import { Input } from "@/components/Input";
import AuthService from "@/services/AuthService";
import { ChangeEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";


export function CadastroUserPage() {
  const [form, setForm] = useState({
    nome: "",
    username: "",
    senha: "",
  });
  const [errors, setErrors] = useState({
    nome: "",
    username: "",
    senha: "",
  });
  const [pendingApiCall, setPendingApiCall] = useState(false);
  const [userSaved, setUserSaved] = useState("");
  const [apiError, setApiError] = useState("");
  const navigate = useNavigate();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setForm((previousState) => {
      return {
        ...previousState,
        [name]: value,
      };
    });

    setErrors((previousState) => {
      return {
        ...previousState,
        [name]: undefined,
      };
    });
  };

  const onClickSignup = () => {
    setPendingApiCall(true);
    const userSigup: IUsuarioCadastro = {
      nome: form.nome,
      username: form.username,
      senha: form.senha,
    };
    AuthService.signup(userSigup)
      .then((response) => {
        setUserSaved(response.data.message);
        setApiError("");
        navigate("/login");
      })
      .catch((responseError) => {
        if (responseError.response.data.validationErrors) {
          setErrors(responseError.response.data.validationErrors);

          setApiError(responseError.response.data.message);
          setUserSaved("");
        }
      })
      .finally(() => {
        setPendingApiCall(false);
      });
  };

  return (
    <div id="mainlogin">
      <main className="container">
        <form id="formLogin">
          <div className="text-center">
            <h1 className="h3 mb-3 fw-normal mt-3 mx-5">Cadastre-se </h1>
          </div>

          <div className="form-floating mb-3">
            <Input
              label="Informe seu nome"
              name="nome"
              className="form-control"
              type="text"
              placeholder="Informe seu nome"
              onChange={onChange}
              value={form.nome}
              hasError={errors.nome ? true : false}
              error={errors.nome}
            />
          </div>

          <div className="form-floating mb-3">
            <Input
              label="Informe seu usuário"
              name="username"
              className="form-control"
              type="text"
              placeholder="Informe seu usuário"
              value={form.username}
              onChange={onChange}
              hasError={false}
              error=""/>
            {errors.username && (
              <div className="invalid-feedback">{errors.username}</div>
            )}
          </div>

          <div className="form-floating mb-3">
            <Input
              name="senha"
              className={
                errors.senha ? "form-control is-invalid" : "form-control"
              }
              error=""
              type="password"
              label=""
              value={form.senha}
              hasError={true}
              placeholder="Informe sua senha"
              onChange={onChange}
            />
            {errors.senha && (
              <div className="invalid-feedback">{errors.senha}</div>
            )}
          </div>
          <div className="text-center mx-3">
          <span>Já possui cadastro? </span>
          <Link to="/login">Autenticar-se</Link>
          </div>
          <ButtonWithProgress
            disabled={pendingApiCall}
            className="w-50 btn btn-lg btn-warning mb-3 mt-3"
            onClick={onClickSignup}
            pendingApiCall={pendingApiCall}
            text="Cadastrar"
          />

          {userSaved && (
            <div className="col-12 mb-3">
              <div className="alert alert-success">{userSaved}</div>
            </div>
          )}
          {apiError && (
            <div className="col-12 mb-3">
              <div className="alert alert-danger">{apiError}</div>
            </div>
          )}
          
        
        </form>
        
      </main>
    </div>
  );
}