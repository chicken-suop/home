import React from 'react';
import styled from 'styled-components';
import { theme, media } from '../helpers/styledComponentsConfig';
import FitText from '@kennethormandy/react-fittext'

export default class Projects extends React.Component {
  render() {
    return (
      <ShortSection id="projects">
        <Background color={theme.colours.red}>
          <FitText compressor={1.4}>
            <SectionTitle color={theme.colours.grey} center="horizontal">Projects</SectionTitle>
          </FitText>
        </Background>
      </ShortSection>
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

const ShortSection = styled(Section)`
  height: 50vh
`;

const Background = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.color || ''};
  padding: ${props => props.padding || 'initial'};
  position: relative;
  box-sizing: border-box;
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
