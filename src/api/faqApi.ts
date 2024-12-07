import axios from "axios";

export const getFAQs = async () => {
  try {
    const response = await axios.get("/api/faq");
    return response;
  } catch (error) {
    console.error("Error fetching FAQs:", error);
    throw error;
  }
};
