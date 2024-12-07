import { useEffect, useState } from "react";
import styled from "styled-components";
import { getFAQs } from "../api/faqApi";
import FAQList from "../components/FAQList";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import CategoryTabs from "../components/CategoryTabs";
import Tabs from "../components/Tabs";
import ProcessGuide from "../components/ProcessGuide";
import ServiceInquiry from "../components/ServiceInquiry";
import AppPromotion from "../components/AppPromotion";
import Footer from "../components/Footer";
import InitSVG from "../assets/init.svg?react";

const FAQPage = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState("전체");
  const [selectedTab, setSelectedTab] = useState("서비스 도입");
  const [categories, setCategories] = useState([]);
  const [visibleFaqsCount, setVisibleFaqsCount] = useState(10);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchPerformed, setSearchPerformed] = useState(false);

  useEffect(() => {
    if (selectedTab === "서비스 도입" || selectedTab === "서비스 이용") {
      setSelectedCategory("전체");
    }
  }, [selectedTab]);

  const fetchFAQs = async (tab) => {
    setLoading(true);
    try {
      const response = await getFAQs();
      if (response.data) {
        if (tab === "서비스 도입" && response.data.serviceIntroduction) {
          setFaqs(response.data.serviceIntroduction.items || []);
          setCategories([
            { categoryID: "ALL", name: "전체" },
            ...(response.data.serviceIntroduction
              .serviceIntroductionCategories || []),
          ]);
        } else if (response.data.serviceUsage) {
          setFaqs(response.data.serviceUsage.items || []);
          setCategories([
            { categoryID: "ALL", name: "전체" },
            ...(response.data.serviceUsage.serviceUsageCategories || []),
          ]);
        }
      }
    } catch (error) {
      console.error("Failed to fetch FAQs", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFAQs(selectedTab);
  }, [selectedTab]);

  useEffect(() => {
    fetchFAQs("서비스 도입");
    setSelectedTab("서비스 도입");
  }, []);

  const filteredFaqs = searchPerformed
    ? faqs.filter((faq) => {
        const matchesCategory =
          selectedTab === "서비스 도입"
            ? selectedCategory === "전체" ||
              faq.subCategoryName === selectedCategory
            : selectedCategory === "전체" ||
              faq.categoryName === selectedCategory;
        const matchesSearchTerm =
          faq.question.includes(searchTerm) || faq.answer.includes(searchTerm);
        return matchesCategory && matchesSearchTerm;
      })
    : faqs.filter((faq) => {
        return selectedTab === "서비스 도입"
          ? selectedCategory === "전체" ||
              faq.subCategoryName === selectedCategory
          : selectedCategory === "전체" ||
              faq.categoryName === selectedCategory;
      });

  const visibleFaqs = filteredFaqs.slice(0, visibleFaqsCount);

  const handleLoadMore = () => {
    setVisibleFaqsCount((prevCount) => prevCount + 10);
  };

  const handleResetSearch = () => {
    setSearchTerm("");
  };

  if (loading) {
    return <LoadingContainer>Loading...</LoadingContainer>;
  }

  if (!loading && !searchPerformed && faqs.length === 0) {
    return null;
  }

  return (
    <FAQPageContainer>
      <Header />
      <MainContent>
        <Title>
          자주 묻는 질문 <em>궁금하신 내용을 빠르게 찾아보세요.</em>
        </Title>
        <Tabs
          selectedTab={selectedTab}
          onSelectTab={(tab) => {
            setSelectedTab(tab);
            setSelectedCategory("전체");
          }}
        />
        <SearchBar
          onSearch={(term) => {
            setSearchTerm(term);
            setSearchPerformed(true);
          }}
          onResetSearch={() => {
            handleResetSearch();
            setSearchPerformed(false);
          }}
        />
        {searchPerformed && (
          <SearchWrapper>
            <SearchResultCount>
              검색결과 총<em>{filteredFaqs.length}</em> 건
            </SearchResultCount>
            <ResetSearchButton
              onClick={() => {
                handleResetSearch();
                setSearchPerformed(false);
              }}
            >
              <InitSVG />
              검색초기화
            </ResetSearchButton>
          </SearchWrapper>
        )}
        <CategoryTabs
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categories={categories}
        />
        <FAQList faqs={visibleFaqs} />
        {visibleFaqsCount < filteredFaqs.length && (
          <LoadMoreButton onClick={handleLoadMore}>더보기</LoadMoreButton>
        )}
        <ServiceInquiry />
        <ProcessGuide />
        <AppPromotion />
      </MainContent>
      <Footer />
    </FAQPageContainer>
  );
};

export default FAQPage;

const FAQPageContainer = styled.div``;

const MainContent = styled.div`
  text-align: center;
  min-height: calc(100vh - var(--footer-height));
  overflow: hidden;
  padding: var(--header-height) var(--side-padding) var(--bottom-padding);
  max-width: 1660px;
  margin: 0 auto;
`;

const Title = styled.h1`
  align-items: center;
  display: flex;
  flex-direction: column;
  font-size: var(--h1-fsize);
  height: var(--h1-height);
  justify-content: center;
  line-height: var(--line-height-sm);
  em {
    font-size: var(--h1-fsize-sm);
    font-weight: 400;
    line-height: var(--line-height-md);
    margin-top: 0.4em;
    text-align: center;
    word-break: keep-all;
  }
`;

const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  font-size: 1.5rem;
`;

const LoadMoreButton = styled.button`
  padding: 0.75rem 1.5rem;
  margin-top: 1rem;
  font-size: 14px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  position: relative;

  &::before {
    content: "+";
    font-size: 16px;
    margin-right: 0.5rem;
    color: inherit;
  }
`;

const SearchWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 1rem 0;
`;

const SearchResultCount = styled.h2`
  font-size: var(--heading-info);
  line-height: var(--line-height-sm);
  color: #333;
  margin: 1rem 0;
  display: flex;
  align-items: center;

  em {
    color: var(--mint-900);
  }
`;

const ResetSearchButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
`;
