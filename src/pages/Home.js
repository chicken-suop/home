import React from 'react';
import styled from 'styled-components';
import { theme, sizes, media } from '../helpers/styledComponentsConfig';
import ratskin from '../assets/images/ratskin.svg';

export default class Detail extends React.Component {
  render() {
    alert("🚧 Under developement 🚧")
    return (
      <Container>
        <Page>
          <Background>
            <img src={ratskin} alt="Ratskin graphic left half" />
            <LeftPart />
            <RightPart />
          </Background>
          <Inner>
            <Title>Elliot<br />Schep</Title>
            <LinksContainer>
              <StyledLink>work</StyledLink>
              <StyledLink>about</StyledLink>
              <StyledLink>resume</StyledLink>
            </LinksContainer>
          </Inner>
        </Page>
        <Page>
          <Background>
            <LeftPaddingPart>
              Full-stack developer with interests in design & art, computer networking and sound recording/reproduction.
              <br />
              <br />
              I’m an independent, self-directed learner.
            </LeftPaddingPart>
            <RightPaddingPart>
              <PageTitle>About me.</PageTitle>
            </RightPaddingPart>
          </Background>
        </Page>
      </Container>
    );
  }
}

const Container = styled.div``;

const Page = styled.div`
  height: 100vh;
  position: relative;
`;

const Inner = styled.div`
  position: relative;
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
  height: 100vh;
  width: 100vw;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  img {
    height: 100%;
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
`;

const LeftPart = styled.div`
  width: 50%;
  height: 100%;
  display: inline-block;
  background-color: #E1605F;
`;

const RightPart = styled(LeftPart)`
  background-color: #DFDFDF;
`;

const LeftPaddingPart = styled(LeftPart)`
  float: left;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #DFDFDF;
  font-size: 2rem;
  background-color: #020B3C;
`;

const RightPaddingPart = styled(RightPart)`
  float: right;
  padding: 30px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Title = styled.h1`
  font-family: 'Big John';
  margin: 0;
  font-weight: normal;
  color: #020B3C;
  font-size: 5rem;
  ${media.tablet`font-size: 4rem;`}
  ${media.phone`font-size: 3rem;`}
`;

const LinksContainer = styled.div`
  ${media.phone`text-align: right;`}
`;

const StyledLink = styled.h2`
  font-family: 'Finland Rounded';
  margin: 0;
  font-weight: normal;
  color: #020B3C;
  display: inline-block;
  padding: 0 20px;
  font-size: 5rem;
  ${media.tablet`font-size: 4rem;`}
  ${media.phone`font-size: 4rem;`}
  ${media.phone`padding: 10px 0;`}
  ${media.phone`display: block;`}
`;

const PageTitle = styled.h1`
  color: #020B3C;
  font-size: 8rem;
`
