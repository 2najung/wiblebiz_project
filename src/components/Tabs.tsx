import styled from "styled-components";

type TabsProps = {
  selectedTab: string;
  onSelectTab: (tab: string) => void;
};

const Tabs = ({ selectedTab, onSelectTab }: TabsProps) => {
  return (
    <TabContainer>
      <Tab
        selected={selectedTab === "서비스 도입"}
        onClick={() => onSelectTab("서비스 도입")}
      >
        서비스 도입
      </Tab>
      <Tab
        selected={selectedTab === "서비스 이용"}
        onClick={() => onSelectTab("서비스 이용")}
      >
        서비스 이용
      </Tab>
    </TabContainer>
  );
};

export default Tabs;

const TabContainer = styled.div`
  margin: 0 auto;
  display: flex;
  border: 1px solid var(--midnight-100);
  font-size: var(--tab-fsize);
  margin-bottom: var(--px-lg);
  min-height: var(--btn-xlg2);
`;

const Tab = styled.button<{ selected: boolean }>`
  width: 50%;
  border-radius: 0;
  border: 1px solid #333;
  border: none;
  cursor: pointer;
  align-items: center;
  display: flex;
  justify-content: center;
  line-height: 1.1;
  font-size: var(--tab-fsize);
  font-weight: 600;
  padding: 8px;
  text-align: center;
  background-color: ${({ selected }) =>
    selected ? "var(--midnight-900)" : "#ffffff"};
  color: ${({ selected }) => (selected ? "#ffffff" : "#000")};
`;
