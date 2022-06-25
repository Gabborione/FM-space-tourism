import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Header = () => {
    return (
        <Nav>
            <Logo to="/"></Logo>
            <MenuIcon>
                <img src="images/shered/icon-hamburger.svg" alt="menu-icon" />
            </MenuIcon>
            <List>
                <ListItem>
                    <Number>00</Number>HOME
                </ListItem>
                <ListItem>
                    <Number>01</Number>DESTINATION
                </ListItem>
                <ListItem>
                    <Number>02</Number>CREW
                </ListItem>
                <ListItem>
                    <Number>03</Number>TECHNOLOGY
                </ListItem>
            </List>
        </Nav>
    );
};

const Nav = styled.nav`
    position: fixed;
    top: 0;
    height: 80px;
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
`;

const MenuIcon = styled.div`
    position: relative;
    width: 50px;
    aspect-ratio: 1;
    z-index: 999;
    display: flex;
    justify-content: center;
    align-items: center;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

const List = styled.ul`
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
    background: hsl(0, 0%, 100% / 0.1);
    backdrop-filter: blur(40px);
    margin-top: 30%;
    padding-left: 3rem;
    z-index: 1;
`;

const ListItem = styled.li`
    width: 100%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    height: 2rem;
    color: white;
    letter-spacing: 2.7px;
    font-size: var(--navtext);
    border-right: 4px solid var(--light);
`;

const Number = styled.span`
    margin-right: 0.5rem;
`;

export default Header;
