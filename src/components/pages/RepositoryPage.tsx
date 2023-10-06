import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getRepository } from "@/core/data/getRepository";
import { Repository } from "@/core/models/Repository";
import { RepositoryTemplate } from "@/components/templates";

export const RepositoryPage = () => {
  const params = useParams();
  const [loading, setLoading] = useState(false);
  const [repo, setRepo] = useState<Repository>();

  const getRepoData = async (fullName: string) => {
    setLoading(() => true);
    const repo = await getRepository(fullName);
    if (repo) setRepo(() => repo);
    setLoading(() => false);
  };

  useEffect(() => {
    if (params.repository) {
      getRepoData(`${params.username}/${params.repository}`);
    }
  }, [params]);

  return (
    <RepositoryTemplate
      loading={loading}
      repo={{
        ...repo,
        name: params.repository,
        owner: {
          ...repo?.owner,
          username: params.username,
        },
      }}
    />
  );
};
