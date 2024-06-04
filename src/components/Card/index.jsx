import styled from "styled-components";

export const Card = ({children}) => {
    return(
        <Container>
            {children}
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