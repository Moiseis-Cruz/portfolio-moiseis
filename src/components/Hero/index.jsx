import styled from "styled-components";
import ImgMyPerfil from "../../assets/imgs/meu-perfil.png"

export const Hero = () => {
    return(
        <Container>
            <div>
                <h1>
                    Oi! Eu sou Moiseis
                    <br />
                    Eu sou um Frontend
                    <br />
                    Developer.
                </h1>

                <a href="">Entre em contato</a>
            </div>

            <img src={ImgMyPerfil} alt="" />
        </Container>
    )
};

const Container = styled.section`
    background-color: brown;
    display: flex;
    align-items: center;
    justify-content: space-around;
`