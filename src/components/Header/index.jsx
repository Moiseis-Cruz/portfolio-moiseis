import { MyHeader, Title, ListSections, BtnContact } from "./Styles";

export const Header = () => {
    return(
        <MyHeader>
            <Title>MC</Title>

            <nav>
                <ListSections>
                    <li><BtnContact href="#about">Sobre Mim</BtnContact></li>
                    <li><BtnContact href="">Habilidades</BtnContact></li>
                    <li><BtnContact href="#my-projects">Projetos</BtnContact></li>
                </ListSections>
            </nav>
        </MyHeader>
    )
};