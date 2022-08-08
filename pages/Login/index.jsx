import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import Input from "../../components/input";
import { ShemaLogin } from "../../components/Yup";
import {
  Button,
  ButtonDiv,
  Conteiner,
  ConteinerDiv,
  ConteinerLogin,
} from "./styles";
import burger from "../../assets/img/Kenzie shoop.png";
import Api from "../../components/data";
import { toast } from "react-toastify";

const Login = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(ShemaLogin),
  });
  const onFunctionSubmit = (data) => {
    Api.post("/login", data)
      .then((res) => {
        localStorage.setItem(
          "@kenzieShopeUser",
          JSON.stringify({
            name: res.data.user.name,
            isAdm: res.data.user.isAdm,
            token: res.data.accessToken,
          })
        );
        history.push("/");
      })
      .catch(() => toast.error("Email ou senha incorreta."));
  };
  return (
    <Conteiner>
      <div>
        <img src={burger} alt="" />
      </div>
      <ConteinerDiv>
        <ConteinerLogin>
          <h1>Login</h1>
          <Button onClick={() => history.push("/")}>Sair</Button>
        </ConteinerLogin>
        <form action="" onSubmit={handleSubmit(onFunctionSubmit)}>
          <Input
            type="text"
            name={"email"}
            register={register}
            label={"Usuario"}
            placeholder="Insira seu email."
            error={errors.email && errors.email.message}
          />
          <Input
            type="password"
            name={"password"}
            register={register}
            label={"Senha"}
            placeholder="Insira sua Senha."
            error={errors.password && errors.password.message}
          />
          <ButtonDiv>Entrar</ButtonDiv>
        </form>
        <span>Não possui uma conta?</span>
        <ButtonDiv onClick={() => history.push("/register")}>
          Registre-se
        </ButtonDiv>
      </ConteinerDiv>
    </Conteiner>
  );
};

export default Login;
