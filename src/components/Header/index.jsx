import { MyHeader, Title, Hamburger, Nav, ListSections, BtnContact } from "./Styles";
import React, { useState } from "react";
import { FaCode } from "react-icons/fa";

export const Header = () => {

    const [ isOpen, setIsOpen ] = useState(false);

    const togglerMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return(
        <MyHeader>
            <Title>
                <FaCode />
                MC
            </Title>

            <Hamburger $isOpen={isOpen} onClick={togglerMenu}>

                <div></div>
                <div></div>
                <div></div>

            </Hamburger>

            <Nav $isOpen={isOpen}>
                <ListSections>
                    <li><BtnContact href="#about" onClick={closeMenu}>Sobre Mim</BtnContact></li>
                    <li><BtnContact href="" onClick={closeMenu}>Habilidades</BtnContact></li>
                    <li><BtnContact href="#my-projects" onClick={closeMenu}>Projetos</BtnContact></li>
                </ListSections>
            </Nav>
        </MyHeader>
    )
};
