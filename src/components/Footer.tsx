import React from "react";
import styled from "styled-components";
import KIALogo from "../assets/kialogo.svg?react";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterLinksInfo>
        <FooterLinks>
          <FooterLink href="#">개인정보 처리방침</FooterLink>
          <FooterLink href="#">이용약관</FooterLink>
        </FooterLinks>
        <FooterInfo>
          <FooterText>
            서울특별시 서초구 헌릉로 12 <em>기아㈜</em> 대표: 송호성, 최준영
          </FooterText>
          <br className="hide-on-row-reverse" />
          <FooterTextCombined>
            사업자등록번호: 119-81-02316 통신판매번호: 2006-07935
          </FooterTextCombined>
          <br className="hide-on-row-reverse" />
          <FooterText>고객센터: 1833-4964</FooterText>
          <br className="hide-on-column" />
          <FooterText>
            제휴문의:
            <a href="mailto:wible.biz@kia.com">wible.biz@kia.com </a>
          </FooterText>
        </FooterInfo>
      </FooterLinksInfo>
      <LogoAndCopyright>
        <KIALogoWrapper>
          <KIALogo />
        </KIALogoWrapper>
        <FooterText>© 2023 KIA CORP. All Rights Reserved.</FooterText>
      </LogoAndCopyright>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  background-color: var(--midnight-900);
  color: #ffffff;
  padding: 0 var(--side-padding);
  position: relative;
  justify-content: center;
  .hide-on-column {
    display: none;
  }
  @media (min-width: 1024px) {
    flex-direction: row-reverse;
    justify-content: space-between;
    .hide-on-row-reverse {
      display: none;
    }
  }
  height: var(--footer-height);
`;

const FooterLinksInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-bottom: 1rem;
  align-items: flex-start;
  text-align: right;
  justify-content: center;

  @media (min-width: 1024px) {
    text-align: right;
  }
`;

const FooterLinks = styled.div`
  display: flex;
  justify-content: flex-start;
  gap: 2rem;
`;

const FooterLink = styled.a`
  text-decoration: none;
  color: #ffffff;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const FooterInfo = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: left;
  color: var(--gray-400);
  a {
    color: var(--gray-400);
    text-decoration: underline;
  }
`;

const FooterTextCombined = styled.p`
  margin: 0.5rem 0;
  font-size: 0.875rem;
  text-align: right;
  display: inline;
`;

const LogoAndCopyright = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

const KIALogoWrapper = styled.div`
  text-align: left;
`;

const FooterText = styled.span`
  margin: 0.5rem 0;
  font-size: 0.875rem;
  text-align: left;
  color: var(--gray-400);
  &.hide-on-column {
    @media (max-width: 1024px) {
      display: none;
    }
  }
`;
