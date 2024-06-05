import styled from "styled-components";
import { Card } from "../Card";
import GifRAM from "../../assets/gifs/RAM.gif"

export const MyProjects = () => {
    return(
        <SectionProjects>
            <h2>Meus Projetos</h2>

            <p>Aqui estão os meus principais projetos e mais recentes. Aqui você poderá navegar por eles para conhecer melhor o meu trabalho. 😊</p>

            <CardsContainer>
                
                <Card>
                    <img src={GifRAM} alt="" />
                    <CardTitle>Rick and Morty</CardTitle>
                    <p>Bem-vindo a mundo de Rick and Morty. Este é um projeto pessoal que desenvolvi para testar as minhas habilidades com React.js e aulgumas <i>lib</i> que eu aprendi a trabalhar. Como por exemplo, <i>Styled-components</i>: Para estilizar a aplicação. <i>React-Router</i>: Para acessar mais informações de cada card. <i>React-icons</i>: Para utilizar ícones da biblioteca do React.</p>

                    <p>Projeto com: React.js e API.</p>

                    <div>
                        <a href="https://rick-and-morty-5bdvfn49a-moiseis-cruzs-projects.vercel.app/" target="_blank">Projeto (live)</a>
                        <a href="https://github.com/Moiseis-Cruz/rick-and-morty" target="_blank">Repositório</a>
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

const CardTitle = styled.h2`
    background-color: red;
    margin-top: 10px;
`