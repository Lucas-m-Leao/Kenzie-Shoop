import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../input";
import { ButtonDiv } from "../../pages/Login/styles";
import {
  ButtonFechar,
  Conteiner,
  ConteinerModal,
  ConteinerTitulo,
} from "./styles";
import { ShemaModal } from "../Yup";
import Api from "../data";
import { useDispatch } from "react-redux";
import { addProductsThunk } from "../../store/modules/products/thunks";
import { toast } from "react-toastify";

const Modal = ({ setModal }) => {
  const Store = JSON.parse(localStorage.getItem("@kenzieShopeUser"));
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(ShemaModal) });
  const onSubmitFunction = (data) => {
    console.log(data);
    Api.post("/food", data, {
      headers: {
        Authorization: `Bearer ${Store.token}`,
      },
    }).then(() => {
      setModal(false);
      dispatch(addProductsThunk());
      toast.success("Criado com sucesso.");
    });
  };
  return (
    <Conteiner>
      <ConteinerModal>
        <ConteinerTitulo>
          <h2>Cadastrar Produto</h2>{" "}
          <ButtonFechar onClick={() => setModal(false)}>X</ButtonFechar>
        </ConteinerTitulo>
        <form action="" onSubmit={handleSubmit(onSubmitFunction)}>
          <Input
            type="text"
            label={"Nome do Produto"}
            register={register}
            name={"name"}
            placeholder="Digite o nome do Produto"
            error={errors.name && errors.name.message}
          />
          <Input
            type="text"
            label={"Imagem do Produto"}
            register={register}
            name={"img"}
            placeholder="Digite a imagem do Produto"
            error={errors.img && errors.img.message}
          />
          <Input
            type="text"
            label={"Descrição do Produto"}
            register={register}
            name={"description"}
            placeholder="Digite a descrição do Produto"
            error={errors.description && errors.description.message}
          />
          <Input
            type="number"
            label={"Preço do Produto"}
            register={register}
            name={"price"}
            placeholder="Digite o preço do Produto"
            error={errors.price && errors.price.message}
          />
          <ButtonDiv id="buto">Cadastrar</ButtonDiv>
        </form>
      </ConteinerModal>
    </Conteiner>
  );
};

export default Modal;
