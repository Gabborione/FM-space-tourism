import { findByLabelText } from "@testing-library/react";
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Number, SubTitleContainer, SubTitle } from ".//Destination.js";

const defaultCrew = {
    name: "Douglas Hurley",
    images: {
        png: "images/crew/image-douglas-hurley.png",
        webp: "images/crew/image-douglas-hurley.webp",
    },
    role: "Commander",
    bio: "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
};

const Crew = () => {
    const [crews, setCrews] = useState([]);
    const [crew, setCrew] = useState(defaultCrew);

    useEffect(() => {
        const getCrewsData = async () => {
            await fetch("data.json")
                .then((response) => response.json())
                .then((data) => {
                    let crews = data.crew;

                    let crew = crews.map((crew) => ({
                        name: crew.name,
                        images: crew.images,
                        role: crew.role,
                        bio: crew.bio,
                    }));

                    setCrews(crews);
                    setCrew(crew[0]);
                    activeMenu();
                });
        };

        getCrewsData();
    }, []);

    const activeMenu = async () => {
        let items = document.querySelectorAll(".item");
        items.forEach((item, index) => {
            if (index == 0) {
                item.style.backgroundColor = "var(--light)";
            } else item.style.backgroundColor = "hsl(0, 0%, 40%)";
        });
    };

    const handleChange = (event) => {
        crews.forEach((crew, index) => {
            let items = document.querySelectorAll(".item");

            items.forEach((item) => {
                if (item.id !== event.target.id)
                    item.style.backgroundColor = "hsl(0, 0%, 40%)";
            });
            if (index == event.target.id) {
                setCrew(crew);
                event.target.style.backgroundColor = "var(--light)";
            }
        });
    };

    return (
        <Container>
            <SubTitleContainerCrew>
                <SubTitle>
                    <Number>02</Number>MEET YOUR CREW
                </SubTitle>
            </SubTitleContainerCrew>
            <Body>
                <ImageContainer>
                    <img src={crew.images.webp} />
                    <hr />
                </ImageContainer>
                <TextContainer>
                    <ListContainer>
                        {crews.length > 0
                            ? crews.map((value, index) => {
                                  return (
                                      <ListItem
                                          className="item"
                                          onClick={handleChange}
                                          key={index}
                                          id={index}
                                      ></ListItem>
                                  );
                              })
                            : null}
                    </ListContainer>
                    <CrewInfo>
                        <Role>{crew.role}</Role>
                        <Name>{crew.name}</Name>
                        <Text>{crew.bio}</Text>
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

    @media (min-width: 768px) {
        background: url("images/crew/background-crew-tablet.jpg") no-repeat
            center center fixed;
        background-size: cover;
        justify-content: space-between;
        padding-top: 9em;
        padding-bottom: 0;
    }

    @media (min-width: 1024px) {
        background: url("images/crew/background-crew-desktop.jpg") no-repeat
            center center fixed;
        background-size: cover;
        display: flex;
        padding-top: 8em;
        flex-direction: row;
        justify-content: center;
        align-items: center;
    }
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

    @media (min-width: 768px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: flex-end;
        gap: 3rem;
    }

    @media (min-width: 1024px) {
    }
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

    @media (min-width: 768px) {
        height: 50vh;
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

    @media (min-width: 768px) {
        flex-direction: column-reverse;
        width: 70%;
        margin: auto;
    }
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

    @media (min-width: 768px) {
        font-size: var(--subheading-1);
    }
`;

const Name = styled.h1`
    font-size: var(--subheading-1);
    margin-bottom: 0.8rem;

    @media (min-width: 768px) {
        font-size: 2.5rem;
    }
`;

const Text = styled.p`
    color: var(--cyan);
    line-height: 1.5rem;

    @media (min-width: 768px) {
        line-height: 2rem;
        letter-spacing: 0.1rem;
        font-size: 1.5rem;
    }
`;

export default Crew;
