import styled from "styled-components";

export const ContentFooter = styled.footer`
    background-color: var(--secundary-color);
    margin-top: 30px;
    padding: 10px 20px 30px;
    @media (max-width: 425px) {
        padding: 30px 20px;
    }
`

export const FooterLogo = styled.h2`
    width: 120px;
    height: 120px;
    font-size: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    border: 5px solid var(--quartiary-color);
`

export const FooterGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, minmax(100px, 400px));
    grid-template-rows: 140px;
    justify-content: space-between;
    font-weight: 500;
    margin-top: 40px;
    @media (max-width: 768px) {
        grid-template-columns: repeat(2, minmax(100px, 400px));
        grid-template-rows: repeat(2, auto);
        gap: 35px;
    }
    @media (max-width: 426px) {
        grid-template-columns: minmax(100px, 400px);
        row-gap: 55px;
    }
`

export const FooterMessage = styled.p`
    font-size: 1.1rem;
`

export const Warning = styled.p`
    font-size: 1.1rem;
`

export const CopyrightBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const NavigationButtonsBox = styled.ul`
    display: flex;
    flex-direction: column;
    font-size: 1.7rem;
    gap: 1rem;
    justify-self: center;
    li a {
        transition: ease-in-out 0.4s;
        &:hover{
            color: var(--dark-color);
        }
    }
    @media (max-width: 426px) {
        justify-self: auto;
    }
`

export const MyContactsBox = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 1.7rem;
    justify-content: space-between;
    gap: 1rem;
    @media (max-width: 768px) {
        align-items: start;
    }
`

export const ContactList = styled.ul`
    display: flex;
    font-size: 1.7rem;
    gap: 1rem;
    li a {
        transition: ease-in-out 0.4s;
        &:hover{
            color: var(--dark-color);
        }
    }
`