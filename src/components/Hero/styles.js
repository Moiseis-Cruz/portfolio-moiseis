import styled from "styled-components";

export const Container = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-around;
    min-height: 100vh;
    @media (max-width: 1024px) {
        text-align: center;
        flex-direction: column;
        gap: 30px;
        padding: 30px 0;
    }
`

export const Title = styled.h1`
    font-size: 3.5rem;
    @media (max-width: 425px) {
        font-size: 2.5rem;
    }
`

export const ContentImg = styled.div`
    max-width: 450px;
    border-radius: 50%;
    padding: 15px;
    box-shadow: inset 0 0 3px 3px #FED8B1;
    /* @media (max-width: 375px) {
        padding: 0;
    } */
    `

export const ImgHero = styled.img`
    margin: auto;
    border-radius: 50%;
    box-shadow: 0 0 3px 3px #FED8B1;

    background: linear-gradient(to right, #ECB176, #A67B5B);
    background-size: 180% 180%;
    animation: gradient-animation 5s ease infinite;

    @keyframes gradient-animation {
    0% {
        background-position: 0% 50%;
    }

    50% {
        background-position: 100% 50%;
    }

    100% {
        background-position: 0% 50%;
    }
}
`

export const BtnContact = styled.a`
    margin-top: 30px;
    display: inline-block;
    font-size: 18px;
    padding: 10px 20px;
    font-weight: 500;
    background-color: #A67B5B;
    border-radius: 8px;
`