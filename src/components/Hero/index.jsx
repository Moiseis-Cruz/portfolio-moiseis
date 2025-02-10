import ImgMyPerfil from "/assets/imgs/profile-2.png";
import { Container, Title, BtnContact, ContentImg, ImgHero } from "./styles";

export const Hero = () => {
    return(
        <Container>
            <div>
                <Title>
                    Oi! Eu sou Moiseis
                    <br />
                    Eu sou um Frontend
                    <br />
                    Developer.
                </Title>

                <BtnContact href="../../public/downloads/moiseis-cruz-curriculo.docx" download>Entre em contato</BtnContact>
            </div>

            <ContentImg>
                <ImgHero src={ImgMyPerfil} alt="Foto do meu perfil" />
            </ContentImg>
        </Container>
    )
};
