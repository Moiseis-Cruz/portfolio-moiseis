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
                <ImgHero src={ImgMyPerfil} alt="Foto do meu perfil" />
            </ContentImg>
        </Container>
    )
};

const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    @media (max-width: 1024px) {
        flex-direction: column;
        gap: 30px;
        padding: 30px 0;
    }
`

const Title = styled.h1`
    font-size: 3.5rem;
`

const ContentImg = styled.div`
    max-width: 450px;
    border-radius: 50%;
    padding: 15px;
    box-shadow: inset 0 0 3px 3px rgb(119, 119, 119);
    `

const ImgHero = styled.img`
    margin: auto;
    border-radius: 50%;
    box-shadow: 0 0 3px 3px rgb(119, 119, 119);
`

const BtnContact = styled.a`
    margin-top: 30px;
    display: inline-block;
    font-size: 18px;
    padding: 10px 20px;
    font-weight: 500;
    background-color: #b688dd;
    border-radius: 8px;
`