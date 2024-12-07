import React from "react";
import styled from "styled-components";

type CategoryTabsProps = {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  categories: { categoryID?: string; name: string }[];
};

const CategoryTabs = ({
  selectedCategory,
  onSelectCategory,
  categories,
}: CategoryTabsProps) => {
  return (
    <TabContainer>
      {categories.map((category) => (
        <Tab
          key={category.name}
          selected={selectedCategory === category.name}
          onClick={() => onSelectCategory(category.name)}
        >
          {category.name}
        </Tab>
      ))}
    </TabContainer>
  );
};

export default CategoryTabs;

const TabContainer = styled.div`
  display: flex;
`;

const Tab = styled.label<{ selected: boolean }>`
  align-items: center;
  border-radius: calc(var(--btn-md) / 2);
  display: flex;
  font-weight: 600;
  justify-content: center;
  letter-spacing: -0.4px;
  min-width: var(--btn-md);
  padding: 0 var(--space-sm);
  cursor: pointer;
  height: var(--btn-md);
  background-color: ${({ selected }) =>
    selected ? "var(--mint-900);" : "#fff"};
  color: ${({ selected }) => (selected ? "#fff" : "#000")};
  outline: none;
`;
