import Tuitions from "../../pages/tuitions/Tuitions";
import Tutors from "../../pages/tutors/Tutors";
import TuitionDetails from "../../pages/tuitions/TuitionDetails"
import TutorProfile from "../../pages/tutors/TutorProfile"
import PrivateRoute from "../General Routes/PrivateRoutes"
export const PrivateApiCalls = [
  {
    path: "/tutors",
    element: (
          <PrivateRoute>
            <Tutors></Tutors>
          </PrivateRoute>
        ),
  },
  {
    path: "/tutors/:id",
    element: (
          <PrivateRoute>
            <TutorProfile></TutorProfile>
          </PrivateRoute>
        ),
  },
  {
    path: "/tuitions",
    element: (
          <PrivateRoute>
            <Tuitions></Tuitions>
          </PrivateRoute>
        ),
  },
  {
    path: "/tuitions/:id",
    element: (
          <PrivateRoute>
            <TuitionDetails></TuitionDetails>
          </PrivateRoute>
        ),
  }
];
