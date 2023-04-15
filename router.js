import { lazy, Suspense } from "react";
import { createBrowserRouter } from "react-router-dom";

// Lazy Loading/Import, Chunking, Code Splitting, Dynamic Bundling, On Demand Loading, Dynamic import

import App from "./App";
import ErrorElement from "./ErrorElement";
const Home = lazy(() => import("./src/pages/Home"));
const About = lazy(() => import("./src/pages/About"));
const Contact = lazy(() => import("./src/pages/Contact"));
const RestaurantDetails = lazy(() => import("./src/pages/RestaurantDetails"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorElement />,
    children: [
      {
        path: "/",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "about",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <About />
          </Suspense>
        ),
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "restaurant/:id",
        element: (
          <Suspense fallback={<h1>Loading</h1>}>
            <RestaurantDetails />
          </Suspense>
        ),
      },
    ],
  },
]);

export default appRouter;
