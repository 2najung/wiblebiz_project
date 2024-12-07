import FAQItem from "./FAQItem";
import styled from "styled-components";
import NodataSVG from "../assets/nodata.svg?react";

type FAQ = {
  id: number;
  subCategoryName: string;
  categoryName: string;
  question: string;
  answer: string;
};

type FAQListProps = {
  faqs: FAQ[];
};

const FAQList = ({ faqs = [] }: FAQListProps) => {
  return (
    <FAQListContainer>
      {faqs.length > 0 ? (
        faqs.map((faq) => (
          <FAQItem
            key={faq.id}
            subCategoryName={faq.subCategoryName}
            question={faq.question}
            answer={faq.answer}
          />
        ))
      ) : (
        <NoResultsContainer>
          <NoResultsIcon>
            <NodataSVG />
          </NoResultsIcon>
          <NoResultsText>검색결과가 없습니다.</NoResultsText>
        </NoResultsContainer>
      )}
    </FAQListContainer>
  );
};

export default FAQList;

const FAQListContainer = styled.div`
  align-items: center;
  justify-content: center;
  margin: 1rem 0;
  border-top: 2px solid var(--midnight-900);
`;

const NoResultsContainer = styled.div`
  padding: var(--space-box2) 0;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const NoResultsIcon = styled.div`
  background-size: contain;
  display: block;
  width: 80px;
  height: 80px;
`;

const NoResultsText = styled.p`
  color: var(--gray-500);
  line-height: var(--line-height-md);
  margin-top: var(--space-xsm);
  word-break: keep-all;
  font-size: 14px;
`;
