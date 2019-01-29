import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { media } from '../helpers/styledComponentsConfig';

const Dots = ({
  dots,
  isActive,
  changeProject,
  className,
}) => (
  <div className={className}>
    {dots.map(dot => (
      <Dot
        key={dot.key}
        active={isActive(dot)}
        onClick={() => changeProject(dot)}
      >
        <div>
          <span />
        </div>
      </Dot>
    ))}
  </div>
);

Dots.propTypes = {
  dots: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  isActive: PropTypes.func.isRequired,
  changeProject: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

const StyledDots = styled(Dots)`
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

export default StyledDots;
