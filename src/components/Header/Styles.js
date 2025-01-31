import styled from "styled-components";

export const MyHeader = styled.header`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    padding: 30px 40px;
`

export const Title = styled.h2`
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

export const Hamburger = styled.div`
    display: none;
    flex-direction: column;
    cursor: pointer;
    z-index: 10;

    div {
        width: 30px;
        height: 3px;
        background-color: var(--light-color);
        margin: 4px 0;
        transition: all 0.3s linear;
        transform-origin: 1px;

        &:nth-child(1){
            transform: ${({ $isOpen }) => ($isOpen ? 'rotate(45deg)' : 'rotate(0)')};
        }

        &:nth-child(2) {
            opacity: ${({ $isOpen }) => ($isOpen ? '0' : '1')};
            transform: ${({ $isOpen }) => ($isOpen ? 'translateX(20px)' : 'translateX(0)')};
        }

        &:nth-child(3) {
            transform: ${({ $isOpen }) => ($isOpen ? 'rotate(-45deg)' : 'rotate(0)')};
        }
    }

    @media (max-width: 768px) {
        display: flex;
    }
`

export const Nav = styled.nav`
    @media (max-width: 768px) {
        display: ${({ $isOpen }) => ($isOpen ? 'flex' : 'none')};
        flex-direction: column;
        position: absolute;
        top: 80px;
        left: 0;
        width: 100%;
        background-color: var(--dark-color);
        padding: 20px 0;
    }
`

export const ListSections = styled.ul`
    display: flex;
    gap: 20px;
    list-style-type: none;
    @media (max-width: 768px) {
        flex-direction: column;
        gap: 15px;
        align-items: center;
    }
`

export const BtnContact = styled.a`
    background-color: var(--secundary-color);
    font-size: 20px;
    font-weight: 600;
    padding: 10px 20px;
    border-radius: 50px;
    transition: ease-in-out 0.3s;
    &:hover{
        background-color: transparent;
        border: 2px solid var(--light-color);
        color: var(--light-color);
    }

    @media (max-width: 768px) {
        width: 100%;
        display: flex;
    }
`