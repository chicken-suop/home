import React from 'react';
import styled from 'styled-components';
import 'konva';
import { Stage, Layer } from 'react-konva';
import { theme, media } from '../helpers/styledComponentsConfig';
import project01 from '../assets/images/projects/01.jpg';
import project02 from '../assets/images/projects/02.jpg';
import project03 from '../assets/images/projects/03.jpg';
import Dots from '../components/Dots';
import ProjectGroup from '../components/ProjectGroup';

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

  stageWidth = window.innerWidth;

  stageHeight = window.innerHeight;

  state = {
    activeProject: this.projects[0],
    activeProjectIndex: 0,
    image: null,
    imageWidth: window.innerWidth,
    imageHeight: window.innerHeight,
    left: 0,
    top: 0,
    scaledSize: 0,
    textWidth: 0,
    textHeight: 0,
  };

  componentDidMount() {
    const { activeProject } = this.state;
    this.loadImage(activeProject.img, this.resize);
    window.addEventListener('resize', this.resize);
    document.onkeydown = this.changeProjectWithArrowKeys;
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.resize);
  }

  loadImage = (img, callback) => {
    const image = new window.Image();
    image.src = img;
    image.onload = () => this.setState({ image }, callback);
  }

  resize = () => {
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;

    this.setState((prevState) => {
      // https://www.w3.org/TR/css3-images/#cover-constraint
      // "A cover constraint is resolved by setting the
      // concrete object size to the smallest rectangle
      // that has the object's intrinsic aspect ratio and
      // additionally has neither width nor height smaller
      // than the constraint rectangle's width and height,
      // respectively."

      if (prevState.image) {
        // Fit image to constraint, by scaling and positioning
        const isPortrait = this.stageHeight > this.stageWidth;
        const windowProp = isPortrait
          ? this.stageHeight
          : this.stageWidth;
        const aspect = prevState.image.naturalWidth / prevState.image.naturalHeight;

        const output = {
          imageWidth: windowProp / aspect,
          imageHeight: windowProp / aspect,
        };
        output.left = isPortrait
          ? (output.imageWidth - this.stageWidth) / -2
          : 0;
        output.top = this.stageHeight - output.imageHeight;
        return output;
      }
      return {};
    });

    // calc the scaled fontsize needed to fill the desired width
    const { activeProject } = this.state;
    const text = activeProject.title;
    const fontface = 'BigJohn';
    const desiredWidth = this.stageWidth * 0.5;
    const can = document.createElement('canvas');
    const cctx = can.getContext('2d');
    const testFontsize = 18;
    cctx.font = `${testFontsize}px ${fontface}`;
    const textWidth = cctx.measureText(text).width;
    this.setState({
      scaledSize: testFontsize * desiredWidth / textWidth,
    }, this.positionText);
  }

  positionText = () => this.setState({
    textWidth: this.title.getTextWidth(),
    textHeight: this.title.getTextHeight(),
  });

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
    this.loadImage(activeProject.img);
    this.positionText();
  }

  render() {
    const {
      activeProject,
      scaledSize,
      image,
      imageWidth,
      imageHeight,
      left,
      top,
      textWidth,
      textHeight,
    } = this.state;

    const titleX = (this.stageWidth - textWidth) / 2;
    const titleY = (this.stageHeight - textHeight) / 2;

    return (
      <Section id="project-examples">
        <Background color={theme.colours.red}>
          <Stage width={this.stageWidth} height={this.stageHeight}>
            <Layer>
              <ProjectGroup
                setRef={(node) => { this.title = node; }}
                titleX={titleX}
                titleY={titleY}
                scaledSize={scaledSize}
                image={image}
                imageWidth={imageWidth}
                imageHeight={imageHeight}
                left={left}
                top={top}
                textWidth={textWidth}
                textHeight={textHeight}
                activeProject={activeProject}
                stageWidth={this.stageWidth}
                stageHeight={this.stageHeight}
              />
            </Layer>
          </Stage>
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
