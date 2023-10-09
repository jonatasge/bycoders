import { SearchHistory } from "@/core/models/SearchHistory";

export type GetSearchHistory = () => Promise<SearchHistory | undefined>;
