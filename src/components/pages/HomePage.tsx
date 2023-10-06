import { useNavigate } from "react-router-dom";

import { Container, Title } from "@/components/atoms";
import { Search } from "@/components/molecules";

export const HomePage = () => {
  const navigate = useNavigate();

  return (
    <Container className="flex items-center justify-center h-screen text-center p-2">
      <div>
        <Title>Encontre os repositórios mais populares!</Title>
        <Search
          className="mt-4"
          input={{ autoFocus: true, placeholder: "Digite o nome de usuário" }}
          onSubmit={(username) => navigate(username)}
        />
      </div>
    </Container>
  );
};
