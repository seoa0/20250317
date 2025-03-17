import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { flexStyles } from "@styles/flexStyles";
import { fonts } from "@styles/fonts";
import { colors } from "@resources/colors";

const PlayContainer = styled.div`
  ${flexStyles.columnCenter}
  ${flexStyles.gap("2rem")}
  height: 100vh;
  background-color: ${colors.background.back_pink};
  position: relative;
`;

const GuideText = styled.h1`
  ${fonts.title}
  font-size: 3rem;
  color: #333;
  text-shadow: 2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff,
    -2px 2px 0 #fff;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
`;

const PlayerCountContainer = styled.div`
  ${flexStyles.center}
  ${flexStyles.gap("1rem")}
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease 0.3s forwards;
`;

const CountButton = styled.button`
  ${fonts.button}
  width: 3rem;
  height: 3rem;
  border: none;
  border-radius: 50%;
  background-color: ${colors.button.primary};
  color: white;
  font-size: 2rem;
  transition: all 0.3s ease;

  &:hover {
    background-color: ${colors.button.hover};
    transform: scale(1.1);
  }

  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
    transform: none;
  }
`;

const PlayerCount = styled.span`
  ${fonts.button}
  font-size: 2.5rem;
  color: #333;
  min-width: 3rem;
  text-align: center;
`;

const NextButton = styled.button`
  ${flexStyles.button}
  position: absolute;
  bottom: 4rem;
  right: 2rem;
  opacity: 0;
  animation: fadeInUp 0.5s ease 0.5s forwards;
`;

const Play = () => {
  const navigate = useNavigate();
  const [playerCount, setPlayerCount] = useState(2);

  const handleDecrease = () => {
    if (playerCount > 2) {
      setPlayerCount((prev) => prev - 1);
    }
  };

  const handleIncrease = () => {
    if (playerCount < 10) {
      setPlayerCount((prev) => prev + 1);
    }
  };

  const handleNext = () => {
    console.log("다음 페이지로 이동", playerCount);
    navigate("/game", {
      state: { playerCount },
    });
  };

  return (
    <PlayContainer>
      <GuideText>인원 수</GuideText>
      <PlayerCountContainer>
        <CountButton onClick={handleDecrease} disabled={playerCount <= 2}>
          -
        </CountButton>
        <PlayerCount>{playerCount}명</PlayerCount>
        <CountButton onClick={handleIncrease} disabled={playerCount >= 10}>
          +
        </CountButton>
      </PlayerCountContainer>
      <NextButton onClick={handleNext}>선택 완료</NextButton>
    </PlayContainer>
  );
};

export default Play;
