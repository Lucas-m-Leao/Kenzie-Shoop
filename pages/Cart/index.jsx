import Filtra from "../../components/Filtro";
import Header from "../../components/Header";
import ProductCard from "../../components/ProductCart";
import TotalPrice from "../../components/TotalPrice";
import { Container, ContainerDiv } from "./style";

const Cart = () => {
  return (
    <Container>
      <Header />
      <ContainerDiv>
        <Filtra page={"Cart"} />
        <ProductCard />
      </ContainerDiv>
      <TotalPrice />
    </Container>
  );
};

export default Cart;
