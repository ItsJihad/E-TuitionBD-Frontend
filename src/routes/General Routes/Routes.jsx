import { createBrowserRouter } from "react-router";
import Homepage from "../../pages/home/Homepage";
import HomeLayout from "../../layouts/HomeLayout";
import ErrorPage from "../../pages/error/ErrorPage";
import Aboutpage from "../../pages/about/Aboutpage";
import Contactpage from "../../pages/contact/Contactpage";
import LoginPage from "../../pages/Auth/LoginPage";
import Registerpage from "../../pages/Auth/Registerpage";
import Tutors from "../../pages/tutors/Tutors";
import Tuitions from "../../pages/tuitions/Tuitions";
import LoadingPage from "../../components/Loader/LoadingPage";

export const GeneralRouter = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        
        index: true,
        // loader: () =>fetch(`${import.meta.env.VITE_ServerLink}/latestposts/all`),
        loader: async() =>{
              const [allPosts,allTeachers]=await Promise.all([
                fetch(`${import.meta.env.VITE_ServerLink}/latestposts/all`),
                fetch(`${import.meta.env.VITE_ServerLink}/allteachers`)
              ])

              const Posts=await allPosts.json()
              const Teachers= await allTeachers.json()
              return{Posts,Teachers}
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
      {
        index: true,
        path: "/tutors",
        loader: () => fetch(`${import.meta.env.VITE_ServerLink}/allteachers`),
        Component: Tutors,
      },
      {
        path: "/tuitions",
        loader: () =>
          fetch(`${import.meta.env.VITE_ServerLink}/latestposts/all`),
        Component: Tuitions,
      },
    ],
  },
  //
]);
