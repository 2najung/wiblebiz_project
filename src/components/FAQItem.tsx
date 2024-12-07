import { useState } from "react";
import styled from "styled-components";
import ArrowSVG from "../assets/arrow.svg?react";
type FAQItemProps = {
  subCategoryName: string;
  question: string;
  answer: string;
};

const FAQItem = ({ question, answer, subCategoryName }: FAQItemProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <FAQItemContainer isOpen={isOpen} onClick={() => setIsOpen(!isOpen)}>
        <ItemWrapper>
          <Category>{subCategoryName}</Category>
          <Question>{question}</Question>
        </ItemWrapper>
        <ToggleIcon isOpen={isOpen}>
          <ArrowSVG />
        </ToggleIcon>
      </FAQItemContainer>
      {isOpen && <Answer dangerouslySetInnerHTML={{ __html: answer }} />}
    </div>
  );
};

export default FAQItem;

const FAQItemContainer = styled.div<{ isOpen: boolean }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
  padding: 1rem;
  border-bottom: 1px solid #eaeaea;
  background-color: ${({ isOpen }) => (isOpen ? "#f0f0f0" : "white")};

  &:hover {
    background-color: #f9f9f9;
  }

  @media (max-width: 1024px) {
    align-items: flex-start;
  }
`;

const ItemWrapper = styled.div`
  display: flex;
  width: 100%;
  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Category = styled.div`
  font-weight: bold;
  color: var(--gray-500);
  flex-basis: 20%;
  font-size: var(--faq-list-a-size);
  line-height: var(--line-height-sm);

  @media (max-width: 1024px) {
    width: 100%;
    text-align: left;
  }
`;

const Question = styled.strong`
  flex-basis: 70%;
  text-align: left;
  font-size: var(--faq-list-a-size);
  line-height: var(--line-height-sm);

  @media (max-width: 1024px) {
    width: 100%;
    margin-bottom: 0.5rem;
  }
`;

const ToggleIcon = styled.div<{ isOpen: boolean }>`
  transform: ${({ isOpen }) => (isOpen ? "rotate(180deg)" : "rotate(0deg)")};
  transform-origin: center;

  @media (max-width: 1024px) {
    align-self: center;
  }
`;

const Answer = styled.div`
  padding: 1rem;
  background-color: #fff;
  text-align: left;
  color: rgba(106, 122, 135, 1);
  word-break: keep-all;
`;
