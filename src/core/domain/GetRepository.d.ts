import { Repository } from "@/core/models/repository";

export type GetRepository = (fullName: string) => Promise<Repository>;
