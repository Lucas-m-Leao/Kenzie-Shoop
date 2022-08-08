import styled from "styled-components";

export const Conteiner = styled.section`
    color: white;
    position: absolute;
    z-index: 50;
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    
`
export const ConteinerTitulo = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 15px;
`
export const ConteinerModal = styled.div`
background-color: #8c0505;
padding: 19px;
border-radius: 10px;
form{
    display: flex;
    flex-direction: column;
    gap: 13px;
}
`
export const ButtonFechar = styled.button`
font-family: 'MedievalSharp',cursive;
font-weight: 700;
font-size: 25px;
border: none;
background: none;
color: white;
`
