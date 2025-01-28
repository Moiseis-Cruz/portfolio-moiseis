import styled from "styled-components";

export const Card = ({children}) => {
    return(
        <Container>
            {children}
        </Container>
    )
};

const Container = styled.div`
    background: linear-gradient(0deg, #ECB176, #6F4E37);
    max-width: 400px;
    color: #F8EDE3;
    width: 100%;
    min-height: 424px;
    padding: 10px;
    border-radius: 14px 0;
    text-align: center;
    border: 5px solid #A67B5B;
`
