import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = (event) => {
        setIsOpen((isOpen) => !isOpen);
    };

    const activePage = (event) => {
        const pages = document.querySelectorAll(".nav-item");

        pages.forEach((page) => {
            page.style.borderRight = "none";
        });

        event.target.style.borderRight = "4px solid var(--light)";
    };

    return (
        <Nav>
            <Logo to="/"></Logo>
            <MenuIcon open={isOpen} onClick={toggleMenu}></MenuIcon>
            <List open={isOpen}>
                <ListItem to="/" className="nav-item" onClick={activePage}>
                    <Number>00</Number>HOME
                </ListItem>
                <ListItem
                    to="/destination"
                    className="nav-item"
                    onClick={activePage}
                >
                    <Number>01</Number>DESTINATION
                </ListItem>
                <ListItem to="/crew" className="nav-item" onClick={activePage}>
                    <Number>02</Number>CREW
                </ListItem>
                <ListItem
                    to="/technology"
                    className="nav-item"
                    onClick={activePage}
                >
                    <Number>03</Number>TECHNOLOGY
                </ListItem>
            </List>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    height: 100px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem;
    z-index: 10;
`;

const Logo = styled(Link)`
    position: relative;
    width: 50px;
    aspect-ratio: 1;
    background: url("images/shared/logo.svg") no-repeat;
    background-position: center;
    background-size: contain;

    @media (min-width: 1024px) {
        margin-top: 8rem;
    }
`;

const MenuIcon = styled.button`
    position: relative;
    width: 35px;
    aspect-ratio: 1;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    background-image: ${(props) =>
        props.open
            ? "url(images/shared/icon-close.svg)"
            : "url(images/shared/icon-hamburger.svg)"};
    background-repeat: no-repeat;
    background-position: center;
    background-size: contain;
    cursor: pointer;
    transition: background-image 0.2s ease-in-out;
    border: none;

    @media (min-width: 768px) {
        display: none;
    }
`;

const List = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    height: 100vh;
    inset: 0 0 0 33%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    gap: 3rem;
    background-color: hsl(0 0% 70% / 0.1);
    backdrop-filter: blur(40px);
    padding-top: 30%;
    padding-left: 3rem;
    z-index: 90;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    transition: transform 0.3s ease-in-out;

    @media (min-width: 768px) {
        gap: 3rem;
        padding-top: 0;
        padding-left: 0;
        top: 0;
        right: 0;
        height: 100px;
        flex-direction: row;
        transform: translateX(0%);
        align-items: center;
        justify-content: center;
        inset: 0 0 0 30%;
        z-index: 10;
        backdrop-filter: blur(30px);
    }

    @media (min-width: 1024px) {
        margin-top: 4rem;
        padding-right: 10rem;
        gap: 4rem;
        inset: 0 0 0 45%;
    }
`;

const ListItem = styled(Link)`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    height: 2rem;
    color: white;
    letter-spacing: 2.7px;
    font-size: var(--navtext);
    cursor: pointer;

    &:hover {
        border-right: 4px solid hsl(0, 0%, 40%);
    }

    @media (min-width: 768px) {
        width: auto;
        height: 100%;

        &:hover {
            border-right: none;
            border-bottom: 4px solid hsl(0, 0%, 40%);
        }
    }
`;

const Number = styled.span`
    margin-right: 0.5rem;

    @media (min-width: 768px) {
        display: none;
    }

    @media (min-width: 1024px) {
        display: block;
        margin-right: 0.8rem;
    }
`;

export default Header;
