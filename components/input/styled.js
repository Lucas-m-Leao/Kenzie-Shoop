import styled from "styled-components";

export const Conteiner = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-family: 'MedievalSharp', cursive;
    font-weight: 700;
    span{
        display: flex;
        margin-top: 3px;
        width: 15rem;
        text-align: center;
        font-family: 'MedievalSharp',cursive;
        justify-content: center;
    }
`
export const InputConteiner = styled.input`
    padding-left: 5px;
    width: 15rem;
    height: 2rem;
    border-radius: 5px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    font-size: 16px;
    outline: none;
`
export const Label = styled.div`
margin-bottom: 5px;
`