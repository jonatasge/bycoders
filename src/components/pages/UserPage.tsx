import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { UserTemplate } from "@/components/templates";
import { GetRepositories } from "@/core/domain/GetRepositories";
import { GetUser } from "@/core/domain/GetUser";
import { Repository } from "@/core/models/Repository";
import { User } from "@/core/models/User";

export type UserPageProps = {
  getUser: GetUser;
  getRepositories: GetRepositories;
};

export const UserPage = ({ getUser, getRepositories }: UserPageProps) => {
  const params = useParams();
  const [loadingUser, setLoadingUser] = useState(false);
  const [user, setUser] = useState<User>();
  const [loadingRepos, setLoadingRepos] = useState(false);
  const [repos, setRepos] = useState<Repository[]>([]);
  const [sort, setSort] = useState("desc");

  const getUserData = async (username: string) => {
    setLoadingUser(() => true);
    const user = await getUser(username);
    setUser(() => user);
    setLoadingUser(() => false);
  };

  const getReposData = async (username: string) => {
    setLoadingRepos(() => true);
    const repos = await getRepositories({ username });
    if (repos instanceof Array) {
      setRepos(() => sortRepos({ repos, sort: "desc" }));
    }
    setLoadingRepos(() => false);
  };

  const sortRepos = ({
    repos,
    sort,
  }: {
    repos: Repository[];
    sort: "asc" | "desc";
  }) => {
    return repos.sort((a, b) =>
      sort === "asc"
        ? a.stargazers_count > b.stargazers_count
          ? 1
          : -1
        : a.stargazers_count < b.stargazers_count
        ? 1
        : -1
    );
  };

  useEffect(() => {
    if (params.username) {
      getUserData(params.username);
      getReposData(params.username);
    }
  }, [params.username]);

  const onSortChange = () => {
    setSort((sort) => {
      const newSort = sort === "asc" ? "desc" : "asc";
      setRepos((repos) => sortRepos({ repos, sort: newSort }));
      return newSort;
    });
  };

  return (
    <UserTemplate
      loadingUser={loadingUser}
      user={{ ...user, username: params.username }}
      loadingRepositories={loadingRepos}
      repositories={repos}
      sort={sort}
      onSortChange={onSortChange}
    />
  );
};
