import Routes from "./routes";
import GlobalStyled, { StyledContainer } from "./styles/Global";
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <StyledContainer />
      <GlobalStyled />
      <Routes />
    </>
  );
}

export default App;
