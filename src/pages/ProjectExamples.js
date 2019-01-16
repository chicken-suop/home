import React from 'react';
import styled from 'styled-components';
import { theme, media } from '../helpers/styledComponentsConfig';
import project01 from '../assets/images/projects/01.png';
import project02 from '../assets/images/projects/02.png';
import project03 from '../assets/images/projects/03.png';

export default class ProjectExamples extends React.Component {
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

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.color || ''};
  padding: ${props => props.padding || 'initial'};
  position: relative;
  box-sizing: border-box;
`;
