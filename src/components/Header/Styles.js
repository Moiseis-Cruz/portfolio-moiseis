import styled from "styled-components";

export const MyHeader = styled.header`
    /* background-color: palevioletred; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    max-width: 1440px;
    padding: 30px 40px;
`

export const Title = styled.h1`
    width: 120px;
    height: 120px;
    font-size: 3.5rem;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-decoration: underline;
    border: 5px solid rgba(255, 255, 255, 0.87);
`

export const ListSections = styled.ul`
    /* background-color: pink; */
    display: flex;
    gap: 5px;
`

export const BtnContact = styled.a`
    background-color: #b688dd;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.87);
    padding: 10px 20px;
    border-radius: 50px;
`