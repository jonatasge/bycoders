import { createBrowserRouter } from "react-router-dom";

import { HomePage, RepositoryPage, UserPage } from "@/components/pages";
import { getRepositories } from "@/core/data/getRepositories";
import { getUser } from "@/core/data/getUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/:username",
    element: <UserPage getUser={getUser} getRepositories={getRepositories} />,
  },
  {
    path: "/:username/:repository",
    element: <RepositoryPage />,
  },
]);
