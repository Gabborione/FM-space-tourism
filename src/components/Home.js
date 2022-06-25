import React from "react";
import styled from "styled-components";

const Home = () => {
    return (
        <Container>
            <Subtitle>SO, YOU WANT TO TRAVEL TO</Subtitle>
            <Title>SPACE</Title>
            <Text>
                Let’s face it; if you want to go to space, you might as well
                genuinely go to outer space and not hover kind of on the edge of
                it. Well sit back, and relax because we’ll give you a truly out
                of this world experience!
            </Text>
            <Button>
                <h1>EXPLORE</h1>
            </Button>
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
    padding-top: 10em;
    padding-left: 2em;
    padding-right: 2em;
    gap: 2rem;
`;

const Subtitle = styled.h2`
    color: var(--cyan);
    text-align: center;
    font-size: 1.2rem;
    letter-spacing: 4.75px;
`;

const Title = styled.h1`
    text-align: center;
    font-size: var(--heading-2);
`;

const Text = styled.p`
    color: var(--cyan);
    font-size: 1.4rem;
    text-align: center;
    line-height: 1.7em;
    letter-spacing: 1.2px;
    margin-bottom: 3rem;
`;

const Button = styled.button`
    background-color: var(--light);
    border-radius: 50%;
    width: 225px;
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
`;
