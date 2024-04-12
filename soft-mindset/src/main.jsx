import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Home1 from "./Home1/Home.jsx";
import Home2 from "./Home2/Home.jsx";


import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "/",
      //   element: <Home1 />,
      // },
       {
        path: "/",
        element: <Home2 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
