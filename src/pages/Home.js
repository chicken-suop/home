import React from 'react';
import styled from 'styled-components';
import Paralax from '../components/Paralax';
import { theme, media } from '../helpers/styledComponentsConfig';
import { HashLink as Link } from 'react-router-hash-link';
import ratskin1 from '../assets/images/ratskin/1.svg';
import ratskin2 from '../assets/images/ratskin/2.svg';
import ratskin3 from '../assets/images/ratskin/3.svg';
import ratskin4 from '../assets/images/ratskin/4.svg';
import ratskin5 from '../assets/images/ratskin/5.svg';
import ratskin6 from '../assets/images/ratskin/6.svg';
import ratskin7 from '../assets/images/ratskin/7.svg';

export default class Detail extends React.Component {
  render() {
    return (
      <div>
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
            <Link smooth to="#home">
              <Title>Elliot<br />Schep</Title>
            </Link>
            <LinksContainer>
              <Link smooth to="work">
                <StyledLink>work</StyledLink>
              </Link>
              <Link smooth to="#about">
                <StyledLink>about</StyledLink>
              </Link>
              <StyledLink>resume</StyledLink>
            </LinksContainer>
          </Inner>
        </Section>
        <Section id="about">
          <Background>
            <LeftPaddingPart>
              Full-stack developer with interests in design & art, computer networking and sound recording/reproduction.
              <br />
              <br />
              I’m an independent, self-directed learner.
            </LeftPaddingPart>
            <RightPaddingPart>
              <SectionTitle>About me.</SectionTitle>
            </RightPaddingPart>
          </Background>
        </Section>
      </div>
    );
  }
}

const Section = styled.section`
  height: 100vh;
  position: relative;
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
`

const Background = styled.div`
  height: 100%;
  width: 100%;
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

const LeftPaddingPart = styled(LeftPart)`
  float: left;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #DFDFDF;
  font-size: 2rem;
  background-color: ${theme.colours.blue};
`;

const RightPaddingPart = styled(RightPart)`
  float: right;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  pointer-events: initial;
  font-family: 'BigJohn';
  margin: 0;
  font-weight: normal;
  color: ${theme.colours.blue};
  font-size: 5rem;
  ${media.tablet`font-size: 4rem;`}
  ${media.phone`font-size: 3rem;`}
`;

const LinksContainer = styled.div`
  ${media.phone`text-align: right;`}
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
  ${media.phone`font-size: 4rem;`}
  ${media.phone`padding: 10px 0;`}
  ${media.phone`display: block;`}
`;

const SectionTitle = styled.h1`
  color: ${theme.colours.blue};
  font-size: 8rem;
`
