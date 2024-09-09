import styled from "styled-components";
import { Card } from "../Card";
import GifRAM from "../../assets/gifs/RAM.gif";
import GifGithubUserSearcher from "../../assets/gifs/github-user-searcher.gif";
import GifPricingComponent from "../../assets/gifs/pricing-component.gif";
import GifCodeGenerator from "../../assets/gifs/qr-code-generator.gif";
import GifAdviceGenerator from "../../assets/gifs/advice-generator.gif"

export const MyProjects = () => {
    return(
        <SectionProjects id="my-projects">
            <Subtitle>Meus Projetos</Subtitle>

            <DescriptionProjects>Aqui estão os meus principais projetos e mais recentes. Aqui você poderá navegar por eles para conhecer melhor o meu trabalho. 😊</DescriptionProjects>

            <CardsContainer>

                <Card>
                    <img src={GifRAM} alt="Imagem do projeto Rick and Morty" />
                    <CardTitle>Rick and Morty</CardTitle>
                    <CardDescription>Bem-vindo a mundo de Rick and Morty. Este é um projeto pessoal que desenvolvi para testar as minhas habilidades com React.js e aulgumas <i>lib</i> que eu aprendi a trabalhar. Como por exemplo, <i>Styled-components</i>: Para estilizar a aplicação. <i>React-Router</i>: Para acessar mais informações de cada card. <i>React-icons</i>: Para utilizar ícones da biblioteca do React.</CardDescription>

                    <p>Projeto com: React.js e API.</p>

                    <ButtonsContainer>
                        <AnchorBtn href="https://rick-and-morty-5bdvfn49a-moiseis-cruzs-projects.vercel.app/" target="_blank">Projeto (live)</AnchorBtn>
                        <AnchorBtn href="https://github.com/Moiseis-Cruz/rick-and-morty" target="_blank">Repositório</AnchorBtn>
                    </ButtonsContainer>
                </Card>

                <Card>
                    <img src={GifGithubUserSearcher} alt="Imagem do projeto Finder GitHub User" />
                    <CardTitle>Finder GitHub User</CardTitle>
                    <CardDescription>O Finder GitHub User é um desafio para mostrar o meu conhecimento em trabalhar, principalmente com JavaScript e APIs, e, renderizar os métodos solicitados na tela. Esse métodos renderizado são algumas informações sobre usuários do Github que são buscados através do campo de procura. Se o usuário procurado não existir, apresentará uma mensagem especifica indicando a não existência.</CardDescription>

                    <p>Projeto com: HTML, CSS, JS e API.</p>

                    <ButtonsContainer>
                        <AnchorBtn href="https://github-user-searcher-49iehgol0-moiseis-cruzs-projects.vercel.app/" target="_blank">Projeto (live)</AnchorBtn>
                        <AnchorBtn href="https://github.com/Moiseis-Cruz/github-user-searcher" target="_blank">Repositório</AnchorBtn>
                    </ButtonsContainer>
                </Card>

                <Card>
                    <img src={GifPricingComponent} alt="Imagem do projeto Pricing Component" />
                    <CardTitle>Pricing Component With Toggle</CardTitle>
                    <CardDescription>Desafio do Frontend Mentor de um Princing Component com um botão que alterna entre as opções de 3 opções de planos, Sendo que esses planos podem ser anuais ou mensais. Que usa um botão para alternar entre eles. <br/> Para selecionar os pagamentos anuais/mensais usei um evento de Click em um input do tipo checkbox, que adiciona visibilidade a uma seção e remove de outra, e vice-versa.</CardDescription>

                    <p>Projeto com: HTML, CSS, JS.</p>

                    <ButtonsContainer>
                        <AnchorBtn href="https://moiseis-cruz.github.io/pricing-component/" target="_blank">Projeto (live)</AnchorBtn>
                        <AnchorBtn href="https://github.com/Moiseis-Cruz/pricing-component" target="_blank">Repositório</AnchorBtn>
                    </ButtonsContainer>
                </Card>

                <Card>
                    <img src={GifCodeGenerator} alt="Projeto QR Code Generator" />
                    <CardTitle>QR-Code Generator</CardTitle>
                    <CardDescription>Este projeto gera um QR-Code ao digitar algo no campo. Depois é só clicar no botão ou teclar enter no próprio campo de digitação.</CardDescription>

                    <p>Projeto com: HTML, CSS, JS & API.</p>

                    <ButtonsContainer>
                        <AnchorBtn href="https://moiseis-cruz.github.io/qr-code-generator/" target="_blank">Projeto (live)</AnchorBtn>
                        <AnchorBtn href="https://github.com/Moiseis-Cruz/qr-code-generator" target="_blank">Repositório</AnchorBtn>
                    </ButtonsContainer>
                </Card>

                <Card>
                    <img src={GifAdviceGenerator} alt="Imagem do projeto Advice Generator" />
                    <CardTitle>Advice Generator</CardTitle>
                    <CardDescription>Projeto proposto pelo curso DevQuest, do Frontend Mentor, para testar as minhas habilidades estudadas até então. <br/> Um gerador de conselhos aleatórios onde é gerado um novo conselho ao clicar no botão em formato circular com um dado centralizado nele.</CardDescription>

                    <p>Projeto com: HTML, CSS, JS e API.</p>

                    <ButtonsContainer>
                        <AnchorBtn href="https://moiseis-cruz.github.io/advice-generator-app/" target="_blank">Projeto (live)</AnchorBtn>
                        <AnchorBtn href="https://github.com/Moiseis-Cruz/advice-generator-app" target="_blank">Repositório</AnchorBtn>
                    </ButtonsContainer>
                </Card>

            </CardsContainer>

        </SectionProjects>
    )
};

const SectionProjects = styled.section`
    padding-top: 40px;
    text-align: center;
`

const Subtitle = styled.h2`
    font-size: 4.5rem;
    font-weight: 500;
    @media (max-width: 425px) {
        font-size: 3rem;
    }
`

const DescriptionProjects = styled.p`
    font-size: 1.6rem;
    font-weight: 500;
    max-width: 550px;
    margin: 20px auto 0;

`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    place-content: center;
    align-items: center;
    padding: 50px 0;
    gap: 15px;
`

const CardTitle = styled.h2`
    margin-top: 5px;
`

const CardDescription = styled.p`
    text-align: left;
    margin-top: 10px;
    overflow-y: scroll;
    height: 90px;
    padding-left: 5px;
    border: 3px solid #A67B5B;
`

const ButtonsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;
    margin-top: 5px;
`

const AnchorBtn = styled.a`
    width: 160px;
    height: 25px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #F8EDE3;
    /* color: #FED8B1; */
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 5px;
    text-transform: uppercase;
    border: 2px solid #A67B5B;
    background-color: #ECB176;
`