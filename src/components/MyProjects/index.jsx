import styled from "styled-components";
import { Card } from "../Card";
import GifRAM from "../../assets/gifs/RAM.gif"

export const MyProjects = () => {
    return(
        <SectionProjects>
            <Subtitle>Meus Projetos</Subtitle>

            <DescriptionProjects>Aqui estão os meus principais projetos e mais recentes. Aqui você poderá navegar por eles para conhecer melhor o meu trabalho. 😊</DescriptionProjects>

            <CardsContainer>
                
                <Card>
                    <img src={GifRAM} alt="" />
                    <CardTitle>Rick and Morty</CardTitle>
                    <CardDescription>Bem-vindo a mundo de Rick and Morty. Este é um projeto pessoal que desenvolvi para testar as minhas habilidades com React.js e aulgumas <i>lib</i> que eu aprendi a trabalhar. Como por exemplo, <i>Styled-components</i>: Para estilizar a aplicação. <i>React-Router</i>: Para acessar mais informações de cada card. <i>React-icons</i>: Para utilizar ícones da biblioteca do React.</CardDescription>

                    <p>Projeto com: React.js e API.</p>

                    <ButtonsContainer>
                        <AnchorBtn href="https://rick-and-morty-5bdvfn49a-moiseis-cruzs-projects.vercel.app/" target="_blank">Projeto (live)</AnchorBtn>
                        <AnchorBtn href="https://github.com/Moiseis-Cruz/rick-and-morty" target="_blank">Repositório</AnchorBtn>
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
    border: 3px solid #581051;
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
    color: white;
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 5px;
    text-transform: uppercase;
    border: 2px solid #581051;
    background-color: #b688dd;
`