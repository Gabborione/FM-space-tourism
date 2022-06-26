import React from "react";
import styled from "styled-components";

const Home = () => {
    return (
        <Container>
            <TextContainer>
                <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
                <Title>SPACE</Title>
                <Text>
                    Let’s face it; if you want to go to space, you might as well
                    genuinely go to outer space and not hover kind of on the
                    edge of it. Well sit back, and relax because we’ll give you
                    a truly out of this world experience!
                </Text>
            </TextContainer>
            <ButtonContainer>
                <Button>
                    <h1>EXPLORE</h1>
                </Button>
            </ButtonContainer>
        </Container>
    );
};

export default Home;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--light);
    padding-top: clamp(4rem, 18vh, 14vh);

    gap: clamp(0.5rem, 1vh, 2vh);

    @media (min-width: 768px) {
        padding-top: clamp(8rem, 20vh, 15vh);
        max-width: 600px;
        margin: auto;
        gap: clamp(1rem, 5vh, 1.5rem);
    }

    @media (min-width: 1024px) {
        width: 80%;
        height: 80%;
        padding-top: 0;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        gap: 5em;
        max-width: none;
        padding-top: 20em;
        bottom: 0;
    }
`;

const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: var(--light);
    padding-left: 2em;
    padding-right: 2em;
    gap: clamp(0.2rem, 1vh, 1.5rem);

    @media (min-width: 768px) {
        gap: 1rem;
        max-width: 600px;
        margin: auto;
        gap: clamp(1rem, 5vh, 1.5rem);
    }

    @media (min-width: 1024px) {
        margin-left: 5rem;
        align-items: flex-start;
        justify-content: center;
    }
`;

const Subtitle = styled.h2`
    color: var(--cyan);
    text-align: center;
    font-size: clamp(1rem, 3vw, var(--heading-4));
    letter-spacing: 4.75px;

    @media (min-width: 768px) {
        font-size: clamp(1.5rem, 5vw, 2em);
    }

    @media (min-width: 1024px) {
        text-align: start;
    }
`;

const Title = styled.h1`
    text-align: center;
    font-size: clamp(6rem, 20vw, var(--heading-1));

    @media (min-width: 1024px) {
        display: inline-block;
        margin: 0;
        padding: 0;
        text-align: start;
    }
`;

const Text = styled.p`
    color: var(--cyan);
    font-size: clamp(1.1rem, 2vw, var(--heading-4));
    text-align: center;
    line-height: 1.7em;
    letter-spacing: 1.2px;
    margin-bottom: 2rem;

    @media (min-width: 768px) {
        line-height: clamp(2em, 5vh, 3em);

        font-size: clamp(1.5rem, 5vw, 1.5em);
    }

    @media (min-width: 1024px) {
        line-height: 1.7em;
        text-align: start;
        font-size: 1.3em;
        max-width: 500px;
    }
`;

const ButtonContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    @media (min-width: 1024px) {
        flex-basis: 50%;
    }
`;

const Button = styled.button`
    background-color: var(--light);
    border-radius: 50%;
    width: 220px;
    aspect-ratio: 1;
    border: none;
    cursor: pointer;
    box-shadow: unset;
    transition: box-shadow 200ms ease-out;

    h1 {
        color: var(--dark);
        text-align: center;
        font-size: var(--heading-4);
        letter-spacing: 1.3px;
        font-weight: 400;
    }

    &:hover {
        box-shadow: 0px 0px 1px 50px var(--cyan-hover);
    }

    @media (min-width: 768px) {
        width: 250px;
    }
`;
