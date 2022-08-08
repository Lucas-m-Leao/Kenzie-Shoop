import styled from "styled-components";

export const ButtonCart = styled.button`
    display: flex;
    align-items: center;
    border: none;
    font-family: 'MedievalSharp',cursive;
    font-weight: 800;
    font-size: 18px;
    background:none;
    .cart{
        margin-right: 10px;
        width: 22px;
        height: 2rem;
        color: red;
    }
    @media (min-width: 768px) {
        font-size: 28px;
        .cart {
            width: 42px;
            height: 3rem;
        }
    }
`
export const Conteiner = styled.section`
    display: flex;
    width: 100%;
    flex-direction: column;
    align-items: center;
   border-bottom: 2px solid red;
`
export const ContainerCard = styled.div`
    display: flex;
    align-items: center;
    
`
export const SpanHome = styled.span`
    position: relative;
    right: 95px;
    top: -7px;
    background-color: red;
    color: white;
    padding: 2px 4px;
    border-radius:100%;
    font-size: 10px; 
    @media (min-width: 768px) {
        right: 145px;
        top: -8px;
        padding: 4px 8px;
        font-size: 12px;
    }
`
export const SpanCart = styled.span`
    position: relative;
    right: 70px;
    top: -8px;
    background-color: red;
    color: white;
    padding: 2px 4px;
    border-radius:100%;
    font-size: 10px; 
    @media (min-width: 768px) {
        right: 107px;
        top: -9px;
        padding: 4px 8px;
        font-size: 12px;
    }
`
export const ButtonBar = styled.button`
    font-family: 'MedievalSharp',cursive;
    font-weight: 800;
    display: flex;
    align-items: center;
    border-radius: 10px;
    font-family: 'MedievalSharp', cursive;
    font-weight: 700;
    font-size: 16px;
    color:black;
    height: 2rem;
    padding-right: 5px;
    .lupa{
        color: red;
        width: 21px;
        height: 1.5rem;
    }
    @media (min-width: 768px){
        font-size: 21px;
        height: 2.3rem;
        .lupa{
            width: 32px;
        }
    }
    
`
export const ConteinerBar = styled.div`
    display: flex;
    gap: 5px;
    input{
        padding-left: 5px;
        width: 12rem;
        height: 2rem;
        border-radius: 5px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
        font-size: 16px;
        outline: none;
        margin-bottom: 15px;
    }
    @media (min-width: 768px) {
        input{
            width: 17rem;
            height: 2.3rem;
        }
        
    }

`