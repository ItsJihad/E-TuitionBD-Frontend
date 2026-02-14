
import ErrorPage from "../../pages/error/ErrorPage";
import HomeLayout from "../../layouts/HomeLayout";
import Tutors from "../../pages/tutors/TutorProfile"
import Tuitions from "../../pages/tutors/Tutors"

export const TuitionRouter =[
  {
    path: "/",
    Component: HomeLayout,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      // { 
      //   path: "/seee",
      //   loader: () => fetch(`${import.meta.env.VITE_ServerLink}/allteachers`),
      //   Component: Tutors,
      // },
      // {
      //   path: "/tas",
      //   loader: () =>
      //     fetch(`${import.meta.env.VITE_ServerLink}/latestposts/all`),
      //   Component: Tuitions,
      // },
    ],
  },
];
