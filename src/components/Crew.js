import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Number } from ".//Destination.js";

const Crew = () => {
    return (
        <Container>
            <TitleContainer>
                <h2>
                    <Number>02</Number>Meet your crew
                </h2>
            </TitleContainer>
            <Body>
                <ImageContainer>
                    <img />
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
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 2rem;
`;

const TitleContainer = styled.div`
    display: inline-block;
    text-align: center;
`;

const Body = styled.div``;

const ImageContainer = styled.div``;

const TextContainer = styled.div``;

const ListContainer = styled.ul``;

const ListItem = styled.li``;

const CrewInfo = styled.div``;

const Role = styled.h1``;

const Name = styled.h1``;

const Text = styled.p``;

export default Crew;
