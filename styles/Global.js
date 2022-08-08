import styled, { createGlobalStyle } from "styled-components";
import { ToastContainer } from 'react-toastify';
export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    list-style: none;
}
    button{
        cursor: pointer;
    }
`
export const StyledContainer = styled(ToastContainer)`
.Toastify__toast {
    font-family: 'MedievalSharp', cursive;
    font-weight: 700;
    color: black;
    font-size: 18px;
}
`