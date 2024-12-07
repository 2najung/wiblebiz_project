import React from "react";
import styled from "styled-components";
import Process1SVG from "../assets/process1.svg?react";
import Process2SVG from "../assets/process2.svg?react";
import Process3SVG from "../assets/process3.svg?react";
import Process4SVG from "../assets/process4.svg?react";
import StepArrowSVG from "../assets/step_arrow.svg?react";

const ProcessGuide = () => {
  return (
    <ProcessContainer>
      <ProcessTitle>이용 프로세스 안내</ProcessTitle>
      <ProcessWrapper>
        <ProcessItem>
          <IconWrapper>
            <Process1SVG />
          </IconWrapper>
          <StepContent>
            <StepTitle>1. 문의 등록</StepTitle>
            <StepDescription>
              상담 문의를 등록해 주시면, 담당자가 맞춤형 상담을 제공합니다.
            </StepDescription>
          </StepContent>
        </ProcessItem>
        <StepArrowWrapper>
          <StepArrow />
        </StepArrowWrapper>
        <ProcessItem>
          <IconWrapper>
            <Process2SVG />
          </IconWrapper>
          <StepContent>
            <StepTitle>2. 관리자 설정</StepTitle>
            <StepDescription>
              관리자 Web 접속 후 결제방식 및 회사정보를 설정합니다.
            </StepDescription>
          </StepContent>
        </ProcessItem>
        <StepArrowWrapper>
          <StepArrow />
        </StepArrowWrapper>
        <ProcessItem>
          <IconWrapper>
            <Process3SVG />
          </IconWrapper>
          <StepContent>
            <StepTitle>3. 임직원 가입</StepTitle>
            <StepDescription>
              사용자 App에서 회원가입 후 소속 회사 인증을 진행합니다.
            </StepDescription>
          </StepContent>
        </ProcessItem>
        <StepArrowWrapper>
          <StepArrow />
        </StepArrowWrapper>
        <ProcessItem>
          <IconWrapper>
            <Process4SVG />
          </IconWrapper>
          <StepContent>
            <StepTitle>4. 서비스 이용</StepTitle>
            <StepDescription>
              사용자 App에서 차량 예약을 하고 위블존에서 바로 이용하세요!
            </StepDescription>
          </StepContent>
        </ProcessItem>
      </ProcessWrapper>
    </ProcessContainer>
  );
};

export default ProcessGuide;

const ProcessContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem 0;
`;
const ProcessTitle = styled.h2`
  font-size: var(--heading-2);
  margin: var(--heading-2-margin);
  line-height: var(--line-height-sm);
  text-align: left;
`;

const ProcessWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  max-width: 1240px;
  gap: var(--space-md);

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const ProcessItem = styled.div`
  text-align: left;
  flex: 1;
  margin: 0 1rem;
  position: relative;

  @media (max-width: 1024px) {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
  }
`;

const StepArrowWrapper = styled.div`
  @media (max-width: 1024px) {
    display: none;
  }
`;

const StepArrow = styled(StepArrowSVG)`
  flex-shrink: 0;
  margin: 0 1rem;
`;

const IconWrapper = styled.div`
  margin-bottom: 1rem;

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

const StepContent = styled.div`
  text-align: left;

  @media (max-width: 1024px) {
    flex: 1;
  }
`;

const StepTitle = styled.h3`
  font-weight: bold;
  margin-bottom: 0.5rem;
`;

const StepDescription = styled.p`
  color: #666;
`;
