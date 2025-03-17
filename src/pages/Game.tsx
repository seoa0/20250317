import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { flexStyles } from "@styles/flexStyles";
import { fonts } from "@styles/fonts";

const GameContainer = styled.div`
  ${flexStyles.columnCenter}
  ${flexStyles.gap("2rem")}
  height: 100vh;
  padding: 2rem;
`;

const RuleTitle = styled.h1`
  ${fonts.title}
  font-size: 3rem;
  color: #333;
  text-shadow: 2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff,
    -2px 2px 0 #fff;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
`;

const RuleText = styled.div`
  ${fonts.title}
  font-size: 1.5rem;
  text-align: center;
  line-height: 1;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease 0.3s forwards;

  p {
    margin: 1.5rem 0;
  }
`;

const NextButton = styled.button`
  ${flexStyles.button}
  position: absolute;
  bottom: 4rem;
  right: 2rem;
  opacity: 0;
  animation: fadeInUp 0.5s ease 0.5s forwards;
`;

const Game = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const playerCount = location.state?.playerCount || 2;

  // 콘솔에 로그 추가
  console.log("Game 페이지 렌더링", { playerCount, state: location.state });

  return (
    <GameContainer>
      <RuleTitle>게임 방법</RuleTitle>
      <RuleText>
        <p>참가자들은 1에서 {playerCount}까지 숫자 하나를 선택해야 합니다.</p>
        <p>
          가장 큰 숫자를 고른 상위 {Math.floor(playerCount / 2)}명이
          살아남습니다.
        </p>
        <p>나머지 사람들은 자신이 고른 숫자 x 반잔을 마십니다.</p>
        <p>그러나! 같은 숫자를 선택한 사람이 있다면</p>
        <p>그들끼리 한잔씩 마시게 됩니다!</p>
        <p>돌아가면서 몰래 숫자를 선택하고</p>
        <p>마지막에 모두 공개합니다!</p>
        <p>자신의 순서를 꼭 기억하세요.</p>
      </RuleText>
      <NextButton
        onClick={() => navigate("/ready", { state: { playerCount } })}
      >
        시작하기
      </NextButton>
    </GameContainer>
  );
};

export default Game;
