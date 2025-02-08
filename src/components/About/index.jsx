import { FaReact, FaCss3Alt, FaHtml5, FaGithub, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import BgMyProfile from "../../../public/assets/imgs/image-profile.png";
import styled from "styled-components";

export const About = () => {
    return(
        <AboutSection id="about">
            <Subtitle>Sobre mim...</Subtitle>

            <ContainerAbout>
                <div>
                    <TitleDescription>Minhas ferramentas e habilidades</TitleDescription>

                    <Description>Essas são as principais ferramentas e habilidades que eu trabalho</Description>

                    <ContainerImageAbout>
                        <img src={BgMyProfile} alt="Foto do perfil" />
                    </ContainerImageAbout>
                </div>

                <ContentDescription>
                    <ListSkills>
                        <li><FaReact /> </li>
                        <li><IoLogoJavascript /> </li>
                        <li><FaCss3Alt /> </li>
                        <li><FaHtml5 /> </li>
                        <li><FaGithub /> </li>
                        <li><FaGitAlt /> </li>
                    </ListSkills>

                    <PersonalDescription>| Quem sou eu</PersonalDescription>

                    <MyDescription>Me chamo Moiseis Cruz, tenho 33 anos e minha paixão por programação começou na infância. Com dois anos de experiência em desenvolvimento, me especializei em Front-end. Destaco-me pela habilidade única de integrar programação de design, contribuindo tanto para o desenvolvimento de códigos eficientes quanto para a criação de interfaces intuitivas e atraentes. Acredito firmemente que a combinação de estética e funcionalidade resulta em experiências online verdadeiramente memoráveis.</MyDescription>

                    <PersonalDescription>| Principal Tecnologia</PersonalDescription>

                    <MyDescription>Eu sou apaixonado por JavaScript, minha ferramenta predileta, e busco diariamente novas formas de aprimorar minhas capacidades. Essa linguagem versátil me motiva a criar aplicações dinâmicas e interativas, proporcionando uma experiência envolvente para o usuários. Atualmente, atuo como freelancer, onde abraço a diversidade de projetos e enfrento desafio que constantemente estimulam meu crescimento profissional, incentivando minha busca contínua por aprendizado.</MyDescription>
                </ContentDescription>
            </ContainerAbout>
        </AboutSection>
    )
};

const AboutSection = styled.section`
    padding: 40px 0;
`

const Subtitle = styled.h2`
    font-size: 4.5rem;
    font-weight: 500;
    margin-left: 45px;
    @media (max-width: 1024px) {
        margin-left: 0;
        text-align: center;
    }
    @media (max-width: 425px) {
        font-size: 3rem;
    }
`

const ContainerAbout = styled.div`
    display: flex;
    justify-content: space-around;
    gap: 40px;
    margin-top: 110px;
    @media (max-width: 1024px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`

const TitleDescription = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    max-width: 350px;
    @media (max-width: 1024px) {
        margin: 15px auto 0;
    }
`

const Description = styled.p`
    font-size: 1.2rem;
    max-width: 22rem;
    margin-top: 15px;
    @media (max-width: 1024px) {
        margin: 15px auto 0;
    }
`

const ContainerImageAbout = styled.div`
    max-width: 500px;
    height: auto;
    margin-top: 15px;
`

const ListSkills = styled.ul`
    display: flex;
    flex-wrap: wrap;
    place-content: center;
    gap: 20px;
    font-size: 3rem;
    color: var(--light-color);
`

const ContentDescription = styled.div`
    max-width: 500px;
`

const PersonalDescription = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    margin-top: 25px;
`

const MyDescription = styled.p`
    font-size: 1.2rem;
    margin-top: 15px;
    padding-left: 15px;
    @media (max-width: 1024px) {
        padding-left: 0;
    }
`