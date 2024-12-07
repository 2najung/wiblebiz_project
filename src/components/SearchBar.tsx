import styled from "styled-components";
import SearchSVG from "../assets/search.svg?react";
import { useState } from "react";

const SearchBar = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearchClick = () => {
    onSearch(inputValue);
  };

  return (
    <SearchContainer>
      <SearchWrapper>
        <SearchInput
          type="text"
          placeholder="찾으시는 내용을 입력해 주세요"
          value={inputValue}
          onChange={handleInputChange}
        />
        <SearchButton onClick={handleSearchClick}>
          <SearchSVG />
        </SearchButton>
      </SearchWrapper>
    </SearchContainer>
  );
};

export default SearchBar;

const SearchContainer = styled.div`
  background-color: var(--gray-10);
  display: flex;
  justify-content: center;
  margin-bottom: var(--px-md);
  padding: var(--px-md);
`;

const SearchWrapper = styled.div`
  position: relative;
  width: var(--search-bar-width);
`;

const SearchInput = styled.input`
  width: 100%;
  border: 1px solid var(--midnight-900);
  font-size: 1rem;
  height: var(--btn-xlg2);
  padding-left: 16px;
  padding-right: 3rem;
  box-sizing: border-box;
`;

const SearchButton = styled.button`
  position: absolute;
  top: 50%;
  right: 8px;
  transform: translateY(-50%);
  background: none;
  cursor: pointer;
  font-size: 1.2rem;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--midnight-900);
`;
