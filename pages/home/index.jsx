import Filtra from "../../components/Filtro";
import Header from "../../components/Header";
import Products from "../../components/ProductList";
import { ContainerHome, ContainerDiv } from "./styled";

const Home = () => {
  return (
    <ContainerHome>
      <Header />
      <ContainerDiv>
        <Filtra />
        <Products />
      </ContainerDiv>
    </ContainerHome>
  );
};

export default Home;
