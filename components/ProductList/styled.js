import styled from "styled-components";

export const Conteiner = styled.ul`
    margin-top:50px ;
    color: black;
    display: flex;
    gap: 5px;
    width: 100%;
    overflow: scroll;
    h3{
        width: 100%;
        overflow: hidden;
        text-overflow: ellipsis;
        height: 1.3rem;
    }
    img{
        margin-top: 10px;
        width: 9rem;
        height: 7rem;
    }
    p{
        width: 10rem;
        font-size: 13px;
        margin-bottom: 5px;
        height: 4.3rem;
        overflow: hidden;
        text-overflow: ellipsis;
    }
    span{
        margin-top: 13px;
        font-size: 13px;
    }
    li{
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        padding: 10px;
        border: 2px solid red;
        width: 11.5rem;
        
    }
    button{
        margin-top: 10px;
        color: black;
        font-family: 'MedievalSharp', cursive;
        font-size: 16px;
        font-weight: 700;
        border: none;
        background: none;
    }
    @media (min-width: 768px) {
        overflow-y: hidden;
        overflow-x: auto;
        gap: 16px;
        img{
            width: 14rem;
            height: 10rem
        }
        li{ 
            width: 15rem;
        }
        h3{
            font-size: 24px
        }
        p{
            height: 7.3rem;
            width: 14rem;
            font-size: 16px;
        }
        span{
            font-size: 16px;
        }
        button{
            font-size: 21px;
        }
    }
`