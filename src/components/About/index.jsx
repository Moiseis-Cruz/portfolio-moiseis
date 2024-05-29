import { FaReact, FaCss3Alt, FaHtml5, FaGithub, FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";

import BgMyProfile from "../../assets/imgs/meu-perfil.png"
import styled from "styled-components";

export const About = () => {
    return(
        <section>
            <Subtitle>Sobre.</Subtitle>

            <ContainerAbout>
                <div>
                    <TitleDescription>Minhas ferramentas e habilidades</TitleDescription>

                    <Description>Essas são as principais ferramentas e habilidades que eu trabalho</Description>

                    <ContainerImageAbout>
                        <img src={BgMyProfile} alt="" />
                    </ContainerImageAbout>
                </div>

                <div>
                    <ul>
                        <li><FaReact /> React js</li>
                        <li><IoLogoJavascript /> JavaScript</li>
                        <li><FaCss3Alt /> CSS</li>
                        <li><FaHtml5 /> HTML</li>
                        <li><FaGithub /> Github</li>
                        <li><FaGitAlt /> Git</li>
                    </ul>

                    <h3>| Quem sou eu</h3>

                    <p>Me chamo Moiseis Cruz, tenho 33 anos e minha paixão por programação começou na infância. Com três anos de experiência em desenvolvimento, me especializei em Front-end. Destaco-me pela habilidade única de integrar programação de design, contribuindo tanto para o desenvolvimento de códigos eficientes quanto para a criação de interfaces intuitivas e atraentes. Acredito firmemente que a combinação de estética e funcionalidade resulta em experiências oline verdadeiramente memoráveis.</p>

                    <h3>| Principal Tecnologia</h3>

                    <p>Eu sou apaixonado por JavaScript, minha ferramenta predileta, e busco diariamente novas formas de aprimorar minhas capacidades. Essa linguagem versátil me motiva a criar aplicações dinâmicas e interativas, proporcionando uma experiência envolvente para o usuários. Atualmente, atuo como freelancer, onde abraço a diversidade de projetos e enfrento desafio que constantemente estimulam meu crescimento profissional, incentivando minha busca contínua por aprendizado.</p>
                </div>
            </ContainerAbout>
        </section>
    )
};

const Subtitle = styled.h2`
    font-size: 4.5rem;
    font-weight: 500;
`

const ContainerAbout = styled.div`
    background-color: darkcyan;
`

const TitleDescription = styled.h3`
    font-size: 2rem;
    font-weight: 500;
    max-width: 350px;
    margin-top: 15px;
`

const Description = styled.p`
    font-size: 1.2rem;
    background-color: gray;
    max-width: 22rem;
    margin-top: 15px;
`

const ContainerImageAbout = styled.div`
    max-width: 500px;
    height: auto;
    margin-top: 15px;
`