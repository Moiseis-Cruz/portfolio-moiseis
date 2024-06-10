import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import styled from "styled-components";

export const Footer = () => {
    return(
        <footer>
            <div>
                <FooterLogo>MC</FooterLogo>

                <FooterGrid>

                    <div>
                        <FooterMessage>Se desejar conversar comigo, por favor não hesite e me envie uma mensagem nas redes sociais.</FooterMessage>

                        <Warning>BeCode &#169; 2024. Alguns direitos reservados.</Warning>
                    </div>

                    <ul>
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Sobre</a></li>
                        <li><a href="">Contatos</a></li>
                    </ul>

                    <div>
                        <p>me siga</p>

                        <ul>
                            <li><a href="https://www.linkedin.com/in/mois%C3%A9s-cruz-b88990248/"> <FaLinkedin /> </a></li>
                            <li><a href="https://github.com/Moiseis-Cruz"> <FaGithub /> </a></li>
                            <li><a href="https://discord.com/channels/@me/1095845561330053131" target="_blank"> <FaDiscord /> </a></li>
                            {/* <li><a href="">rede social</a></li> */}
                        </ul>
                    </div>
                </FooterGrid>

            </div>
        </footer>
    )
};

const FooterLogo = styled.h2`
    width: 120px;
    height: 120px;
    font-size: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    border: 5px solid rgba(255, 255, 255, 0.87);
`

const FooterMessage = styled.p`
    font-size: 1.3rem;
`

const Warning = styled.p`
    font-size: 1.3rem;
`

const FooterGrid = styled.div`
    background-color: gray;
    display: grid;
    /* grid-template-columns: repeat(3, 1fr); */
    grid-template-columns: repeat(3, minmax(100px, 350px));
    /* place-content: center; */
    justify-content: space-between;
    padding: 10px 20px;
    /* gap: 5rem; */
`