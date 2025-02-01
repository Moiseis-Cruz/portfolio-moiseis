import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import { ContentFooter, FooterLogo, FooterGrid, FooterMessage, Warning, CopyrightBox, NavigationButtonsBox, MyContactsBox, ContactList } from "./styles";

export const Footer = () => {
    return(
        <ContentFooter>
            <div>
                <FooterLogo>MC</FooterLogo>

                <FooterGrid>

                    <CopyrightBox>
                        <FooterMessage>Se desejar conversar comigo, por favor não hesite e me envie uma mensagem nas redes sociais.</FooterMessage>

                        <Warning>BeCode &#169; 2024. Alguns direitos reservados.</Warning>
                    </CopyrightBox>

                    <NavigationButtonsBox>
                        <li><a href="#my-projects">Projetos</a></li>
                        <li><a href="#about">Sobre</a></li>
                        <li><a href="">Contatos</a></li>
                    </NavigationButtonsBox>

                    <MyContactsBox>
                        <p>me siga</p>

                        <ContactList>
                            <li><a href="https://www.linkedin.com/in/mois%C3%A9s-cruz-b88990248/"> <FaLinkedin /> </a></li>
                            <li><a href="https://github.com/Moiseis-Cruz"> <FaGithub /> </a></li>
                            <li><a href="https://discord.com/channels/@me/1095845561330053131" target="_blank"> <FaDiscord /> </a></li>
                        </ContactList>
                    </MyContactsBox>
                </FooterGrid>

            </div>
        </ContentFooter>
    )
};
