import { MyHeader } from "./Styles";

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