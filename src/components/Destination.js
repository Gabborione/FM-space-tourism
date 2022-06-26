import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Destination = () => {
    const [planets, setPlanets] = useState([]);
    const [planet, setPlanet] = useState({});

    useEffect(() => {
        const getPlanetsData = async () => {
            await fetch("data.json")
                .then((response) => response.json())
                .then((data) => {
                    let planets = data.destinations;

                    let planet = planets.map((planet) => ({
                        name: planet.name,
                        images: planet.images,
                        description: planet.description,
                        distance: planet.distance,
                        travel: planet.travel,
                    }));

                    setPlanets(planets);
                    setPlanet(planets[0]);
                    activeMenu();
                });
        };

        getPlanetsData();
    }, []);

    const activeMenu = async () => {
        let items = document.querySelectorAll(".item");
        items.forEach((item, index) => {
            if (index === 0) {
                item.style.borderBottom = "3px solid var(--light)";
            } else item.style.borderBottom = "";
        });
    };

    const handleChange = (event) => {
        planets.forEach((planet) => {
            let items = document.querySelectorAll(".item");

            items.forEach((item) => {
                if (item.innerText !== event.target.innerText)
                    item.style.borderBottom = "unset";
            });

            if (planet.name.toUpperCase() === event.target.innerText) {
                setPlanet(planet);
                event.target.style.borderBottom = "3px solid var(--light)";
            }
        });
    };

    return (
        <Container>
            <Header>
                <SubTitleContainer>
                    <SubTitle>
                        <Number>01</Number>PICK YOUR DESTINATION
                    </SubTitle>
                </SubTitleContainer>
                <ImageContainer>
                    <img
                        src={
                            planet.name !== undefined ? planet.images.webp : ""
                        }
                        alt={planet.name}
                    />
                </ImageContainer>
            </Header>
            <Body>
                <Menu>
                    {planets.length > 0
                        ? planets.map((value, index) => {
                              return (
                                  <MenuItem
                                      className="item"
                                      onClick={handleChange}
                                      key={index}
                                  >
                                      {value.name}
                                  </MenuItem>
                              );
                          })
                        : null}
                </Menu>
                <Title>{planet.name}</Title>
                <Text>{planet.description}</Text>

                <Divider />

                <InfoText>Avg. distance</InfoText>
                <InfoNumber>{planet.distance}</InfoNumber>
                <InfoText>est. travel time</InfoText>
                <InfoNumber>{planet.travel}</InfoNumber>
            </Body>
        </Container>
    );
};

const Container = styled.div`
    min-width: 100vw;
    min-height: 100vh;

    background: url("images/destination/background-destination-mobile.jpg")
        no-repeat center center fixed;
    background-size: cover;
    color: var(--light);
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    text-align: center;
    padding: 25px;
    padding-top: 6em;
    gap: 2rem;
`;

const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 1.5em;
`;

const SubTitleContainer = styled.div``;

const SubTitle = styled.h2`
    font-weight: 200;
    letter-spacing: 2.5px;
`;

const ImageContainer = styled.div`
    width: 170px;
    aspect-ratio: 1;

    img {
        width: 100%;
        aspect-ratio: 1;
        object-fit: contain;
    }
`;

const Number = styled.span`
    font-weight: 400;
    color: hsl(0, 0%, 60%);
    margin-right: 2ch;
`;

const Body = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

const Menu = styled.ul`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1.7em;
    margin-bottom: 1.5rem;
`;

const MenuItem = styled.li`
    text-transform: uppercase;
    color: var(--cyan);
    letter-spacing: 1.2px;
    cursor: pointer;
    padding-top: 1em;
    padding-bottom: 1em;
    border-bottom: 3px solid transparent;

    &:hover {
        border-bottom: 3px solid hsl(0, 0%, 40%);
    }
`;

const Title = styled.h1`
    font-size: var(--heading-3);
    margin-bottom: 1rem;
`;

const Text = styled.p`
    color: var(--cyan);
    line-height: 1.5em;
    margin-bottom: 2rem;
`;

const Divider = styled.hr`
    border: 1px solid var(--cyan-hover);
    width: 100%;

    margin-bottom: 2rem;
`;

const InfoText = styled.h3`
    text-transform: uppercase;
    color: var(--cyan);
    font-size: var(--subheading-2);
    font-weight: 200;
    letter-spacing: 2.5px;
    margin-bottom: 0.5rem;
`;

const InfoNumber = styled.h1`
    text-transform: uppercase;
    font-size: var(--heading-4);
    margin-bottom: 2rem;
`;

export default Destination;
