import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import appRouter from "./router";
import "./index.css";

const rootElement = document.getElementById("root");

const root = ReactDOM.createRoot(rootElement);

root.render(<RouterProvider router={appRouter} />);
