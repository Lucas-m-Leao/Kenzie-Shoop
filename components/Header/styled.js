import styled from "styled-components";

export const Container = styled.header`
    width: 100%;
    display: flex;
    justify-content: center;
    background-color: #8c0505;
`
export const ContainerHeader = styled.div`
    display: flex;
    width: 90%;
    justify-content: space-between;
    @media (min-width:768px) {
        width: 70%
    }
`
export const ConteinerUser = styled.div`
    display: flex;
    align-items: center;
    gap: 10px;
    justify-content: center;
    `
export const Logo = styled.img`
    width: 8rem;
`
export const User = styled.img`
    width: 2.5rem;
    cursor: pointer;
`
export const ContainerMenu = styled.div`
    position: absolute;
    top: 64px;
    margin-left: 2rem;
    margin-top: 5px;
    
`
export const ContainerUserMenu = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
    @media (min-width:768px) {
        p{
            font-size: 25px;
        }
    }
`