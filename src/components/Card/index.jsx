import styled from "styled-components";

export const Card = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    )
};

const Container = styled.div`
    background: linear-gradient(0deg, var(--tertiary-color), var(--primary-color));
    max-width: 370px;
    color: var(--light-color);
    width: 100%;
    padding: 10px;
    border-radius: 14px 0;
    text-align: center;
    border: 5px solid var(--secundary-color);
    @media (max-width: 820px) {
        max-width: 320px;
    }
`
