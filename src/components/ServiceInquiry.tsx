import React from "react";
import styled from "styled-components";
import WriteSVG from "../assets/write.svg?react";
import TalkSVG from "../assets/talk.svg?react";
import DownloadSVG from "../assets/download.svg?react";

const ServiceInquiry = () => {
  return (
    <ServiceContainer>
      <ServiceTitle>서비스 문의</ServiceTitle>
      <ButtonWrapper>
        <InquiryButton>
          <IconWrapper>
            <DownloadSVG />
          </IconWrapper>
          상품제안서 다운로드
        </InquiryButton>
        <InquiryButton>
          <IconWrapper>
            <WriteSVG />
          </IconWrapper>
          상담문의 등록하기
        </InquiryButton>
        <InquiryButton>
          <IconWrapper>
            <TalkSVG />
          </IconWrapper>
          <ButtonTextWrapper>
            카톡으로 문의하기
            <SubText>ID: Wible Biz(위블 비즈)</SubText>
          </ButtonTextWrapper>
        </InquiryButton>
      </ButtonWrapper>
    </ServiceContainer>
  );
};

export default ServiceInquiry;

const ServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const ServiceTitle = styled.h2`
  font-size: var(--heading-2);
  margin: var(--heading-2-margin);
  line-height: var(--line-height-sm);
  text-align: left;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1240px;
  flex-wrap: wrap;
  gap: var(--space-md);

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }
`;

const InquiryButton = styled.button`
  flex: 1 1;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  border-radius: 0;
  background: #fff;
  cursor: pointer;
  font-size: var(--btn-xxlg-size);
  height: var(--btn-xxlg);
  min-height: var(--btn-xxlg);

  @media (max-width: 1024px) {
    width: 100%;
    justify-content: left;
    padding-left: 20px;
  }

  &:hover {
    background: #f0f0f0;
    border-color: #000;
  }
`;

const IconWrapper = styled.div`
  margin-right: var(--space-sm);
`;

const ButtonTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SubText = styled.em`
  color: var(--gray-500);
  font-size: 14px;
  font-weight: 400;
`;
