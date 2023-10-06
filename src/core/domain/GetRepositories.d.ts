import { Repository } from "@/core/models/repository";

export type GetRepositories = (props: {
  direction?: "asc" | "desc";
  per_page?: number;
  sort?: "created" | "updated" | "pushed" | "full_name";
  username: string;
}) => Promise<Repository[]>;
