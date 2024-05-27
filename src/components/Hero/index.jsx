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
                <img src={ImgMyPerfil} style={{margin: "auto", borderRadius: "50%", padding: "15px", boxShadow: "0 0 6px 6px rgb(119, 119, 119)"}} alt="Foto do meu perfil" />
            </ContentImg>
        </Container>
    )
};

const Container = styled.section`
    /* background-color: brown; */
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
    /* background-color: burlywood; */
    border-radius: 50%;
    overflow: hidden;
    box-shadow: inset 0 0 2px 2px rgb(119, 119, 119);
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