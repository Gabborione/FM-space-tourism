import { findByLabelText } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Number, SubTitleContainer, SubTitle } from ".//Destination.js";

const Crew = () => {
    const [crews, setCrews] = useState({});

    return (
        <Container>
            <SubTitleContainerCrew>
                <SubTitle>
                    <Number>02</Number>MEET YOUR CREW
                </SubTitle>
            </SubTitleContainerCrew>
            <Body>
                <ImageContainer>
                    <img src="images\crew\image-douglas-hurley.webp" />
                    <hr />
                </ImageContainer>
                <TextContainer>
                    <ListContainer>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                        <ListItem></ListItem>
                    </ListContainer>
                    <CrewInfo>
                        <Role>COMMANDER</Role>
                        <Name>Nome del tizio</Name>
                        <Text>
                            Douglas bla bla bla adòjsbdo adkjvbadkv adkjvba
                            Douglas bla bla bla adòjsbdo adkjvbadkv adkjvba
                            Douglas bla bla bla adòjsbdo adkjvbadkv adkjvba
                            Douglas bla bla bla adòjsbdo adkjvbadkv adkjvba
                        </Text>
                    </CrewInfo>
                </TextContainer>
            </Body>
        </Container>
    );
};

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100%;
    background: url("images/crew/background-crew-mobile.jpg") no-repeat center
        fixed;
    background-size: cover;
    color: var(--light);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
    padding: 25px;
    padding-top: 6em;
`;

const Body = styled.div`
    min-width: 100vw;
    min-height: 100%;
    max-width: 100vw;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 0 25px;
`;

const SubTitleContainerCrew = styled(SubTitleContainer)``;

const ImageContainer = styled.div`
    width: 100%;
    height: 32vh;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }

    hr {
        right: 0;
        margin: auto;
        width: 80%;
        border: 1px solid hsl(0, 0%, 30%);
    }
`;

const TextContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
`;

const ListContainer = styled.ul`
    display: flex;
    justify-content: center;
    margin-top: 2rem;
    gap: 1.5rem;
`;

const ListItem = styled.li`
    width: 0.7rem;
    aspect-ratio: 1;
    border-radius: 50%;
    background-color: hsl(0, 0%, 40%);
    cursor: pointer;
`;

const CrewInfo = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    margin-top: 1rem;
    gap: 0.8rem;
`;

const Role = styled.h1`
    font-size: var(--subheading-2);
    letter-spacing: 0.2rem;
    color: hsl(0, 0%, 60%);
`;

const Name = styled.h1`
    font-size: var(--subheading-1);
    margin-bottom: 0.8rem;
`;

const Text = styled.p`
    color: var(--cyan);
    line-height: 1.5rem;
`;

export default Crew;
