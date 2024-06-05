import styled from "styled-components";
import { Card } from "../Card";

export const MyProjects = () => {
    return(
        <SectionProjects>
            <h2>Meus Projetos</h2>

            <p>Aqui estão os meus principais projetos e mais recentes. Aqui você poderá navegar por eles para conhecer melhor o meu trabalho. 😊</p>

            <CardsContainer>
                
                <Card>
                    <img src="" alt="" />
                    <h2>Título do Card</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni minima nostrum inventore consequatur cumque cupiditate nam officia sapiente tempora illo repudiandae, eos blanditiis nihil! Saepe provident sed laudantium quas.</p>

                    <p>Tecnologias: HTML, CSS, JS</p>

                    <div>
                        <a href="/">Projeto (live)</a>
                        <a href="/">Repositório</a>
                    </div>
                </Card>

                <Card>
                    <img src="" alt="" />
                    <h2>Título do Card</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni minima nostrum inventore consequatur cumque cupiditate nam officia sapiente tempora illo repudiandae, eos blanditiis nihil! Saepe provident sed laudantium quas.</p>

                    <p>Tecnologias: HTML, CSS, JS</p>

                    <div>
                        <a href="/">Projeto (live)</a>
                        <a href="/">Repositório</a>
                    </div>
                </Card>

                <Card>
                    <img src="" alt="" />
                    <h2>Título do Card</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni minima nostrum inventore consequatur cumque cupiditate nam officia sapiente tempora illo repudiandae, eos blanditiis nihil! Saepe provident sed laudantium quas.</p>

                    <p>Tecnologias: HTML, CSS, JS</p>

                    <div>
                        <a href="/">Projeto (live)</a>
                        <a href="/">Repositório</a>
                    </div>
                </Card>

                <Card>
                    <img src="" alt="" />
                    <h2>Título do Card</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni minima nostrum inventore consequatur cumque cupiditate nam officia sapiente tempora illo repudiandae, eos blanditiis nihil! Saepe provident sed laudantium quas.</p>

                    <p>Tecnologias: HTML, CSS, JS</p>

                    <div>
                        <a href="/">Projeto (live)</a>
                        <a href="/">Repositório</a>
                    </div>
                </Card>
            </CardsContainer>

        </SectionProjects>
    )
};

const SectionProjects = styled.section`
    background-color: #f1c592;
`

const CardsContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    place-content: center;
    align-items: center;
    background-color: #2967cb;
    padding: 50px 0;
    gap: 15px;
`