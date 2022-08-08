import styled from "styled-components";

export const Button = styled.button`
    width: 4.5rem;
    height: 2rem;
    border-radius: 10px;
    font-family: 'MedievalSharp', cursive;
    font-weight: 700;
    font-size: 16px;
    color:#8c0505;
`
export const ConteinerLogin = styled.div`
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
export const Conteiner = styled.section`
    background-color: black;
    width: 100%;
    height: 100vh;
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
    h1{
        
        font-size: 26px;
    }
`