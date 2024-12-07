import { HttpResponse, http } from "msw";
import faqs from "./data/faqs.json";

export const handlers = [
  http.get("/api/faq", () => {
    return HttpResponse.json(faqs);
  }),
];
