import React from 'react';
import styled from 'styled-components';
import { theme, media } from '../helpers/styledComponentsConfig';
import FitText from '@kennethormandy/react-fittext'

export default class About extends React.Component {
  render() {
    return (
      <Section id="about">
        <LeftPart>
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
        </LeftPart>
        <RightPart>
          <FitText compressor={1.3}>
            <SectionTitle>Hello</SectionTitle>
          </FitText>
        </RightPart>
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

const LeftPart = styled.div`
  height: 100%;
  display: inline-block;
  width: auto;
  flex: 1;
  float: left;
  padding: 7vw;
  box-sizing: border-box;
  color: #DFDFDF;
  font-size: 2rem;
  background-color: ${theme.colours.blue};
`;

const RightPart = styled.div`
  height: 100%;
  background-color: ${theme.colours.grey};
  width: auto;
  flex: 1;
  float: right;
  padding: 7vw;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
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
