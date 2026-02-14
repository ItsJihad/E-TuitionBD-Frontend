import { createBrowserRouter } from "react-router";
import Homepage from "../../pages/home/Homepage";
import HomeLayout from "../../layouts/HomeLayout";
import ErrorPage from "../../pages/error/ErrorPage";
import Aboutpage from "../../pages/about/Aboutpage";
import Contactpage from "../../pages/contact/Contactpage";
import LoginPage from "../../pages/Auth/LoginPage";
import Registerpage from "../../pages/Auth/Registerpage";
import LoadingPage from "../../components/Loader/LoadingPage";
import { PrivateApiCalls } from "./PrivateApiCalls.routes";

export const GeneralRouter = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        loader: async () => {
          const [allPosts, allTeachers] = await Promise.all([
            fetch(`${import.meta.env.VITE_ServerLink}/latestposts/all`),
            fetch(`${import.meta.env.VITE_ServerLink}/allteachers`),
          ]);

          const Posts = await allPosts.json();
          const Teachers = await allTeachers.json();
          return { Posts, Teachers };
        },

        path: "/",
        Component: Homepage,
        hydrateFallbackElement: <LoadingPage></LoadingPage>,
      },
      {
        path: "/about",
        Component: Aboutpage,
      },
      {
        path: "/contact",
        Component: Contactpage,
      },
      {
        path: "/signin",
        Component: LoginPage,
      },
      {
        path: "/register",
        Component: Registerpage,
      },
      ...PrivateApiCalls,
    ],
  },
  //
]);
