import { Conteiner, InputConteiner, Label } from "./styled";

const Input = ({ label, error, register, name, ...rest }) => {
  return (
    <Conteiner>
      <Label>{label}</Label>
      <InputConteiner {...rest} {...register(name)} />
      {error && <span>{error}</span>}
    </Conteiner>
  );
};

export default Input;
