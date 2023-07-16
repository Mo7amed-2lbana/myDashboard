import React from "react";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Layout from "./Componant/Layout/Layout";
import Home from "./Componant/Home/Home";

export default function App() {
  const routers = createHashRouter([
    {
      path: "",
      element: <Layout />,
      children: [{ index: true, element: <Home /> }],
    },
  ]);

  return (
    <>
      <RouterProvider router={routers} />
    </>
  );
}
