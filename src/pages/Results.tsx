import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { flexStyles } from "@styles/flexStyles";
import { fonts } from "@styles/fonts";

const ResultsContainer = styled.div`
  ${flexStyles.columnCenter}
  ${flexStyles.gap("2rem")}
  height: 100vh;
  padding: 2rem;
`;

const ResultTitle = styled.h1`
  ${fonts.title}
  font-size: 3rem;
  color: #333;
  text-shadow: 2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff,
    -2px 2px 0 #fff;
  margin-bottom: 2rem;
`;

const ResultBoard = styled.div`
  width: 100%;
  max-width: 600px;
  background: rgba(255, 255, 255, 0.9);
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const NumberRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  border-bottom: 1px solid #eee;
  font-size: 1.5rem;
`;

const DrinkingResult = styled.div`
  margin-top: 2rem;
  font-size: 1.8rem;
  text-align: center;
  line-height: 1.6;
`;

const PlayerResult = styled.span<{ isDrinking: boolean }>`
  color: ${({ isDrinking }) => (isDrinking ? "#FF6B6B" : "inherit")};
  font-weight: ${({ isDrinking }) => (isDrinking ? "bold" : "normal")};
`;

const RestartButton = styled.button`
  ${flexStyles.button}
  margin-top: 2rem;
  font-size: 2rem;
  padding: 1rem 3rem;
`;

interface PlayerChoice {
  playerNumber: number;
  selectedNumber: number;
}

const Results = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { playerCount, choices } = location.state as {
    playerCount: number;
    choices: PlayerChoice[];
  };

  // 숫자별로 선택한 플레이어 그룹화
  const numberGroups = choices.reduce((acc, choice) => {
    acc[choice.selectedNumber] = acc[choice.selectedNumber] || [];
    acc[choice.selectedNumber].push(choice.playerNumber);
    return acc;
  }, {} as Record<number, number[]>);

  // 숫자 내림차순 정렬
  const sortedNumbers = Object.keys(numberGroups)
    .map(Number)
    .sort((a, b) => b - a);

  // 중복 선택된 숫자들 찾기
  const duplicateNumbers = sortedNumbers.filter(
    (number) => numberGroups[number].length > 1
  );

  // 중복 선택한 플레이어들 찾기
  const duplicatePlayers = new Set(
    duplicateNumbers.flatMap((number) => numberGroups[number])
  );

  // 각 플레이어의 결과 계산 함수
  const getPlayerResult = (playerNumber: number) => {
    // 중복 선택이 있는 경우
    if (duplicateNumbers.length > 0) {
      // 중복 선택한 플레이어는 한잔
      if (duplicatePlayers.has(playerNumber)) {
        return "한잔!";
      }
      // 나머지는 모두 생존
      return "생존!";
    }

    // 중복 선택이 없는 경우 기존 로직 적용
    const playerChoice = choices.find((c) => c.playerNumber === playerNumber);
    if (!playerChoice) {
      return "선택 안함";
    }

    const playerRank = sortedNumbers.findIndex(
      (num) => num === playerChoice.selectedNumber
    );

    if (playerRank < Math.floor(playerCount / 2)) {
      return "생존!";
    }

    return `${playerChoice.selectedNumber / 2}잔`;
  };

  return (
    <ResultsContainer>
      <ResultTitle>게임 결과</ResultTitle>
      <ResultBoard>
        {sortedNumbers.map((number) => (
          <NumberRow key={number}>
            <span>{number}:</span>
            <span>
              {numberGroups[number].map((player) => `${player}번`).join(", ")}{" "}
              플레이어
              {numberGroups[number].length > 1 ? "" : ""}
            </span>
          </NumberRow>
        ))}
        <DrinkingResult>
          {Array.from({ length: playerCount }, (_, i) => i + 1).map(
            (player) => {
              const result = getPlayerResult(player);
              const isDrinking = result.includes("잔") || result === "한잔!";

              return (
                <p key={player}>
                  {player}번 플레이어:
                  <PlayerResult isDrinking={isDrinking}> {result}</PlayerResult>
                </p>
              );
            }
          )}
        </DrinkingResult>
      </ResultBoard>
      <RestartButton onClick={() => navigate("/")}>다시 하기</RestartButton>
    </ResultsContainer>
  );
};

export default Results;
