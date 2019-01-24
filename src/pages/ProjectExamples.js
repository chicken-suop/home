import React from 'react';
import styled from 'styled-components';
import 'konva';
import {
  Stage, Layer, Text, Image,
} from 'react-konva';
import { theme, media } from '../helpers/styledComponentsConfig';
import project01 from '../assets/images/projects/01.jpg';
import project02 from '../assets/images/projects/02.jpg';
import project03 from '../assets/images/projects/03.jpg';

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

  constructor() {
    super();
    this.stageWidth = window.innerWidth;
    this.stageHeight = window.innerHeight;
    this.constraint = React.createRef();
    this.state = {
      activeProject: this.projects[0],
      image: null,
      imageWidth: window.innerWidth,
      imageHeight: window.innerHeight,
      left: 0,
      top: 0,
      scaledSize: 0,
      textWidth: 0,
      textHeight: 0,
    };
  }

  componentDidMount() {
    const { activeProject } = this.state;
    this.loadImage(activeProject.img, this.resize);
    window.addEventListener('resize', this.resize);
    document.onkeydown = this.listenKeypress;
  }

  componentWillUnmount() {
    window.removeEventListener('resize');
  }

  listenKeypress = (e) => {
    const event = e || window.event;
    const { activeProject } = this.state;
    const activeProjectIndex = this.projects.findIndex(project => (
      project.key === activeProject.key
    ));

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

  loadImage = (img, callback) => {
    const image = new window.Image();
    image.src = img;
    image.onload = () => {
      this.setState({ image }, callback);
    };
  }

  resize = () => {
    this.stageWidth = this.constraint.current.clientWidth;
    this.stageHeight = this.constraint.current.clientHeight;
    this.imageCoverConstraint();
    this.scaledFontsize();
  }

  imageCoverConstraint = () => this.setState((prevState) => {
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

  scaledFontsize = () => {
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
    }, this.repositionText);
  }

  repositionText = () => this.setState({
    textWidth: this.title.getTextWidth(),
    textHeight: this.title.getTextHeight(),
  });

  changeProject = (project) => {
    this.setState({ activeProject: project });
    this.loadImage(project.img);
    this.repositionText();
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

    // console.log(textHeight);
    const titleX = (this.stageWidth - textWidth) / 2;
    const titleY = (this.stageHeight - textHeight) / 2;

    return (
      <Section id="project-examples">
        <Background color={theme.colours.red}>
          <div ref={this.constraint}>
            <Stage width={this.stageWidth} height={this.stageHeight}>
              <Layer>
                <Image
                  image={image}
                  width={imageWidth}
                  height={imageHeight}
                  x={left}
                  y={top}
                />
                <Text
                  ref={(node) => { this.title = node; }}
                  x={titleX}
                  y={titleY}
                  text={activeProject.title}
                  fontSize={scaledSize}
                  fontFamily="BigJohn"
                  fill="#fafafa"
                  align="center"
                  verticalAlign="middle"
                />
                <Text
                  x={titleX - (textWidth * 0.15)}
                  y={titleY - (textHeight * 0.15)}
                  text={activeProject.key}
                  fontSize={scaledSize * 0.15}
                  fontFamily="BigJohn"
                  fill="#fafafa"
                />
                <Text
                  x={titleX + textWidth}
                  y={titleY + (textHeight * 0.85)}
                  text={`${activeProject.start}-${activeProject.end}`}
                  fontSize={scaledSize * 0.15}
                  fontFamily="BigJohn"
                  fill="#fafafa"
                />
              </Layer>
            </Stage>
          </div>
          <Dots>
            {this.projects.map(project => (
              <Dot
                key={project.key}
                active={activeProject.key === project.key}
                onClick={() => this.changeProject(project)}
              >
                <div>
                  <span />
                </div>
              </Dot>
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

const Dot = styled.div`
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
`;

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

  > div:first-child {
    ${'' /* height: 90%;
    width: 90%;
    padding: 5%; */}
    ${media.phoneL`
      height: 100%;
      width: 100%;
      padding: 0;
    `}
  }
`;
