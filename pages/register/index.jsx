import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useHistory } from "react-router-dom";
import Input from "../../components/input";
import { ShemaRegister } from "../../components/Yup";
import {
  Button,
  ButtonDiv,
  Conteiner,
  ConteinerDiv,
  ConteinerLog,
  ConteinerLogin,
  Radio,
} from "./styled";
import burger from "../../assets/img/Kenzie shoop.png";
import Api from "../../components/data";
const Register = () => {
  const history = useHistory();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ShemaRegister) });
  const onFunctionSubmit = (data) => {
    delete data.confirPassword;
    delete data.confirmEmail;
    Api.post("/register", data).then(() => history.push("/login"));
  };
  return (
    <Conteiner>
      <img src={burger} alt="" />
      <ConteinerDiv>
        <ConteinerLog>
          <h1>Cadastro</h1>
          <Button onClick={() => history.push("/")}>Sair</Button>
        </ConteinerLog>
        <form action="" onSubmit={handleSubmit(onFunctionSubmit)}>
          <Input
            type="text"
            name={"name"}
            label={"Nome"}
            register={register}
            placeholder="Insira seu Nome."
            error={errors.name && errors.name.message}
          />
          <Input
            type="text"
            name={"lastName"}
            label={"Sobrenome"}
            register={register}
            placeholder="Insira seu Sobrenome."
            error={errors.lastName && errors.lastName.message}
          />
          <Input
            type="number"
            name={"tel"}
            label={"Celular / Telefone fixo"}
            register={register}
            placeholder="Digite seu numero."
            error={errors.email && errors.email.message}
          />
          <Input
            type="email"
            name={"email"}
            label={"Email"}
            register={register}
            placeholder="Insira seu Email."
            error={errors.email && errors.email.message}
          />
          <Input
            type="email"
            name={"confirmEmail"}
            label={"Confirmar Email"}
            register={register}
            placeholder="Insira seu Email."
            error={errors.confirmEmail && errors.confirmEmail.message}
          />
          <Input
            type="password"
            name={"password"}
            label={"Senha"}
            register={register}
            placeholder="insira sua Senha."
            error={errors.password && errors.password.message}
          />
          <Input
            type="password"
            name={"confirPassword"}
            label={"Confirmar Senha"}
            register={register}
            placeholder="Confirmar Senha."
            error={errors.confirPassword && errors.confirPassword.message}
          />

          <span>E uma conta de administrador?</span>
          <Radio>
            <div>
              <input
                type="radio"
                name="isAdm"
                value={true}
                {...register("isAdm")}
              />
              <label htmlFor="sim">Sim</label>
            </div>
            <div>
              <input
                type="radio"
                name="isAdm"
                value={false}
                {...register("isAdm")}
                checked={true}
              />
              <label htmlFor="não">Não</label>
            </div>
          </Radio>
          <ButtonDiv>Cadastrar</ButtonDiv>
        </form>
        <ConteinerLogin>
          <span>Já e cadastrado faça o login!</span>
          <ButtonDiv onClick={() => history.push("/login")}>
            Fazer login!
          </ButtonDiv>
        </ConteinerLogin>
      </ConteinerDiv>
    </Conteiner>
  );
};

export default Register;
