import { SetSearchHistory } from "@/core/domain/SetSearchHistory";
import { storage } from "@/core/infra/storage";
import { getSearchHistory } from "./getSearchHistory";

export const setSearchHistory: SetSearchHistory = async (value: string) => {
  const history = await getSearchHistory();
  return await storage.insert({
    table: "history",
    key: "search",
    value: [...new Set([value, ...(history || [])])],
  });
};
