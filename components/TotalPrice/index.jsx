import { useSelector } from "react-redux/es/exports";
import { ButtonDiv } from "../../pages/Login/styles";
import { Container } from "./styles";

const TotalPrice = () => {
  const product = useSelector(({ CartProducts }) => CartProducts);
  const valor = product.reduce((accum, curr) => {
    return accum + curr.price;
  }, 0);

  return (
    <>
      {product.toString() !== "" && (
        <Container>
          <div>
            <p>{`Total de produtos:${product.length}`}</p>
            <p>{`Valor Total: R$${valor},00`}</p>
          </div>
          <div>
            <ButtonDiv>Finalizar Compra!</ButtonDiv>
          </div>
        </Container>
      )}
    </>
  );
};

export default TotalPrice;
