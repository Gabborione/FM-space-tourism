import React from "react";
import styled from "styled-components";

const Destination = () => {
    return (
        <Container>
            <Header>
                <SubTitleContainer>
                    <SubTitle>
                        <Number>01</Number>PICK YOUR DESTINATION
                    </SubTitle>
                </SubTitleContainer>
                <ImageContainer>
                    <img src="images/destination/image-moon.webp" alt="Moon" />
                </ImageContainer>
            </Header>
            <Body>
                <Menu>
                    <MenuItem>MOON</MenuItem>
                    <MenuItem>MARS</MenuItem>
                    <MenuItem>EUROPA</MenuItem>
                    <MenuItem>TITAN</MenuItem>
                </Menu>
                <Title>MOON</Title>
                <Text>
                    See our planet as you’ve never seen it before. A perfect
                    relaxing trip away to help regain perspective and come back
                    refreshed. While you’re there, take in some history by
                    visiting the Luna 2 and Apollo 11 landing sites.
                </Text>

                <Divider />

                <InfoText>Avg. distance</InfoText>
                <InfoNumber>384,400 km</InfoNumber>
                <InfoText>est. travel time</InfoText>
                <InfoNumber>3 days</InfoNumber>
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
    color: var(--cyan);
    letter-spacing: 1.2px;
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
