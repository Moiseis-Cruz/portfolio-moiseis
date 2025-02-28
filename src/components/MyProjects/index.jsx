import styled from "styled-components";
import { Card } from "../Card";

import { cards } from "../../mocks/Cards.mock";
import bgTeclado from "../../../public/assets/imgs/teclado.jpg";

export const MyProjects = () => {
    return(
        <SectionProjects id="my-projects">
            <Subtitle>Meus Projetos</Subtitle>

            <DescriptionProjects>Aqui estão os meus principais projetos e mais recentes. Aqui você poderá navegar por eles para conhecer melhor o meu trabalho. 😊</DescriptionProjects>

            <CardsContainer>

                {
                    cards.map((card) => {
                        return(
                            <Card key={card.id}>
                                <img src={card.endereco} alt={`gif do projeto ${card.titulo}`} />
                                <CardTitle>{card.titulo}</CardTitle>
                                <CardDescription>{card.texto}</CardDescription>
                                <p>{card.tectnologias}</p>
                                <ButtonsContainer>
                                    {(card.urlProjeto !== "") ? <AnchorBtn href={card.urlProjeto} target="_blank">Projeto</AnchorBtn> : null}
                                    <AnchorBtn href={card.urlRepositorio} target="_blank">Repositório</AnchorBtn>
                                </ButtonsContainer>
                            </Card>
                        )
                    })
                }

            </CardsContainer>

        </SectionProjects>
    )
};

const SectionProjects = styled.section`
    padding-top: 40px;
    text-align: center;
    background: url(${bgTeclado}) center center no-repeat;
    background-size: cover;
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
    align-items: center;
    padding: 50px 0;
    gap: 15px;
    width: 1200px;
    max-width: 100%;
    height: 465px;
    overflow-y: scroll;
    margin: 40px auto 0;
    box-shadow: var(--secundary-color) -8px 8px 8px 3px;
    &:hover > :not(:hover){
        transition: ease-in-out 0.4s;
        opacity: 0.7;
        filter: blur(5px);
    }
    @media (max-width: 1024px) {
        width: 790px;
    }
`

const CardTitle = styled.h2`
    margin-top: 5px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
`

const CardDescription = styled.p`
    text-align: left;
    margin-top: 10px;
    overflow-y: scroll;
    height: 90px;
    padding-left: 5px;
    border: 3px solid var(--secundary-color);
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
    color: var(--light-color);
    font-weight: 500;
    letter-spacing: 1px;
    border-radius: 5px;
    text-transform: uppercase;
    border: 2px solid var(--secundary-color);
    background-color: var(--tertiary-color);
    transition: ease-in-out 0.4s;
    &:hover {
        background-color: var(--dark-color);
    }
`