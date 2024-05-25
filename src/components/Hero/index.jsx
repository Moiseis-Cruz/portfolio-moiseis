import styled from "styled-components";
import ImgMyPerfil from "../../assets/imgs/meu-perfil.png"

export const Hero = () => {
    return(
        <Container>
            <div>
                <h1>Título</h1>

                <a href="">Botão</a>
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