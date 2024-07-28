import { FaLinkedin, FaGithub, FaDiscord } from "react-icons/fa";
import styled from "styled-components";

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
                        <li><a href="">Projetos</a></li>
                        <li><a href="">Sobre</a></li>
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

const ContentFooter = styled.footer`
    padding: 10px 20px;
    @media (max-width: 425px) {
        padding: 30px 20px;
        
    }
`

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

const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 400px));
    grid-template-rows: 140px;
    justify-content: space-between;
    font-weight: 500;
    margin-top: 40px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(100px, 400px));
        grid-template-rows: repeat(2, auto);
    }
    @media (max-width: 425px) {
        grid-template-columns: minmax(100px, 400px);
        row-gap: 55px;
    }
`

const FooterMessage = styled.p`
    font-size: 1.1rem;
`

const Warning = styled.p`
    font-size: 1.1rem;
`

const CopyrightBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    `

const NavigationButtonsBox = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
    gap: 1rem;
    `

const MyContactsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.7rem;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 768px) {
        align-items: start;
    }
    `

const ContactList = styled.ul`
    display: flex;
    font-size: 1.7rem;
    gap: 1rem;
`