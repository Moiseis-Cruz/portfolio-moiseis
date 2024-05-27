import styled from "styled-components";
import ImgMyPerfil from "../../assets/imgs/meu-perfil.png"

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

                <BtnContact href="">Entre em contato</BtnContact>
            </div>

            <ContentImg>
                <img src={ImgMyPerfil} alt="Foto do meu perfil" />
            </ContentImg>
        </Container>
    )
};

const Container = styled.section`
    background-color: brown;
    display: flex;
    align-items: center;
    justify-content: space-around;
`

const Title = styled.h1`
    font-size: 3.5rem;
`

const ContentImg = styled.div`
    max-width: 500px;

`

const BtnContact = styled.a`
    margin-top: 30px;
    display: inline-block;
    background-color: #90a52a;
    font-size: 18px;
`