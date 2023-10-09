import { MdArrowDownward, MdArrowUpward } from "react-icons/md";

import {
  Card,
  Container,
  Link,
  Skeleton,
  Subtitle,
  Text,
} from "@/components/atoms";
import { Data, Header, LinkCard } from "@/components/molecules";
import { Overview, Stars } from "@/components/organisms";
import { Repository } from "@/core/models/Repository";
import { User } from "@/core/models/User";

export type UserTemplateProps = {
  loadingUser?: boolean;
  user?: Partial<User> & {
    username?: string;
  };
  loadingRepositories?: boolean;
  repositories?: Repository[];
  sort?: string;
  onSortChange?: () => void;
};

export const UserTemplate = ({
  loadingUser = true,
  user,
  loadingRepositories = true,
  repositories,
  sort,
  onSortChange,
}: UserTemplateProps) => {
  return (
    <Container className="UserTemplate px-2">
      <Header.Root>
        <Header.Breadcrumb
          avatar={{ src: user?.avatar_url }}
          loading={loadingUser}
        >
          {user?.username}
        </Header.Breadcrumb>
      </Header.Root>

      <Overview.Root className="mt-3">
        <Overview.Aside
          loading={loadingUser}
          avatar={{ src: user?.avatar_url }}
          title={{ children: user?.username, className: "my-2" }}
        >
          {loadingUser ? (
            <>
              <Skeleton type="Text" style={{ width: 150 }} />
              <Skeleton type="Text" style={{ width: 180 }} />
            </>
          ) : (
            <>
              <Data label="E-mail:">{user?.email || "informação privada"}</Data>

              <div className="flex justify-center gap-1 my-1">
                <Data label={user?.followers}>seguidores</Data>
                <Data label={user?.following}>seguindo</Data>
              </div>
            </>
          )}
        </Overview.Aside>

        <Overview.Main className="text-left">
          {loadingUser ? (
            <section>
              <Skeleton
                type="Subtitle"
                className="mb-1"
                style={{ width: 200 }}
              />
              <Skeleton type="Block" className="mb-4" style={{ height: 96 }} />
            </section>
          ) : (
            user?.bio && (
              <section>
                <Subtitle className="mb-1">Bio:</Subtitle>
                <Card className="mb-4">
                  <Text>{user?.bio}</Text>
                </Card>
              </section>
            )
          )}

          {loadingRepositories ? (
            <section>
              <Skeleton
                type="Subtitle"
                className="mb-1"
                style={{ width: 200 }}
              />
              {[...Array(50).keys()].map((i) => (
                <Skeleton
                  key={i}
                  type="Block"
                  className="my-1"
                  style={{ height: 50 }}
                />
              ))}
            </section>
          ) : (
            <section>
              <div className="section-header flex items-end justify-between">
                <Subtitle>Top 50 repositórios mais populares:</Subtitle>

                <Data
                  label="Ordem:"
                  onClick={onSortChange}
                  className="flex gap-1 select-none cursor-pointer"
                >
                  {sort === "asc" ? (
                    <span className="inline-flex items-center gap-0.5">
                      Crescente <MdArrowUpward />
                    </span>
                  ) : (
                    <span className="inline-flex items-center gap-0.5">
                      Decrescente <MdArrowDownward />
                    </span>
                  )}
                </Data>
              </div>

              {repositories?.length ? (
                repositories?.map((repository, i) => (
                  <LinkCard
                    key={i}
                    to={`/${repository.full_name}`}
                    className="block my-1"
                  >
                    <div className="flex items-center justify-between">
                      <Link as="h3">{repository.name}</Link>
                      <Stars>{repository.stargazers_count}</Stars>
                    </div>
                  </LinkCard>
                ))
              ) : (
                <Card className="text-center mt-1">
                  <Text>Sem repositórios.</Text>
                </Card>
              )}
            </section>
          )}
        </Overview.Main>
      </Overview.Root>
    </Container>
  );
};
