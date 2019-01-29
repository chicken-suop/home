import React from 'react';
import styled from 'styled-components';
import { theme, media } from '../helpers/styledComponentsConfig';
import project01 from '../assets/images/projects/01.jpg';
import project02 from '../assets/images/projects/02.jpg';
import project03 from '../assets/images/projects/03.jpg';
import Dots from '../components/Dots';

export default class ProjectExamples extends React.Component {
  projects = [
    {
      key: '01',
      title: 'My homepage',
      start: '2018',
      end: 'PRESENT',
      url: 'https://ratsk.in/',
      img: project01,
    },
    {
      key: '02',
      title: 'Voom',
      start: '2017',
      end: '2018',
      url: 'https://voom.space/',
      img: project02,
    },
    {
      key: '03',
      title: 'Thinkspace',
      start: '2018',
      end: '2018',
      url: 'https://www.thinkspacehq.com/',
      img: project03,
    },
  ]

  state = {
    activeProject: this.projects[0],
    activeProjectIndex: 0,
  };

  componentDidMount() {
    document.onkeydown = this.changeProjectWithArrowKeys;
  }

  changeProjectWithArrowKeys = (e) => {
    const event = e || window.event;
    const { activeProjectIndex } = this.state;

    if (`${event.keyCode}` === '37') {
      // left arrow
      this.changeProject(
        this.projects[activeProjectIndex === 0
          ? this.projects.length - 1
          : activeProjectIndex - 1
        ],
      );
    } else if (`${event.keyCode}` === '39') {
      // right arrow
      this.changeProject(
        this.projects[activeProjectIndex === this.projects.length - 1
          ? 0
          : activeProjectIndex + 1
        ],
      );
    }
  };

  changeProject = (activeProject) => {
    this.setState({
      activeProject,
      activeProjectIndex: this.projects.findIndex(project => (
        project.key === activeProject.key
      )),
    });
  }

  render() {
    const { activeProject } = this.state;

    return (
      <Section id="project-examples">
        <Background color={theme.colours.red}>
          <Dots
            dots={this.projects}
            isActive={dot => activeProject.key === dot.key}
            changeProject={this.changeProject}
          />
        </Background>
      </Section>
    );
  }
}

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
  overflow: hidden;
  background-color: ${props => props.color || ''};
  padding: ${props => props.padding || 'initial'};
  position: relative;
`;
