import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { useNavigate } from "react-router-dom";

import { Container, Title } from "@/components/atoms";
import { Search } from "@/components/organisms";
import { getSearchHistory } from "@/core/data/getSearchHistory";
import { setSearchHistory } from "@/core/data/setSearchHistory";
import { SearchHistory } from "@/core/models/SearchHistory";

export const HomePage = () => {
  const [items, setItems] = useState<SearchHistory>();
  const navigate = useNavigate();

  useEffect(() => {
    getSearchHistory().then((history) => setItems(history));
  }, []);

  const onSubmit = (username: string) => {
    setSearchHistory(username);
    navigate(username);
  };

  return (
    <Container className="flex items-center justify-center h-screen text-center p-2">
      <div>
        <Title>Encontre os repositórios mais populares!</Title>
        <Search
          autocomplete={{
            items,
            input: {
              autoFocus: true,
              placeholder: "Digite o nome de usuário",
              before: <MdSearch />,
            },
          }}
          className="mt-4"
          onSubmit={onSubmit}
        />
      </div>
    </Container>
  );
};
