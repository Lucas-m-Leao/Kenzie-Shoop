/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import { addProductsThunk } from "../../store/modules/products/thunks";
import { useDispatch, useSelector } from "react-redux/es/exports";
import { Conteiner } from "./styled";
import { v4 as uuidv4 } from "uuid";
import { addCartThunk } from "../../store/modules/cart/thunks";
import { toast } from "react-toastify";
const Products = () => {
  const [value, setValue] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addProductsThunk(""));
  }, [value]);

  const product = useSelector(({ Products }) => Products);
  function onClickFunction(id) {
    const element = product.products.find((item) => item.id === id);
    setValue(!value);
    value
      ? (element.id = `${uuidv4()}${
          Math.floor(Math.random() * (9999 - 150)) + 150
        }`)
      : (element.id = `${uuidv4()}${
          Math.floor(Math.random() * (9999 - 150)) + 150
        }`);
    dispatch(addCartThunk(element));
    toast.success("Adicionado com sucesso.");
  }
  return (
    <Conteiner>
      {product.products &&
        product.products.map((element) => {
          return (
            <li key={element.id}>
              <h3>{element.name}</h3>
              <img src={element.img} alt="" />
              <p>{element.description}</p>
              <span>R$ {element.price}.00</span>
              <button onClick={() => onClickFunction(element.id)}>
                Adicinar ao Carrinho
              </button>
            </li>
          );
        })}
    </Conteiner>
  );
};
export default Products;
