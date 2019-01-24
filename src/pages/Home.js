import React from 'react';
import styled from 'styled-components';
import { HashLink as Link } from 'react-router-hash-link';
import Paralax from '../components/Paralax';
import { theme, media } from '../helpers/styledComponentsConfig';
import ratskin1 from '../assets/images/ratskin/1.svg';
import ratskin2 from '../assets/images/ratskin/2.svg';
import ratskin3 from '../assets/images/ratskin/3.svg';
import ratskin4 from '../assets/images/ratskin/4.svg';
import ratskin5 from '../assets/images/ratskin/5.svg';
import ratskin6 from '../assets/images/ratskin/6.svg';
import ratskin7 from '../assets/images/ratskin/7.svg';

const Home = () => (
  <Section id="home">
    <Background>
      <Paralax
        style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
        }}
      >
        <img alt="Part 1" src={ratskin1} />
        <img alt="Part 2" src={ratskin2} />
        <img alt="Part 3" src={ratskin3} />
        <img alt="Part 4" src={ratskin4} />
        <img alt="Part 5" src={ratskin5} />
        <img alt="Part 6" src={ratskin6} />
        <img alt="Part 7" src={ratskin7} />
      </Paralax>
      <LeftPart />
      <RightPart />
    </Background>
    <Inner>
      <Link className="without" to="#home">
        <Title>
          Elliot
          <br />
          Schep
        </Title>
      </Link>
      <LinksContainer>
        <StyledLink>
          <Link to="#about">about</Link>
        </StyledLink>
        <StyledLink>
          <Link to="#project-examples">projects</Link>
        </StyledLink>
        <StyledLink>
          <Link to="#resume">resume</Link>
        </StyledLink>
      </LinksContainer>
    </Inner>
  </Section>
);

const Section = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  ${media.phoneL`flex-direction: column;`}
`;

const Inner = styled.div`
  pointer-events: none;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 50px 0 150px;
  width: 83.33333%;
  margin: 0 auto;
  min-height: calc(100vh - 200px);
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.color || ''};
  padding: ${props => props.padding || 'initial'};
  position: relative;
  box-sizing: border-box;
`;

const LeftPart = styled.div`
  width: 50%;
  height: 100%;
  display: inline-block;
  background-color: ${theme.colours.red};
`;

const RightPart = styled(LeftPart)`
  background-color: ${theme.colours.grey};
`;

const Title = styled.h1`
  pointer-events: initial;
  font-family: 'BigJohn';
  margin: 0;
  font-weight: normal;
  color: ${theme.colours.blue};
  font-size: 5rem;
  ${media.tablet`font-size: 4rem;`}
  ${media.phoneL`font-size: 3rem;`}
`;

const LinksContainer = styled.div`
  ${media.phoneL`text-align: right;`}
`;

const StyledLink = styled.h2`
  pointer-events: initial;
  font-family: 'FinlandRounded';
  margin: 0;
  font-weight: normal;
  color: ${theme.colours.blue};
  display: inline-block;
  padding: 0 20px;
  font-size: 5rem;
  ${media.tablet`font-size: 4rem;`}
  ${media.phoneL`
    font-size: 4rem;
    padding: 10px 0;
    display: block;
  `}
`;

export default Home;
