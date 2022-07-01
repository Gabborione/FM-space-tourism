import React, { useState, useEffect } from "react";
import { Number, SubTitleContainer } from ".//Destination.js";
import {
    Container,
    Body,
    ListContainer,
    ListItem,
    TextContainer,
    CrewInfo,
    Role,
    Name,
    Text,
} from ".//Crew.js";
import styled from "styled-components";

const defaultTechnology = {
    name: "Launch vehicle",
    images: {
        portrait: "images/technology/image-launch-vehicle-portrait.jpg",
        landscape: "images/technology/image-launch-vehicle-landscape.jpg",
    },
    description:
        "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
};

const Technology = ({ technologies }) => {
    const [technology, setTechnology] = useState(defaultTechnology);

    useEffect(() => {
        activeMenu();
    }, []);

    const activeMenu = async () => {
        let items = document.querySelectorAll(".item");
        items.forEach((item, index) => {
            if (index == 0) {
                item.style.backgroundColor = "var(--light)";
                item.style.color = "var(--dark)";
            } else {
                item.style.backgroundColor = "";
                item.style.color = "var(--light)";
            }
        });
    };

    const handleChange = (event) => {
        technologies.forEach((technology, index) => {
            let items = document.querySelectorAll(".item");

            items.forEach((item) => {
                if (item.id !== event.target.id) {
                    item.style.backgroundColor = "";
                    item.style.color = "var(--light)";
                }
            });
            if (index == event.target.id) {
                setTechnology(technology);
                event.target.style.backgroundColor = "var(--light)";
                event.target.style.color = "var(--dark)";
            }
        });
    };

    return (
        <ContainerTech>
            <SubTitleContainer>
                <SubTitle>
                    <Number>03</Number>SPACE LAUNCH 101
                </SubTitle>
            </SubTitleContainer>
            <BodyTech>
                <ImageContainer>
                    <img
                        src={technology.images.landscape}
                        alt={technology.name}
                    />
                </ImageContainer>
                <TextContainerTech>
                    <ListContainer>
                        {technologies !== undefined && technologies.length > 0
                            ? technologies.map((value, index) => {
                                  return (
                                      <MenuItem
                                          className="item"
                                          key={index}
                                          id={index}
                                          onClick={handleChange}
                                      >
                                          {index + 1}
                                      </MenuItem>
                                  );
                              })
                            : null}
                    </ListContainer>
                    <CrewInfo>
                        <SubTitle>THE TERMINOLOGY</SubTitle>
                        <Name>{technology.name}</Name>
                        <Text>{technology.description}</Text>
                    </CrewInfo>
                </TextContainerTech>
            </BodyTech>
        </ContainerTech>
    );
};

const ContainerTech = styled(Container)`
    min-width: 100vw;
    min-height: 100vh;
    max-width: 100vw;
    max-height: 100vh;
    background: url("images/technology/background-technology-mobile.jpg")
        no-repeat center fixed;
    background-size: cover;

    @media (min-width: 768px) {
        background: url("images/technology/background-technology-tablet.jpg")
            no-repeat center fixed;
        justify-content: space-between;
        padding-top: 9em;
        padding-bottom: 0;
    }

    @media (min-width: 1024px) {
        background: url("images/technology/background-technology-desktop.jpg")
            no-repeat center fixed;
        display: flex;
        padding-top: 15%;
        justify-content: space-between;
        align-items: center;
    }
`;

const BodyTech = styled(Body)`
    min-width: 100vw;
    min-height: 100%;
    max-width: 100vw;
    max-height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    @media (min-width: 768px) {
        gap: 3rem;
    }

    @media (min-width: 1024px) {
        height: 100%;
        flex-direction: row-reverse;
        justify-content: center;
        align-items: flex-end;
    }
`;

const ImageContainer = styled.div`
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0;

    img {
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;

export const TextContainerTech = styled(TextContainer)`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;

    @media (min-width: 768px) {
        width: 70%;
        margin: 0;
    }

    @media (min-width: 1024px) {
        width: 50%;
        gap: 3rem;
        align-items: flex-start;
        padding-left: 10%;
    }
`;

const MenuItem = styled(ListItem)`
    width: 3rem;
    aspect-ratio: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: transparent;
    border: 1px solid hsl(0, 0%, 50%);
    font-weight: 400;
`;

const SubTitle = styled(Role)`
    color: var(--cyan);
`;

export default Technology;
