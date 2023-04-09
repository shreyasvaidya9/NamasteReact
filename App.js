import React from "react";
import { Outlet } from "react-router-dom";

import Layout from "./src/components/Layout/Layout";

const App = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
};

export default App;

/**
 * Header
 *  - Logo
 *  - Navbar
 *  - Cart
 *
 * Body
 *  - Search bar
 *  - Restaurant List
 *      - Restaurant Card
 *          - Image
 *          - Name
 *          - Rating
 *          - Cuisines
 *
 * Footer
 *  - links
 *  - Copyright
 */
