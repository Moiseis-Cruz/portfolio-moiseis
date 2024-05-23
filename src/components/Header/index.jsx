import styled from "styled-components";

export const Header = () => {
    return(
        <MyHeader>
            <h1>Logo</h1>
            <ul>
                <li><a href="">Início</a></li>
                <li><a href="">Sobre Mim</a></li>
                <li><a href="">Habilidades</a></li>
                <li><a href="">Projetos</a></li>
            </ul>
        </MyHeader>
    )
};

const MyHeader = styled.header`
    background-color: palevioletred;
    display: flex;
    width: 100%;
    max-width: 1440px;   
`