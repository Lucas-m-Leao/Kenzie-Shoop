import { useState } from "react";
import { useHistory } from "react-router-dom";
import burger from "../../assets/img/Kenzie shoop(2).png";
import user from "../../assets/img/toppng.com-circled-user-icon-user-pro-icon-2240x2240.png";
import { Button } from "../../pages/Login/styles";
import Modal from "../modal";
import {
  Container,
  Logo,
  User,
  ConteinerUser,
  ContainerMenu,
  ContainerUserMenu,
  ContainerHeader,
} from "./styled";
const Header = () => {
  const history = useHistory();
  const [menu, setMenu] = useState(false);
  const [modal, setModal] = useState(false);
  const token = JSON.parse(localStorage.getItem("@kenzieShopeUser"));
  const deslogar = () => {
    localStorage.removeItem("@kenzieShopeUser");
    setMenu(false);
  };
  const modalFunction = () => {
    setModal(true);
    setMenu(false);
  };
  return (
    <>
      <Container>
        <ContainerHeader>
          <Logo src={burger} alt="" />
          <ConteinerUser>
            <ContainerUserMenu>
              <p>{token ? token.name : "Logar-se"}</p>
              <User src={user} alt="" onClick={() => setMenu(!menu)} />
            </ContainerUserMenu>
            {menu && (
              <ContainerMenu>
                {!token ? (
                  <Button onClick={() => history.push("/login")}>Logar</Button>
                ) : (
                  <>
                    <Button onClick={() => deslogar()}>Deslogar</Button>
                    {token.isAdm === "true" && (
                      <Button onClick={() => modalFunction()}>Criar</Button>
                    )}
                  </>
                )}
              </ContainerMenu>
            )}
          </ConteinerUser>
        </ContainerHeader>
      </Container>
      {modal && <Modal setModal={setModal} />}
    </>
  );
};
export default Header;
