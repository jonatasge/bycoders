import { GetSearchHistory } from "@/core/domain/GetSearchHistory";
import { storage } from "@/core/infra/storage";
import { SearchHistory } from "@/core/models/SearchHistory";

export const getSearchHistory: GetSearchHistory = async () => {
  return await storage.find<SearchHistory>({ table: "history", key: "search" });
};
