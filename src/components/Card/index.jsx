import styled from "styled-components";

export const Card = () => {
    return(
        <Container>
            <img src="" alt="" />
            <h2>Título do Card</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti magni minima nostrum inventore consequatur cumque cupiditate nam officia sapiente tempora illo repudiandae, eos blanditiis nihil! Saepe provident sed laudantium quas.</p>

            <p>Tecnologias: HTML, CSS, JS</p>

            <div>
                <a href="/">Projeto (live)</a>
                <a href="/">Repositório</a>
            </div>
        </Container>
    )
};

const Container = styled.div`
    /* background-color: aqua; */
    background: linear-gradient(0deg, rgba(227, 10, 206,1) 35%, rgba(119, 19, 204,1));
    max-width: 400px;
    width: 100%;
    min-height: 424px;
    padding: 10px;
    border-radius: 14px 0;
    text-align: center;
    border: 5px solid #581051;
`