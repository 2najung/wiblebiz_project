import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <NavContainer>
      <NavLinks>
        <NavLink>
          <NavLinkAnchor active={false}>서비스 소개</NavLinkAnchor>
        </NavLink>
        <NavLink>
          <NavLinkAnchor active={true}>자주 묻는 질문</NavLinkAnchor>
        </NavLink>
        <NavLink>
          <NavLinkAnchor active={false}>새소식</NavLinkAnchor>
        </NavLink>
        <NavLink>
          <NavLinkAnchor active={false}>상담문의</NavLinkAnchor>
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default NavBar;

const NavContainer = styled.nav`
  width: 100%;
  display: flex;
  justify-content: flex-end;

  @media (max-width: 1024px) {
    justify-content: flex-start;
    flex-direction: column;
    align-items: center;
    text-align: center;
    font-size: 24px;
  }
`;

const NavLinks = styled.ul`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 1.5rem;
  }
`;

const NavLink = styled.li`
  list-style: none;
`;

const NavLinkAnchor = styled.a<{ active: boolean }>`
  text-decoration: none;
  color: ${(props) => (props.active ? "#000" : "#000")};
  cursor: pointer;
  position: relative;
  margin: 0 16px;
  font-size: 18px;
  font-weight: 600;
  padding-bottom: 20px;

  &:after {
    content: "";
    display: ${(props) => (props.active ? "block" : "none")};
    position: absolute;
    left: 0;
    right: 0;
    bottom: -4px;
    height: 4px;
    background-color: var(--mint-900);

    @media (max-width: 1024px) {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    margin: 0;
    padding-bottom: 0;
    color: ${(props) => (props.active ? "var(--mint-900);" : "#000")};
  }
`;
