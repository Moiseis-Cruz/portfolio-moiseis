import { MyHeader, Title, ListSections } from "./Styles";

export const Header = () => {
    return(
        <MyHeader>
            <Title>MC</Title>

            <nav>
                <ListSections>
                    <li><a href="">Início</a></li>
                    <li><a href="">Sobre Mim</a></li>
                    <li><a href="">Habilidades</a></li>
                    <li><a href="">Projetos</a></li>
                </ListSections>
            </nav>
        </MyHeader>
    )
};