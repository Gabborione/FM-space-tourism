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

    useEffect(() => {
        let image = document.querySelector(".image");
        if (window.innerWidth >= 1024) {
            image.src = technology.images.portrait;
        } else {
            image.src = technology.images.landscape;
        }
    }, [technology]);

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
                        className="image"
                        src={
                            window.innerWidth >= 1024
                                ? technology.images.landscape
                                : technology.images.portrait
                        }
                        alt={technology.name}
                    />
                </ImageContainer>
                <TextContainerTech>
                    <MenuContainer>
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
                    </MenuContainer>
                    <CrewInfo>
                        <SubTitle>THE TERMINOLOGY...</SubTitle>
                        <NameTech>{technology.name}</NameTech>
                        <TextTech>{technology.description}</TextTech>
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
        justify-content: flex-start;
        padding-top: 9em;
        padding-bottom: 0;
        gap: 2rem;
    }

    @media (min-width: 1024px) {
        background: url("images/technology/background-technology-desktop.jpg")
            no-repeat center fixed;
        background-size: cover;
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
        gap: 1rem;
    }

    @media (min-width: 1024px) {
        margin-bottom: 10rem;
        flex-direction: row-reverse;
        justify-content: space-between;
        align-items: center;
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

    @media (min-width: 1024px) {
        width: 50vw;
        height: 60vh;
        justify-content: flex-end;

        img {
            height: 100%;
            width: auto;
        }
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
        width: 70%;
        gap: 3rem;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        text-align: left;
        padding-left: 10%;
    }
`;

const MenuContainer = styled(ListContainer)`
    @media (min-width: 768px) {
        margin-bottom: 1.5rem;
    }

    @media (min-width: 768px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 2rem;
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

    @media (min-width: 768px) {
        width: 4rem;
        font-size: 1.3rem;
    }

    @media (min-width: 1024px) {
        width: 5rem;
        font-size: 1.5rem;
    }
`;

const SubTitle = styled(Role)`
    color: var(--cyan);

    @media (min-width: 768px) {
        font-size: 1.5rem;
    }
`;

const NameTech = styled(Name)`
    @media (min-width: 1024px) {
        width: 90%;
    }
`;

const TextTech = styled(Text)`
    @media (min-width: 1024px) {
        width: 90%;
    }
`;

export default Technology;
