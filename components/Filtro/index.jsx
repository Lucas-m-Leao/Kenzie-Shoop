import { BsCart4 } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";

import { useState } from "react";
import { useDispatch } from "react-redux/es/hooks/useDispatch";

import {
  ButtonCart,
  Conteiner,
  ContainerCard,
  ButtonBar,
  ConteinerBar,
  SpanHome,
  SpanCart,
} from "./styled";
import { addProductsThunk } from "../../store/modules/products/thunks";
import { useHistory } from "react-router-dom";
import { useSelector } from "react-redux/es/exports";

const Filtra = ({ page }) => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const onClickFunction = (e) => {
    e.preventDefault();
    dispatch(addProductsThunk(value));
    setValue("");
  };
  const history = useHistory();
  const produts = useSelector(({ CartProducts }) => CartProducts);
  return (
    <Conteiner>
      <ContainerCard>
        <ButtonCart
          onClick={() => {
            !page ? history.push("/cart") : history.push("/");
          }}
        >
          <BsCart4 className="cart" />
          {!page ? "Carrinho" : "Voltar"}
        </ButtonCart>
        {!page ? (
          <SpanHome>{produts.length}</SpanHome>
        ) : (
          <SpanCart>{produts.length}</SpanCart>
        )}
      </ContainerCard>
      {!page && (
        <ConteinerBar>
          <input
            type="text"
            placeholder="Digite aqui para pesquisar."
            onChange={(e) => setValue(e.target.value)}
            value={value}
          />
          <ButtonBar onClick={(e) => onClickFunction(e)}>
            <BiSearchAlt className="lupa" /> Pesquisar
          </ButtonBar>
        </ConteinerBar>
      )}
    </Conteiner>
  );
};
export default Filtra;
