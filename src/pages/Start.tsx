import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { flexStyles } from "@styles/flexStyles";
import { fonts } from "@styles/fonts";
import { colors } from "@resources/colors";

const StartContainer = styled.div`
  ${flexStyles.columnCenter}
  ${flexStyles.gap("2rem")}
  height: 100vh;
  background-color: ${colors.background.back_pink};
`;

const GameTitle = styled.h1`
  ${fonts.title}
  margin: 0;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards;
  font-size: 5rem;
  color: #333;
  text-shadow: 3px 3px 0 #fff, 3px -3px 0 #fff, -3px 3px 0 #fff,
    -3px -3px 0 #fff;
  @keyframes fadeInUp {
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const MadeBy = styled.p`
  ${fonts.button}
  font-size: 1.5rem;
  color: ${colors.text.secondary};
`;

const PlayButton = styled.button`
  ${flexStyles.button}
  position: absolute;
  bottom: 4rem;
  right: 2rem;
  animation: fadeInUp 0.5s ease 0.5s forwards;
`;

const Start = () => {
  const navigate = useNavigate();

  return (
    <StartContainer>
      <GameTitle>먹고 죽자</GameTitle>
      <MadeBy>아영 만듦</MadeBy>
      <PlayButton onClick={() => navigate("/play")}>시작하기</PlayButton>
    </StartContainer>
  );
};

export default Start;
