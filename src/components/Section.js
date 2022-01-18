import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

function Section({
  title,
  description,
  backgroundImg,
  leftBtnText,
  rightBtnText,
}) {
  return (
    <Wrap bgImage={backgroundImg}>
      <ItemText>
        <Fade bottom>
          <h1>{title}</h1>
        </Fade>
        <Fade bottom>
          <p>{description}</p>
        </Fade>
      </ItemText>
      <Footer>
        <ButtonGroup>
          <Fade left>
            <LeftButton>{leftBtnText}</LeftButton>
          </Fade>
          <Fade right>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </Fade>
          {/* if RightButton Exist then create it */}
        </ButtonGroup>
        <Fade up>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Footer>
    </Wrap>
  );
}

export default Section;

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  flex-direction: column;
  justify-content: space-between; // vertical
  align-items: center; // horizontal
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
`;

const ItemText = styled.div`
  padding-top: 15vh;
  text-align: center;
`;

const Footer = styled.div``;

const ButtonGroup = styled.div`
  display: flex;
  @media (max-width: 768px) {
    flex-direction: column;
  }
  margin-bottom: 30px;
  align-items: center;
`;

const LeftButton = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  margin: 20px;
  cursor: pointer;
`;

const RightButton = styled(LeftButton)`
  background-color: white;
  color: rgba(23, 26, 32, 0.8);
`;

const DownArrow = styled.img`
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
