import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./components/Root/Root";
import ErrorPage from "./components/errorpage/ErrorPage";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Foods from "./components/Foods/Foods";
import Feedback from "./components/Feedback/Feedback";
import SingleFoodes from "./components/Foods/SingleFoodes";
import Details from "./components/Foods/Details/Details";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "foods",
        element: <Foods />,
        children: [
          {
            path: "",
            loader: () =>
              fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
            element: <SingleFoodes />,
          },
          {
            path: "details/:id",
            loader: () =>
              fetch("https://www.themealdb.com/api/json/v1/1/categories.php"),
            element: <Details />,
          },
        ],
      },
      {
        path: "about",
        loader: () => fetch("./year.json"),
        element: <About />,
      },
      {
        path: "feedback",
        loader: () => fetch("./Customer.json"),
        element: <Feedback />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
