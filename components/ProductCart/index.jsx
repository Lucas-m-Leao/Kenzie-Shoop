import { useSelector } from "react-redux/es/exports";
import { Container } from "./styled";
import { useDispatch } from "react-redux/es/exports";
import { removeProductThunk } from "../../store/modules/cart/thunks";
import { toast } from "react-toastify";

const ProductCard = () => {
  const dispatch = useDispatch();
  const products = useSelector(({ CartProducts }) => CartProducts);
  const removeFunction = (id) => {
    dispatch(removeProductThunk(id));
    toast.success("Excluido com sucesso.");
  };

  return (
    <Container>
      {products.toString() === "" ? (
        <h2>Carrinho vazio, Tente adicionar algo!!! </h2>
      ) : (
        products.map((element, index) => {
          return (
            <li key={index}>
              <h3>{element.name}</h3>
              <img src={element.img} alt="" />
              <p>{element.description}</p>
              <span>R${element.price},00</span>
              <button onClick={() => removeFunction(element.id)}>
                Remover Produto
              </button>
            </li>
          );
        })
      )}
    </Container>
  );
};

export default ProductCard;
