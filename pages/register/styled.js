import styled from "styled-components";

export const Conteiner = styled.section`
    background-color: black;
    width: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    color: black;
    font-family: 'MedievalSharp', cursive;
    font-weight: 700;
    color: white;
    form{
        display: flex;
        flex-direction: column;
        gap: 15px;
    }
    img{
        width: 321px;
    }
`
export const ConteinerDiv = styled.div`
    background-color: #8c0505;
    width: 17rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5px;
    border-radius: 5px;
    margin-bottom: 30px;
    h1{
        font-size: 26px;
    }
    label{
        margin-left: 5px;
    }
`
export const Radio = styled.div`
    display: flex;
    justify-content: space-around;
`
export const ConteinerLogin = styled.div`
display: flex;
align-items: center;
flex-direction: column;
gap: 15px;
`
export const Button = styled.button`
    width: 4rem;
    height: 2rem;
    border-radius: 10px;
    font-family: 'MedievalSharp', cursive;
    font-weight: 700;
    font-size: 16px;
    color:#8c0505;
`
export const ConteinerLog = styled.div`
    margin:15px 0 10px 0 ;
    display: flex;
    align-items: center;
    width: 15rem;
    height: 3rem;
    justify-content: space-evenly;
`
export const ButtonDiv = styled.button`
    width: 15rem;
    height: 2rem;
    margin-bottom: 10px;
    border-radius: 10px;
    font-family: 'MedievalSharp', cursive;
    font-weight: 700;
    font-size: 16px;
    color:#8c0505;
`