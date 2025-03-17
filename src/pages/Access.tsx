import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "@emotion/styled";
import { flexStyles } from "@styles/flexStyles";
import { fonts } from "@styles/fonts";

const AccessContainer = styled.div`
  ${flexStyles.columnCenter}
  height: 100vh;
  gap: 2rem;
`;

const AccessTitle = styled.h1`
  ${fonts.title}
  font-size: 2rem;
  color: #333;
  text-shadow: 2px 2px 0 #fff, -2px -2px 0 #fff, 2px -2px 0 #fff,
    -2px 2px 0 #fff;
`;

const AccessInput = styled.input`
  width: 300px;
  height: 50px;
  padding: 0 1rem;
  border: 3px solid #ffb6c1;
  border-radius: 8px;
  font-size: 1.2rem;
  text-align: center;

  &:focus {
    outline: none;
    border-color: #ff6b6b;
  }
`;

const Access = () => {
  const navigate = useNavigate();
  const [accessKey, setAccessKey] = useState("");

  // URL에서 키 파라미터 가져오기
  const urlParams = new URLSearchParams(window.location.search);
  const urlKey = urlParams.get("key");

  React.useEffect(() => {
    // URL에 키가 있고 올바른 키라면 자동으로 시작 페이지로 이동
    if (urlKey === process.env.REACT_APP_ACCESS_KEY) {
      navigate("/start");
    }
  }, [urlKey, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (accessKey === process.env.REACT_APP_ACCESS_KEY) {
      navigate("/start");
    } else {
      alert("잘못된 접근입니다.");
      setAccessKey("");
    }
  };

  return (
    <AccessContainer>
      <AccessTitle>너누군데?</AccessTitle>
      <form onSubmit={handleSubmit}>
        <AccessInput
          type="password"
          value={accessKey}
          onChange={(e) => setAccessKey(e.target.value)}
          placeholder="열려라 참깨"
        />
      </form>
    </AccessContainer>
  );
};

export default Access;
