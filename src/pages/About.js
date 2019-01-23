import React from 'react';
import styled from 'styled-components';
import FitText from '@kennethormandy/react-fittext';
import { theme, media } from '../helpers/styledComponentsConfig';
import CopyToClipboard from '../components/CopyToClipboard';

class About extends React.Component {
  state = { zoom: false }

  render() {
    return (
      <Section id="about">
        <ScrollingWindow>
          <div>
            <div>
              <div>
                <LeftPart>
                  <FitText compressor={1.3}>
                    <SectionTitle color={theme.colours.grey}>
                      FULL-STACK DEVELOPER
                    </SectionTitle>
                  </FitText>
                  <FitText compressor={2}>
                    <div>
                      <p>
                        I’m an independent, self-directed learner,
                        with interests in design & art, computer
                        networking and sound recording /
                        reproduction.
                      </p>
                      <Social>
                        <li>
                          <CopyToClipboard text="elliot@ratsk.in">
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                              <path d="M437.332 80H74.668C51.199 80 32 99.198 32 122.667v266.666C32
                            412.802 51.199 432 74.668 432h362.664C460.801 432 480 412.802 480
                            389.333V122.667C480 99.198 460.801 80 437.332 80zM432 170.667L256
                            288 80 170.667V128l176 117.333L432 128v42.667z"
                              />
                            </svg>
                          </CopyToClipboard>
                        </li>
                        <li>
                          <a
                            className="without"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://github.com/ratskin/"
                          >
                            <svg x="0px" y="0px" viewBox="0 0 251.6 244.2" xmlSpace="preserve">
                              <path d="M125.4,0.5C57,0.5,1.5,55.9,1.5,124.4C1.5,179.1,37,225.6,86.2,242c6.2,1.1,8.5-2.7,8.5-6
                                c0-2.9-0.1-10.7-0.2-21.1c-34.5,7.5-41.7-16.6-41.7-16.6C47.1,184,39,180.2,39,180.2c-11.3-7.7,0.9-7.5,0.9-7.5
                                c12.4,0.9,19,12.8,19,12.8c11.1,18.9,29,13.5,36.1,10.3c1.1-8,4.3-13.5,7.9-16.6c-27.5-3.1-56.4-13.8-56.4-61.2
                                c0-13.5,4.8-24.6,12.8-33.3c-1.3-3.1-5.5-15.7,1.2-32.8c0,0,10.4-3.3,34.1,12.7c9.9-2.7,20.5-4.1,31-4.2c10.5,0,21.1,1.4,31,4.2
                                c23.7-16,34-12.7,34-12.7c6.8,17.1,2.5,29.7,1.2,32.8c7.9,8.7,12.7,19.7,12.7,33.3c0,47.6-29,58.1-56.6,61.1
                                c4.4,3.8,8.4,11.4,8.4,22.9c0,16.6-0.2,29.9-0.2,34c0,3.3,2.2,7.2,8.5,6c49.2-16.4,84.7-62.8,84.7-117.6
                                C249.3,55.9,193.8,0.5,125.4,0.5z"
                              />
                            </svg>
                          </a>
                        </li>
                      </Social>
                    </div>
                  </FitText>
                </LeftPart>
              </div>
            </div>
            <div>
              <div>
                <RightPart>
                  <FitText compressor={1.3}>
                    <SectionTitle marginBottom={0}>
                      Hello
                    </SectionTitle>
                  </FitText>
                </RightPart>
              </div>
            </div>
          </div>
        </ScrollingWindow>
      </Section>
    );
  }
}

const Section = styled.section`
  height: 100vh;
  position: relative;
`;

const ScrollingWindow = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  overflow: hidden;

  > div {
    transform: translate3d(0px, 0px, 0px);
    background-color: rgb(223, 229, 236);
    opacity: 1;
    width: auto;
    height: 100%;
    display: inline-block;
    vertical-align: middle;
    position: relative;

    > div {
      display: inline-block;
      height: 100%;
      position: relative;
      top: 0;
      vertical-align: top;

      > div {
        position: relative;
        overflow: hidden;
        display: inline-block;
      }
    }
  }
`;

const LeftPart = styled.div`
  height: 100vh;
  width: 50vw;
  padding: 7vw;
  color: #DFDFDF;
  background-color: ${theme.colours.blue};
  ${media.tablet`width: 100vw`}
`;

const RightPart = styled.div`
  height: 100vh;
  width: 50vw;
  background-color: ${theme.colours.grey};
  padding: 7vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  ${media.tablet`width: 100vw`}
`;

const Social = styled.ul`
  z-index: 2;
  white-space: nowrap;

  li {
    display: inline-block;
    padding: .7rem;
    margin-right: .5rem;
    cursor: pointer;
    transform: translate3d(0,0,0) scale(1);
    transition: transform .7s .4s cubic-bezier(.19,1,.22,1);

    svg {
      width: 2rem;
      height: 2rem;
      fill: ${theme.colours.grey};
      transition: fill .3s,transform .3s cubic-bezier(.55,0,.1,1);
    }

    :hover svg {
      fill: #494949;
      transform: scale(1.2);
    }
  }
`;

const SectionTitle = styled.h1`
  color: ${props => props.color || theme.colours.blue};
  margin: 0;
  margin-bottom: ${props => (props.marginBottom == null ? 60 : props.marginBottom)}px;
  font-size: inherit;
  ${props => props.center === 'horizontal' && `
    position: absolute;
    top: 50%;
    transform: translate(0, -50%);
  `}
`;

export default About;
