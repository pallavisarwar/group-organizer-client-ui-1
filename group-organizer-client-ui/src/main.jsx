import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";

import App from "./App.jsx";
import { RouterProvider } from "react-router";
import { MembersPage } from "./pages/members-page/MembersPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  { path: "/members", element: <MembersPage /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={routes} />
  </React.StrictMode>
);
