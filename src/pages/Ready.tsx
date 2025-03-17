import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import styled from "@emotion/styled";
import { flexStyles } from "@styles/flexStyles";
import { fonts } from "@styles/fonts";

const ReadyContainer = styled.div`
  ${flexStyles.columnCenter}
  ${flexStyles.gap("2rem")}
  height: 100vh;
  padding: 2rem;
`;

const TurnText = styled.h1`
  ${fonts.title}
  font-size: 3rem;
  color: #333;
  text-shadow: 2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff,
    -2px 2px 0 #fff;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease forwards;
`;

const NumberGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  max-width: 500px;
  width: 100%;
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.5s ease 0.3s forwards;
  padding: 2rem;
`;

const NumberButton = styled.button<{ selected?: boolean }>`
  ${fonts.button}
  width: 100px;
  height: 100px;
  border-radius: 50%;
  font-size: 2rem;
  background-color: white;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  border: ${({ selected }) =>
    selected ? "8px solid #FF6B6B" : "8px solid transparent"};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
    border-color: ${({ selected }) => (selected ? "#FF6B6B" : "#FFB6C1")};
  }

  &:active {
    transform: translateY(2px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
`;

const NumberContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  margin-top: 2rem;
`;

const ResultButton = styled.button`
  ${flexStyles.button}
  font-size: 2rem;
  padding: 1rem 3rem;
  opacity: 0;
  animation: fadeInUp 0.5s ease forwards;
`;

interface PlayerChoice {
  playerNumber: number;
  selectedNumber: number;
}

const Ready = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const playerCount = location.state?.playerCount || 2;
  const [currentPlayer, setCurrentPlayer] = useState(1);
  const [choices, setChoices] = useState<PlayerChoice[]>([]);
  const [selectedNumber, setSelectedNumber] = useState<number | null>(null);

  const handleNumberSelect = (number: number) => {
    setSelectedNumber(number);
  };

  const handleNextPlayer = () => {
    if (selectedNumber === null) return;

    const newChoice = {
      playerNumber: currentPlayer,
      selectedNumber: selectedNumber,
    };

    setChoices((prev) => [...prev, newChoice]);

    if (currentPlayer < playerCount) {
      setCurrentPlayer((prev) => prev + 1);
      setSelectedNumber(null);
    }
  };

  const handleShowResults = () => {
    if (selectedNumber !== null) {
      const finalChoice = {
        playerNumber: currentPlayer,
        selectedNumber: selectedNumber,
      };
      const finalChoices = [...choices, finalChoice];

      console.log("최종 선택 결과:", finalChoices);

      navigate("/results", {
        state: {
          playerCount,
          choices: finalChoices,
        },
      });
    }
  };

  return (
    <ReadyContainer>
      <TurnText>{currentPlayer}번째 플레이어 차례입니다</TurnText>
      <NumberContainer>
        <NumberGrid>
          {Array.from({ length: playerCount }, (_, i) => i + 1).map(
            (number) => (
              <NumberButton
                key={number}
                onClick={() => handleNumberSelect(number)}
                selected={selectedNumber === number}
              >
                {number}
              </NumberButton>
            )
          )}
        </NumberGrid>
        {selectedNumber && currentPlayer < playerCount && (
          <ResultButton onClick={handleNextPlayer}>다음 플레이어</ResultButton>
        )}
        {selectedNumber && currentPlayer === playerCount && (
          <ResultButton onClick={handleShowResults}>결과 확인하기</ResultButton>
        )}
      </NumberContainer>
    </ReadyContainer>
  );
};

export default Ready;
