import LandingPage from "./Components/LandingPage/LandingPage";
import "./App.css";
import RootComp from "./Components/RootComp/RootComp";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import UserData from "./Components/UserData/UserData";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootComp />,
    children: [
      {
        path: "/",
        element: <LandingPage />,
      },
      {
        path: "/home",
        element: <LandingPage />,
      },
      {
        path: "/user",
        element: <UserData />,
      },
    ],
  },
]);

function App() {
  return(
  <>
    <RouterProvider router={router} />;
  </>)
}

export default App;
