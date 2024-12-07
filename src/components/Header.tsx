import React, { useState } from "react";
import styled from "styled-components";
import LogoSVG from "../assets/logo.svg?react";
import NavBar from "./NavBar";

const Header = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen((prev) => !prev);
  };

  return (
    <>
      <HeaderContainer>
        <LogoWrapper>
          <LogoSVG />
        </LogoWrapper>
        <NavBarWrapper>
          <NavBar />
        </NavBarWrapper>
        <HamburgerButton onClick={toggleModal}>
          {isModalOpen ? <CloseIcon>&times;</CloseIcon> : <HamburgerIcon />}
        </HamburgerButton>
      </HeaderContainer>
      {isModalOpen && (
        <>
          <ModalOverlay onClick={toggleModal} />
          <Modal>
            <NavBar />
          </Modal>
        </>
      )}
    </>
  );
};

export default Header;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #fff;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    justify-content: space-between;
  }
`;

const LogoWrapper = styled.div`
  margin-right: 1rem;
  height: 100%;
  width: 120px;

  svg {
    height: 100%;
    width: auto;
  }
`;

const NavBarWrapper = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  cursor: pointer;

  @media (max-width: 1024px) {
    display: block;
  }
`;

const HamburgerIcon = styled.div`
  width: 24px;
  height: 3px;
  background: #000;
  position: relative;

  &:before,
  &:after {
    content: "";
    width: 24px;
    height: 3px;
    background: #000;
    position: absolute;
    left: 0;
  }

  &:before {
    top: -8px;
  }

  &:after {
    top: 8px;
  }
`;

const CloseIcon = styled.span`
  font-size: 24px;
  font-weight: bold;
  color: #000;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 999;
`;

const Modal = styled.div`
  position: fixed;
  top: 64px;
  left: 0;
  width: 100%;
  background: white;
  z-index: 1000;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 1rem 2rem;
  height: 100%;
`;
