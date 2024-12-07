import React from "react";
import styled from "styled-components";
import GoogleLogoSVG from "../assets/logo_google.svg?react";
import AppStoreLogoSVG from "../assets/logo_appstore.svg?react";
const AppPromotion = () => {
  return (
    <PromotionContainer>
      <Title>
        <em> 위블 비즈 App </em>지금 만나보세요!
      </Title>
      <ButtonContainer>
        <DownloadButton>
          <GoogleLogoSVG />
          Google Play
        </DownloadButton>
        <DownloadButton>
          <AppStoreLogoSVG />
          App Store
        </DownloadButton>
      </ButtonContainer>
    </PromotionContainer>
  );
};

export default AppPromotion;

const PromotionContainer = styled.div`
  display: flex;
  text-align: center;
  padding: 2rem;
  background-color: var(--gray-10);
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
`;

const Title = styled.h2`
  em {
    color: var(--mint-900);
  }
`;

const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
  @media (max-width: 743px) {
    flex-direction: column;
    max-width: 264px;
  }
  font-size: 14px;
  width: 100%;
`;

const DownloadButton = styled.h2`
  display: inline-flex;
  align-items: center;
  padding: 1rem;
  justify-content: center;
  background: #fff;
  text-decoration: none;
  color: #000;
  border-radius: 8px;
  cursor: pointer;
  width: 296px;
  img {
    height: 24px;
    margin-right: 0.5rem;
  }
`;
