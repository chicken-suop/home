import React from 'react';
import styled from 'styled-components';
import Paralax from '../components/Paralax';
import { theme, media } from '../helpers/styledComponentsConfig';
import { HashLink } from 'react-router-hash-link';
import FitText from '@kennethormandy/react-fittext'
import ratskin1 from '../assets/images/ratskin/1.svg';
import ratskin2 from '../assets/images/ratskin/2.svg';
import ratskin3 from '../assets/images/ratskin/3.svg';
import ratskin4 from '../assets/images/ratskin/4.svg';
import ratskin5 from '../assets/images/ratskin/5.svg';
import ratskin6 from '../assets/images/ratskin/6.svg';
import ratskin7 from '../assets/images/ratskin/7.svg';
import project01 from '../assets/images/projects/01.png';
import project02 from '../assets/images/projects/02.png';
import project03 from '../assets/images/projects/03.png';

export default class Detail extends React.Component {
  projects = [
    {
      key: '01',
      title: 'Ratskin homepage',
      date: '2018',
      url: 'https://ratsk.in/',
      image: project01,
    },
    {
      key: '02',
      title: 'Voom',
      date: '2017',
      url: 'https://voom.space/',
      image: project02,
    },
    {
      key: '03',
      title: 'Thinkspace',
      date: '2018',
      url: 'https://www.thinkspacehq.com/',
      image: project03,
    },
  ]

  constructor() {
    super();
    this.state = {
      activeProject: this.projects[0],
    }
  }

  changeDot = (dot) => {
    this.setState({ activeProject: dot })
  }

  render() {
    const { activeProject } = this.state;

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
            <HashLink smooth to="#home">
              <Title>Elliot<br />Schep</Title>
            </HashLink>
            <LinksContainer>
              <StyledLink>
                <HashLink smooth to="#about">about</HashLink>
              </StyledLink>
              <StyledLink>
                <HashLink smooth to="#project-examples">projects</HashLink>
              </StyledLink>
              <StyledLink>
                <HashLink smooth to="#resume">resume</HashLink>
              </StyledLink>
            </LinksContainer>
          </Inner>
        </Section>
        <Section id="about">
          <LeftPaddingPart>
            <FitText compressor={1.3}>
              <SectionTitle color={theme.colours.grey}>
                FULL-STACK DEVELOPER
              </SectionTitle>
            </FitText>
            <FitText compressor={2}>
              <>
                <p>
                  I’m an independent, self-directed learner, with interests in design & art, computer networking and sound recording / reproduction.
                </p>
                <a href="mailto:elliot@ratsk.in">elliot@ratsk.in</a>
              </>
            </FitText>
          </LeftPaddingPart>
          <RightPaddingPart>
            <FitText compressor={1.3}>
              <SectionTitle>Hello</SectionTitle>
            </FitText>
          </RightPaddingPart>
        </Section>
        <ShortSection id="projects">
          <Background color={theme.colours.red}>
            <FitText compressor={1.4}>
              <SectionTitle color={theme.colours.grey} center="horizontal">Projects</SectionTitle>
            </FitText>
          </Background>
        </ShortSection>
        <Section id="project-examples">
          <Background color={theme.colours.red}>
            <Dots>
              {this.projects.map((project) => (
                <DotsElem
                  key={project.key}
                  active={activeProject.key === project.key}
                  onClick={() => this.changeDot(project)}
                >
                  <div>
                    <span />
                  </div>
                </DotsElem>
              ))}
            </Dots>
          </Background>
        </Section>
      </div>
    );
  }
}

const Dots = styled.div`
  position: absolute;
  left: 11rem;
  bottom: 10.5rem;
  z-index: 1;
  transition: opacity .5s .3s;
  ${media.phoneL`
    left: 50%;
    bottom: 10rem;
    transform: translate3d(-50%,0,0);
  `}
`;

const DotsElem = styled.div`
  position: relative;
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  padding: 1rem;
  cursor: pointer;
  transform: translate3d(0,0,0) scaleX(1);

  ${props => !props.active && `
    :hover {
      ::before {
        transform: translate3d(-50%,-50%,0) scale(.6);
      }

      > div {
        transform: scaleX(.8);

        > span {
          transform: translate3d(-50%,-50%,0) scaleY(.8);
        }
      }
    }
  `}

  ::before {
    width: .5rem;
    height: .5rem;
    background: #fff;
    transition: transform .5s cubic-bezier(.175,.885,.32,1.275),opacity .5s;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate3d(-50%,-50%,0);
    display: block;
    content: '';
    border-radius: 50%;
    ${props => props.active && `
      transform: translate3d(-50%,-50%,0) scale(0);
      opacity: 0;
    `}
  }

  > div {
    transition: transform .6s cubic-bezier(.175,.885,.32,1.275) 0s;
    transform: scaleX(0);

    ${props => props.active && `
      transform: scaleX(1);
    `}

    > span {
      position: absolute;
      top: 50%;
      left: 50%;
      display: block;
      content: '';
      width: 1.5rem;
      height: 1.5rem;
      border: 1px solid #fff;
      transform: translate3d(-50%,-50%,0) scaleY(0);
      transition: transform .5s cubic-bezier(.175,.885,.32,1.275), -webkit-transform .5s cubic-bezier(.175,.885,.32,1.275);
      border-radius: 50%;

      ${props => props.active && `
        transform: translate3d(-50%,-50%,0) scaleY(1);
      `}
    }
  }
`

const Section = styled.section`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: row;
  ${media.phoneL`flex-direction: column;`}
`;

const ShortSection = styled(Section)`
  height: 50vh
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

const LeftPaddingPart = styled(LeftPart)`
  width: auto;
  flex: 1;
  float: left;
  padding: 7vw;
  box-sizing: border-box;
  color: #DFDFDF;
  font-size: 2rem;
  background-color: ${theme.colours.blue};
`;

const RightPaddingPart = styled(RightPart)`
  width: auto;
  flex: 1;
  float: right;
  padding: 7vw;
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

const SectionTitle = styled.h1`
  color: ${props => props.color || theme.colours.blue};
  margin: 0;
  margin-bottom: 60px;
  ${props => props.center === 'horizontal' && `
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  `}
`;
