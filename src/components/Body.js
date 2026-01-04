import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./Browse";
import Login from "./Login";
import ErrorPage from "./Error";

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: "/", element: <Login></Login> },
    {
      path: "/login",
      element: <Login></Login>,
    },
    {
      path: "/browse",
      element: <Browse></Browse>,
    },
    {
      path: "/error",
      element: <ErrorPage></ErrorPage>,
    },
  ]);

  return (
    <>
      <RouterProvider router={appRouter} />
    </>
  );
};

export default Body;
