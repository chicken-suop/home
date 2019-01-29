import React from 'react';
import PropTypes from 'prop-types';
import 'konva';
import { Text, Image, Group } from 'react-konva';
import { Transition, animated } from 'react-spring/konva';

const Project = ({
  titleX,
  titleY,
  scaledSize,
  image,
  imageWidth,
  imageHeight,
  left,
  top,
  textWidth,
  textHeight,
  activeProject,
  setRef,
  stageWidth,
  stageHeight,
  opacity,
  x,
}) => (
  <animated.Group
    width={stageWidth}
    height={stageHeight}
    opacity={opacity}
    x={x}
  >
    <Image
      image={image}
      width={imageWidth}
      height={imageHeight}
      x={left}
      y={top}
    />
    <Text
      ref={setRef}
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
  </animated.Group>
);

Project.propTypes = {
  titleX: PropTypes.number.isRequired,
  titleY: PropTypes.number.isRequired,
  scaledSize: PropTypes.number.isRequired,
  image: PropTypes.shape({}),
  imageWidth: PropTypes.number.isRequired,
  imageHeight: PropTypes.number.isRequired,
  left: PropTypes.number.isRequired,
  top: PropTypes.number.isRequired,
  textWidth: PropTypes.number.isRequired,
  textHeight: PropTypes.number.isRequired,
  activeProject: PropTypes.shape({}).isRequired,
  setRef: PropTypes.func.isRequired,
  stageWidth: PropTypes.number.isRequired,
  stageHeight: PropTypes.number.isRequired,
  opacity: PropTypes.shape({}).isRequired,
  x: PropTypes.shape({}).isRequired,
};

Project.defaultProps = {
  image: {},
};

export default class ProjectGroup extends React.Component {
  hasState = true

  static propTypes = {
    titleX: PropTypes.number.isRequired,
    titleY: PropTypes.number.isRequired,
    scaledSize: PropTypes.number.isRequired,
    image: PropTypes.shape({}),
    imageWidth: PropTypes.number.isRequired,
    imageHeight: PropTypes.number.isRequired,
    left: PropTypes.number.isRequired,
    top: PropTypes.number.isRequired,
    textWidth: PropTypes.number.isRequired,
    textHeight: PropTypes.number.isRequired,
    activeProject: PropTypes.shape({}).isRequired,
    setRef: PropTypes.func.isRequired,
    stageWidth: PropTypes.number.isRequired,
    stageHeight: PropTypes.number.isRequired,
  }

  static defaultProps = {
    image: {},
  }

  render() {
    const { activeProject, imageWidth } = this.props;

    return (
      <Transition
        native
        items={activeProject}
        keys={item => item.key}
        from={{ opacity: 1, x: imageWidth * 2, textX: imageWidth * 0.8 }}
        enter={{ opacity: 1, x: 0 }}
        leave={{ opacity: 1, x: -imageWidth, textX: -imageWidth * 0.8 }}
      >
        {toggle => (toggle
          ? style => <Project {...style} {...this.props} />
          : style => <Project {...style} {...this.props} />
        )}
      </Transition>
    );
  }
}
